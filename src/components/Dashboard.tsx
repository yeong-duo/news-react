import React, { useEffect, useState } from 'react';
import { Box, CssBaseline, AppBar, Toolbar, Typography, Container } from '@mui/material';
import Sidebar from './Sidebar';
import NewsTable from './NewsTable';
import { fetchNews } from '../services/newsService';

const Dashboard: React.FC = () => {
  const [gossipNews, setGossipNews] = useState([]);
  const [stockNews, setStockNews] = useState([]);
  const [itNews, setItNews] = useState([]);
  const [positiveNews, setPositiveNews] = useState([]);

  useEffect(() => {
    const fetchAllNews = async () => {
      try {
        const gossip = await fetchNews({ query: '가십' });
        const stocks = await fetchNews({ query: '주식', display: 100 });
        const it = await fetchNews({ query: 'IT' });
        const positive = await fetchNews({ query: '긍정' });
        
        setGossipNews(gossip);
        setStockNews(stocks);
        setItNews(it);
        setPositiveNews(positive);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchAllNews();
  }, []);

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ width: `calc(100% - 240px)`, ml: `240px` }}>
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}>
        <Toolbar />
        <Container>
          <Typography variant="h4" gutterBottom>
            Today's Gossip
          </Typography>
          <NewsTable data={gossipNews} />
          <Typography variant="h4" gutterBottom>
            Stock News
          </Typography>
          <NewsTable data={stockNews} />
          <Typography variant="h4" gutterBottom>
            IT News
          </Typography>
          <NewsTable data={itNews} />
          <Typography variant="h4" gutterBottom>
            Positive News
          </Typography>
          <NewsTable data={positiveNews} />
        </Container>
      </Box>
    </Box>
  );
};

export default Dashboard;
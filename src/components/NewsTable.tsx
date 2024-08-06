import React from 'react';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

interface NewsItem {
  title: string;
  description: string;
  link: string;
}

interface NewsTableProps {
  data: NewsItem[];
}

const NewsTable: React.FC<NewsTableProps> = ({ data }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell>Description</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) => (
            <TableRow key={index}>
              <TableCell>
                <a href={row.link} target="_blank" rel="noopener noreferrer">
                  {row.title}
                </a>
              </TableCell>
              <TableCell>{row.description}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default NewsTable;
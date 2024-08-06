import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:8080/api',
});

interface FetchNewsParams {
  query: string;
  display?: number;
  start?: number;
  sort?: string;
}

export const fetchNews = async ({ query, display = 10, start = 1, sort = 'sim' }: FetchNewsParams) => {
  const response = await instance.get('/news', {
    params: { query, display, start, sort },
  });
  return response.data.items;
};
import axios from 'axios';

const API_ENDPOINT = 'https://content.guardianapis.com';
const API_KEY = 'c433d83a-7a18-42e3-8280-52ec73cf82cd';

const guardianApi = axios.create({
  baseURL: API_ENDPOINT,
});

guardianApi.interceptors.request.use((config) => {
  const {
    url,
  } = config;

  const apiKeyQuery = url.includes('?') ? `&api-key=${API_KEY}` : `?api-key=${API_KEY}`;

  return {
    ...config,
    url: `${url}${apiKeyQuery}`,
  };
});

guardianApi.interceptors.response.use((response) => {
  const {
    data,
  } = response;

  return data.response;
});

export default guardianApi;

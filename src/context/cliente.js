import axios from 'axios';

const CancelToken = axios.CancelToken;
export const source = CancelToken.source();

const cliente = axios.create({
  baseURL: REACT_APP_API_URL,
  cancelToken: source.token
});

export default cliente;

import { AxiosResponse } from 'axios';
import axios from 'axios';
import { API_BASE } from '@/constants/constants';

export const getIntheBlockCoinData = async (coinName: string): Promise<any> => {

  const response: AxiosResponse<any> = await axios.get(`${API_BASE}/coin/${coinName}`);
  // const coinData = await handleResponse(response);
  return response.data;
}

export const getTotalGainers = async (): Promise<any> => {
  const response: AxiosResponse<any> = await axios.get(`${API_BASE}/coin/total_gainers`);
  return response.data;
}

export const getTotalLosers = async (): Promise<any> => {
  const response: AxiosResponse<any> = await axios.get(`${API_BASE}/coin/total_losers`);
  return response.data;
}

export const getTopCoins = async (): Promise<any> => {
  const response: AxiosResponse<any> = await axios.get(`${API_BASE}/coin/ranks`)
  return response.data;
}
import { request } from '../axios';
import {
  type IBurnRequest,
  type IBurnResponse,
  type ICollectRequest,
  type ICollectResponse,
  type ICreateWalletResponse,
  type IMintRequest,
  type IMintResponse,
} from './types';

export const mintUSDC = async (params: IMintRequest): Promise<IMintResponse> => {
  const { data } = await request({
    url: '/api/v1/transactions/mint',
    method: 'POST',
    data: params,
  });

  return data;
};

export const createWallet = async (): Promise<ICreateWalletResponse> => {
  const { data } = await request({
    url: '/api/v1/transactions/create-account',
    method: 'POST',
  });

  return data;
};

export const burnUSDC = async (params: IBurnRequest): Promise<IBurnResponse> => {
  const { data } = await request({
    url: '/api/v1/transactions/burn',
    method: 'POST',
    data: params,
  });

  return data;
};

export const collectUSDC = async (params: ICollectRequest): Promise<ICollectResponse> => {
  const { data } = await request({
    url: '/api/v1/transactions/collect-token',
    method: 'POST',
    data: params,
  });

  return data;
};

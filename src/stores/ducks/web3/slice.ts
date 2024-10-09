import type { RootState } from '@/stores/index';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IChatState {
  newWallet: `0x${string}` | '';
  txHash: `0x${string}` | '';
  modalType: ModalType | '';
}

export enum ModalType {
  CREATE_WALLET = 'CREATE_WALLET',
  MINT_USDC = 'MINT_USDC',
  COLLECT_USDC = 'COLLECT_USDC',
  BURN_USDC = 'BURN_USDC',
  SUCCESS = 'SUCCESS',
}

const initialState = {
  newWallet: '',
  txHash: '',
  modalType: '',
} as IChatState;

export const web3Slice = createSlice({
  name: 'web3',
  initialState,
  reducers: {
    setNewWallet: (state: IChatState, actions: PayloadAction<`0x${string}` | ''>) => {
      return {
        ...state,
        newWallet: actions.payload,
      };
    },
    setTxHash: (state: IChatState, actions: PayloadAction<`0x${string}` | ''>) => {
      return {
        ...state,
        txHash: actions.payload,
      };
    },
    setModalType: (state: IChatState, actions: PayloadAction<ModalType | ''>) => {
      return {
        ...state,
        modalType: actions.payload,
      };
    },
  },
});

export const { setNewWallet, setTxHash, setModalType } = web3Slice.actions;

export const getNewWallet = (state: RootState) => state.web3.newWallet;
export const getTxHash = (state: RootState) => state.web3.txHash;
export const getModalType = (state: RootState) => state.web3.modalType;
export const getState = (state: RootState) => state.web3;

export default web3Slice.reducer;

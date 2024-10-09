export interface IMintResponse {
  txHash: `0x${string}`;
}

export interface IMintRequest {
  amount: number;
  address: `0x${string}`;
}

export interface ICreateWalletResponse {
  walletAddress: `0x${string}`;
}

export interface IBurnResponse {
  txHash: `0x${string}`;
}

export interface IBurnRequest {
  amount: number;
}

export interface ICollectRequest {
  spender: `0x${string}`;
}

export interface ICollectResponse {
  txHash: `0x${string}`;
}

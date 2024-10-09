export const env = {
  PROXY_ADDRESS: process.env.NEXT_PUBLIC_PROXY_ADDRESS as `0x${string}`,
  TREASURY_ADDRESS: process.env.NEXT_PUBLIC_TREASURY_ADDRESS as `0x${string}`,
  API_URL: process.env.NEXT_PUBLIC_API_URL as string,
};

export const SCAN_URL = 'https://sepolia.etherscan.io/';

import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export const shortenWalletAddress = (address: string): string => {
  if (typeof address !== 'string') {
    return '';
  }
  if (address.length < 10) {
    return address;
  }

  return `${address.slice(0, 5)}...${address.slice(-5)}`;
};

export const shortenTxHash = (address: string): string => {
  if (typeof address !== 'string') {
    return '';
  }
  if (address.length < 10) {
    return address;
  }

  return `${address.slice(0, 7)}...${address.slice(-8)}`;
};

export const sleep = async (time: number) => {
  return new Promise<void>((resolve) =>
    setTimeout(() => {
      resolve();
    }, time)
  );
};

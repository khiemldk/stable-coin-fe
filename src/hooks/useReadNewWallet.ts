import { fiatV2ABI } from '@/contracts/abi';
import { env } from '@/utils/const';
import { useReadContract } from 'wagmi';

const useReadNewWallet = (address: string) => {
  const {
    data: balance,
    isLoading,
    refetch,
  } = useReadContract({
    abi: fiatV2ABI,
    address: env.PROXY_ADDRESS,
    functionName: 'balanceOf',
    args: [address as `0x${string}`],
    query: {
      enabled: !!address,
    },
  });

  return {
    balance: isLoading ? 0 : balance,
    isLoading,
    refetch,
  };
};
export default useReadNewWallet;

import { fiatV2ABI } from '@/contracts/abi';
import { env } from '@/utils/const';
import { useReadContract } from 'wagmi';

const useReadTreasury = () => {
  const {
    data: balance,
    isLoading,
    refetch,
  } = useReadContract({
    abi: fiatV2ABI,
    address: env.PROXY_ADDRESS,
    functionName: 'balanceOf',
    args: [env.TREASURY_ADDRESS],
  });

  return {
    balance: isLoading ? 0 : balance,
    address: env.TREASURY_ADDRESS,
    isLoading,
    refetch,
  };
};
export default useReadTreasury;

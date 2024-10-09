import { FC } from 'react';
import { Icons } from '@/assets/icons';
import { SCAN_URL } from '@/utils/const';

import { shortenTxHash } from '@/lib/utils';
import useReadNewWallet from '@/hooks/useReadNewWallet';
import useReadTreasury from '@/hooks/useReadTreasury';
import { useAppSelector } from '@/hooks/useRedux';
import { HStack } from '@/components/ui/h-stack';
import Modal from '@/components/ui/modal';
import { StyledButton } from '@/components/ui/styled-button';
import { VStack } from '@/components/ui/v-stack';

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  txHash: `0x${string}` | '';
}

interface IFBodyProps {
  txHash: `0x${string}` | '';
  handleClose: () => void;
}

export const SuccessModal: FC<SuccessModalProps> = ({ txHash, isOpen, onClose }) => {
  const newWallet = useAppSelector((state) => state.web3.newWallet);
  const { refetch } = useReadTreasury();
  const { refetch: refetchNewWallet } = useReadNewWallet(newWallet);

  const handleClose = () => {
    refetch();
    refetchNewWallet();
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleClose}
      header=""
      body={<Body handleClose={handleClose} txHash={txHash} />}
    ></Modal>
  );
};

const Body: FC<IFBodyProps> = ({ txHash, handleClose }) => {
  return (
    <div className="flex justify-center flex-col items-center gap-2">
      <Icons.success />
      <VStack>
        <p className="text-center text-lg font-medium">Successfully!</p>
        {txHash && (
          <a
            className="flex items-center gap-1 justify-center text-small text-neutral-03 text-center hover:underline"
            href={`${SCAN_URL}/tx/${txHash}`}
            target="_blank"
          >
            {shortenTxHash(txHash)}
            <Icons.link size={12} />
          </a>
        )}
      </VStack>
      <HStack className="justify-center mt-1 w-full">
        <StyledButton
          onClick={handleClose}
          variant="solid"
          color="primary"
          size="sm"
          className="md:w-[47%] w-full md:flex hidden"
        >
          CANCEL
        </StyledButton>
        <StyledButton onClick={handleClose} variant="solid" color="primary" size="sm" className="md:w-[47%] w-full">
          CONFIRM
        </StyledButton>
      </HStack>
    </div>
  );
};

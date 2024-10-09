import { FC } from 'react';
import { mintUSDC } from '@/api/web3';
import { QUERY_KEY } from '@/api/web3/key';
import { ModalType, setModalType, setTxHash } from '@/stores/ducks/web3/slice';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

import { sleep } from '@/lib/utils';
import { mintSchema } from '@/lib/validation';
import useReadNewWallet from '@/hooks/useReadNewWallet';
import { useAppDispatch } from '@/hooks/useRedux';
import { FormWrapper } from '@/components/ui/form';
import { TextField } from '@/components/ui/FormField/TextField';
import Modal from '@/components/ui/modal';
import { StyledButton } from '@/components/ui/styled-button';
import { VStack } from '@/components/ui/v-stack';

interface MintModalProps {
  isOpen: boolean;
  onClose: () => void;
  address: `0x${string}`;
}

interface IFormProps {
  amount: string;
  address: `0x${string}`;
}

export const MintModal: FC<MintModalProps> = ({ address, isOpen, onClose }) => {
  const { refetch } = useReadNewWallet(address);

  const handleClose = () => {
    onClose();
    refetch();
  };

  return <Modal isOpen={isOpen} onClose={handleClose} header="Mint USDC" body={<Body address={address} />}></Modal>;
};

const Body = ({ address }: { address: `0x${string}` }) => {
  const dispatch = useAppDispatch();
  const form = useForm({
    mode: 'onSubmit',
    defaultValues: {
      address: address,
      amount: '',
    },
    resolver: zodResolver(mintSchema),
  });

  const { mutateAsync: mint, isPending: isPendingMint } = useMutation({
    mutationFn: mintUSDC,
    mutationKey: [QUERY_KEY.mint],
    onError: () => {
      toast.error('Mint USDC failed');
    },
    onSuccess: async (data: { txHash: `0x${string}` }, request) => {
      dispatch(setModalType([ModalType.SUCCESS, `Mint ${request.amount} USDC Successfully!`]));
      dispatch(setTxHash(data.txHash));
    },
  });

  const handleSubmit = async (data: IFormProps) => {
    mint({
      address: data.address,
      amount: Number(data.amount),
    });
  };
  return (
    <FormWrapper form={form} onSubmit={handleSubmit}>
      <VStack spacing={12}>
        <TextField
          name="address"
          control={form.control}
          label="Address"
          type="text"
          placeholder="Placeholder"
          variant="default"
          className="border bg-transparent border-gray w-full"
          size="sm"
          wrapClassName="w-full"
          required
        />
        <TextField
          name="amount"
          control={form.control}
          label="Amount"
          type="number"
          placeholder="Placeholder"
          variant="default"
          className="border bg-transparent border-gray w-full"
          size="sm"
          wrapClassName="w-full"
          required
        />
        <StyledButton
          isLoading={isPendingMint}
          type="submit"
          fullWidth
          variant="solid"
          color="primary"
          size="sm"
          className="mt-2"
        >
          Mint USDC
        </StyledButton>
      </VStack>
    </FormWrapper>
  );
};

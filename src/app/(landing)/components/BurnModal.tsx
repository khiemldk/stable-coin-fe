import { FC } from 'react';
import { burnUSDC } from '@/api/web3';
import { QUERY_KEY } from '@/api/web3/key';
import { ModalType, setModalType, setTxHash } from '@/stores/ducks/web3/slice';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

import { burnSchema } from '@/lib/validation';
import useReadTreasury from '@/hooks/useReadTreasury';
import { useAppDispatch } from '@/hooks/useRedux';
import { FormWrapper } from '@/components/ui/form';
import { TextField } from '@/components/ui/FormField/TextField';
import Modal from '@/components/ui/modal';
import { StyledButton } from '@/components/ui/styled-button';
import { VStack } from '@/components/ui/v-stack';

interface BurnModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface IFormProps {
  amount: string;
}

export const BurnModal: FC<BurnModalProps> = ({ isOpen, onClose }) => {
  const { refetch } = useReadTreasury();

  const handleClose = () => {
    onClose();
    refetch();
  };
  return <Modal isOpen={isOpen} onClose={handleClose} header="Burn USDC" body={<Body />}></Modal>;
};

const Body = () => {
  const dispatch = useAppDispatch();
  const form = useForm<IFormProps>({
    mode: 'onSubmit',
    defaultValues: {
      amount: '',
    },
    resolver: zodResolver(burnSchema),
  });

  const { mutateAsync: burn, isPending } = useMutation({
    mutationFn: burnUSDC,
    mutationKey: [QUERY_KEY.burn],

    onError: (error: { message: string }) => {
      toast.error(error.message);
    },
    onSuccess: async (data: { txHash: `0x${string}` }) => {
      dispatch(setModalType(ModalType.SUCCESS));
      dispatch(setTxHash(data.txHash));
    },
  });

  const handleSubmit = async (data: IFormProps) => {
    burn({
      amount: Number(data.amount),
    });
  };
  return (
    <FormWrapper form={form} onSubmit={handleSubmit}>
      <VStack spacing={12}>
        <TextField
          name="amount"
          control={form.control}
          label="Amount"
          type="text"
          suffix="USDC"
          placeholder="Placeholder"
          variant="default"
          className="border bg-transparent border-gray w-full"
          size="sm"
          wrapClassName="w-full"
        />
        <StyledButton
          isLoading={isPending}
          type="submit"
          fullWidth
          variant="solid"
          color="primary"
          size="sm"
          className="mt-2"
        >
          Burn USDC
        </StyledButton>
      </VStack>
    </FormWrapper>
  );
};

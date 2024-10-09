import { FC } from 'react';
import { collectUSDC } from '@/api/web3';
import { QUERY_KEY } from '@/api/web3/key';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

import { collectSchema } from '@/lib/validation';
import { FormWrapper } from '@/components/ui/form';
import { TextField } from '@/components/ui/FormField/TextField';
import Modal from '@/components/ui/modal';
import { StyledButton } from '@/components/ui/styled-button';
import { VStack } from '@/components/ui/v-stack';

interface CollectModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface IFormProps {
  spender: string;
}

export const CollectModal: FC<CollectModalProps> = ({ isOpen, onClose }) => {
  return <Modal isOpen={isOpen} onClose={onClose} header="Collect USDC" body={<Body />}></Modal>;
};

const Body = () => {
  const form = useForm({
    mode: 'onSubmit',
    defaultValues: {
      spender: '',
    },
    resolver: zodResolver(collectSchema),
  });

  const { mutateAsync: collect } = useMutation({
    mutationFn: collectUSDC,
    mutationKey: [QUERY_KEY.collect],
    onError: (error: { code: string }) => {
      toast.error('Collect USDC failed');
    },
    onSuccess: async () => {
      toast.success('Collect USDC success');
    },
  });

  const handleSubmit = async (data: IFormProps) => {
    collect({
      spender: data.spender as `0x${string}`,
    });
  };
  return (
    <FormWrapper form={form} onSubmit={handleSubmit}>
      <VStack spacing={12}>
        <TextField
          name="spender"
          control={form.control}
          label="Spender"
          type="text"
          suffix="USDC"
          placeholder="Placeholder"
          variant="default"
          className="border bg-transparent border-gray w-full"
          size="sm"
          wrapClassName="w-full"
        />
        <StyledButton type="submit" fullWidth variant="solid" color="primary" size="sm" className="mt-2">
          Collect USDC
        </StyledButton>
      </VStack>
    </FormWrapper>
  );
};

'use client';

import { useState } from 'react';
import { collectUSDC, createWallet } from '@/api/web3';
import { QUERY_KEY } from '@/api/web3/key';
import { Icons } from '@/assets/icons';
import { ModalType, setModalType, setNewWallet, setTxHash } from '@/stores/ducks/web3/slice';
import { CardBody, CardHeader, Card as CardNextUI, CardProps, useSelect } from '@nextui-org/react';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';

import { bigNumberFormat } from '@/lib/bigNumber';
import { cn, shortenWalletAddress } from '@/lib/utils';
import useReadNewWallet from '@/hooks/useReadNewWallet';
import useReadTreasury from '@/hooks/useReadTreasury';
import { useAppDispatch, useAppSelector } from '@/hooks/useRedux';

import { StyledButton } from '../../../components/ui/styled-button';
import { VStack } from '../../../components/ui/v-stack';
import { ListItem } from './ListItem';
import ModalContainer from './ModalContainer';

interface Props extends Omit<CardProps, 'children'> {
  children?: React.ReactNode;
}

export enum ActionType {
  CREATE_WALLET = 'CREATE_WALLET',
  MINT_USDC = 'MINT_USDC',
  COLLECT_USDC = 'COLLECT_USDC',
  BURN_USDC = 'BURN_USDC',
}

export default function Content({ ...props }: Props) {
  const { newWallet } = useAppSelector((state) => state.web3);
  const dispatch = useAppDispatch();

  const { balance, address } = useReadTreasury();
  const { balance: balanceNewAddress } = useReadNewWallet(newWallet);

  const { mutateAsync: createNewWallet, isPending: isPendingCreateWallet } = useMutation({
    mutationFn: createWallet,
    mutationKey: [QUERY_KEY.createWallet],
    onError: (error: { message: string }) => {
      toast.error(error.message);
    },
    onSuccess: async (res) => {
      dispatch(setNewWallet(res.walletAddress));
      dispatch(setModalType(ModalType.SUCCESS));
    },
  });

  const { mutateAsync: collect, isPending: isPendingCollect } = useMutation({
    mutationFn: collectUSDC,
    mutationKey: [QUERY_KEY.collect],
    onError: (error: { message: string }) => {
      toast.error(error.message);
    },
    onSuccess: async (data: { txHash: `0x${string}` }) => {
      dispatch(setModalType(ModalType.SUCCESS));
      dispatch(setTxHash(data.txHash));
    },
  });

  const handleAction = (type: ModalType | '') => {
    dispatch(setModalType(type));
  };

  return (
    <>
      <CardNextUI
        className={cn('shadow-3xl border border-neutral-02 bg-white-01 rounded-xl', props?.className)}
        {...props}
      >
        <CardHeader className="border-b border-neutral-02 p-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Icons.ethereum />
            <p className="font-medium">SEPOLIA TESTNET</p>
          </div>
          <Icons.dotSvg className="sm:block hidden" />
        </CardHeader>
        <CardBody className="px-4 pt-3 pb-4">
          <ListItem copyValue={address} label="Treasury Address" value={shortenWalletAddress(address)} />
          <ListItem copyValue={`${balance}`} label="Treasury Balance" value={`${bigNumberFormat(`${balance}`)} USDC`} />
          {newWallet && (
            <>
              <ListItem copyValue={newWallet} label="New Address" value={shortenWalletAddress(newWallet)} />
              <ListItem
                copyValue={`${balanceNewAddress}`}
                label="New Address Balance"
                value={`${bigNumberFormat(`${balanceNewAddress}`)} USDC`}
              />
            </>
          )}
          <VStack spacing={12}>
            <StyledButton
              variant="solid"
              color="primary"
              size="md"
              isLoading={isPendingCreateWallet}
              onClick={() => createNewWallet()}
            >
              Create wallet
            </StyledButton>

            <StyledButton variant="solid" color="primary" size="md" onClick={() => handleAction(ModalType.BURN_USDC)}>
              Burn USDC
            </StyledButton>

            <StyledButton
              disabled={!newWallet}
              variant="solid"
              color="primary"
              size="md"
              onClick={() => handleAction(ModalType.MINT_USDC)}
            >
              Mint USDC
            </StyledButton>

            <StyledButton
              variant="solid"
              color="primary"
              size="md"
              disabled={!newWallet}
              isLoading={isPendingCollect}
              onClick={() =>
                collect({
                  spender: newWallet as `0x${string}`,
                })
              }
            >
              Collect USDC
            </StyledButton>
          </VStack>
        </CardBody>
      </CardNextUI>
      <ModalContainer />
    </>
  );
}

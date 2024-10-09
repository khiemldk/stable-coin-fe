import { ModalType, setModalType, setTxHash } from '@/stores/ducks/web3/slice';
import { FCC } from '@/types';

import { useAppDispatch, useAppSelector } from '@/hooks/useRedux';

import { BurnModal } from './BurnModal';
import { MintModal } from './MintModal';
import { SuccessModal } from './SuccessModal';

const ModalContainer: FCC = ({}) => {
  const { newWallet, modalType, txHash } = useAppSelector((state) => state.web3);
  const dispatch = useAppDispatch();

  const handleClose = (type: ModalType | '') => {
    dispatch(setModalType(type));
    dispatch(setTxHash(''));
  };

  return (
    <>
      <BurnModal isOpen={modalType === ModalType.BURN_USDC} onClose={() => handleClose('')} />
      <MintModal
        isOpen={modalType === ModalType.MINT_USDC}
        onClose={() => handleClose('')}
        address={newWallet as `0x${string}`}
      />
      <SuccessModal onClose={() => handleClose('')} isOpen={modalType === ModalType.SUCCESS} txHash={txHash} />
    </>
  );
};

export default ModalContainer;

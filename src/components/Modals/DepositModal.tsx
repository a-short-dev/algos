'use client';
import useModal from '@/hooks/useDepositModal';
import Modal from '../Modal';
import useDepositModal from '@/hooks/useDepositModal';

const DepositModal = () => {
  const depositModal = useDepositModal();

  return <Modal isOpen={depositModal.isOpen} />;
};

export default DepositModal;

'use client';
import { useSearchParams, useRouter } from 'next/navigation';
import React, { useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import zod from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import toast from 'react-hot-toast';

export default function DepositModal() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const modalRef = useRef<null | HTMLDialogElement>(null);
  const showModal = searchParams.get('showModalD');
  useEffect(() => {
    if (showModal === 'y') {
      modalRef.current?.showModal();
    } else {
      modalRef.current?.close();
    }
  }, [showModal]);

  const closeDialog = () => {
    modalRef.current?.close();
    router.back();
  };

  const clickOk = () => {
    closeDialog();
  };

  const minD = 500;
  const schema = zod.object({
    amount: zod
      .string()
      .regex(/\d/, 'only numbers are allowed')
      .refine((x) => x !== '', {
        message: 'Please enter an amount',
      })
      .refine((x) => parseFloat(x) >= minD, {
        message: `minimum deposit is ${minD}`,
      }),
  });
  type Schema = zod.infer<typeof schema>;
  const resolver = zodResolver(schema);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Schema>({ mode: 'all', resolver });

  const onSubmit = handleSubmit(async (data) => {
    const { amount } = data;
    await axios
      .post('api/transactions/deposits', { amount })
      .then((res) => {
        if (res.status === 200) {
          toast.success('Deposit successful');
        }
      })
      .catch((error) => {
        toast.error('Deposit not successful');
      });
  });
  const modal: JSX.Element | null =
    showModal === 'y' ? (
      <dialog
        ref={modalRef}
        className='fixed transition ease-linear -translate-x-50 -translate-y-50 backdrop:bg-black/20 rounded-xl z-50'>
        <div className='bg-white lg:w-[500px] max-w-full  h-auto rounded-lg p-8'>
          <div>
            <span> Wallet Type: BTC</span>
            <span>Wallet Address: 1B6Lj7Ly6HGsHc5QL1mXvuEYbbhWYpUAuH </span>
            <span></span>
          </div>
          <form
            className='w-full space-y-6'
            onSubmit={onSubmit}>
            <div className='space-y-1.5'>
              <label
                className='text-xs uppercase text-gray-600'
                htmlFor='amount'>
                Enter amount
              </label>
              <input
                type='number'
                {...register('amount')}
                className={`border appearance-none w-full focus:ring-1 rounded p-2 focus:outline-none outline-none ${
                  errors['amount']
                    ? 'border-red-300 border-2'
                    : 'focus:ring-offset-brand-yellow ring-brand-yellow'
                }`}
              />
              <>
                {errors['amount'] && (
                  <span className='text-xs text-red-400'>
                    <>{errors['amount']?.message}</>
                  </span>
                )}
              </>
            </div>
            <button className='bg-brand-yellow flex items-center justify-center p-2 rounded hover:bg-opacity-60 text-white text-base font-medium w-full'>
              Deposit
            </button>
          </form>
          <button
            onClick={closeDialog}
            className='bg-red-300 mt-5 flex items-center justify-center p-2 rounded hover:bg-opacity-60 text-white text-base font-medium w-full'>
            Cancel
          </button>
        </div>
      </dialog>
    ) : null;

  return modal;
}

/**
 * 

interface ModalProps {
  isOpen?: boolean;
}
cons
const Modal: React.FC<ModalProps> = ({ isOpen }) => {
  const [show, setShow] = React.useState(isOpen);

  React.useEffect(() => {
    setShow(isOpen);
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }
 

  return (
    <>
      <div
        id='modal'
        className={`inset-0 fixed z-50 flex items-center justify-center w-full bg-neutral-800/50 focus:outline-none overflow-hidden`}>
        <div
          className={`relative w-full md:w-4/6 lg:w-3/6 xl:w-2/5 my-6 mx-auto h-full md:h-auto`}>
          <div
            className={`
            translate 
            duration-300 
            h-full 
            ${show ? 'translate-y-0' : 'transalate-full'}>
            ${show ? 'opacity-100' : 'opacity-0'}`}>
            <div
              className={` 
              translate
              h-full
              lg:h-auto
              md:h-auto
              border-0 
              rounded-lg 
              shadow-lg 
              relative 
              flex 
              flex-col 
              w-full 
              bg-white 
              outline-none 
              focus:outline-none`}>
              Modal
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
 */

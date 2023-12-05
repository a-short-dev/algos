'use client';
import { useSearchParams, useRouter } from 'next/navigation';
import React, { useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import zod from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import { TStatus } from '@prisma/client';
import { BASE_URL } from '@/libs/contants';
import toast from 'react-hot-toast';

export default function TopModal() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const modalRef = useRef<null | HTMLDialogElement>(null);
  const showModal = searchParams.get('topup');
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

  const schema = zod
    .object({
      amount: zod.string(),
      Bamount: zod.string(),
    })
    .refine((data) => data.amount !== '' || data.Bamount !== '', {
      message: 'At least one of the fields (amount or Bamount) must be filled',
    });
  type Schema = zod.infer<typeof schema>;
  const resolver = zodResolver(schema);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<Schema>({ mode: 'all', resolver });

  const onSubmit = handleSubmit(async (data) => {
    const userId = Number(searchParams.get('user'));
    console.log(userId);
    const { amount, Bamount } = data;
    await axios
      .post(`${BASE_URL}/api/transactions/deposits`, {
        amount: Number(amount),
        bonus: Number(Bamount),
        status: TStatus.COMPLETED,
        userId,
      })
      .then((res) => {
        console.log(res.data);
        closeDialog();
        toast.success(res.data.status);
      })
      .catch((err) => {
        closeDialog();
        toast.error(err.data.status);
      });
  });
  const modal: JSX.Element | null =
    showModal === 'y' ? (
      <dialog
        ref={modalRef}
        className='fixed transition ease-linear -translate-x-50 -translate-y-50 backdrop:bg-black/20 rounded-xl z-50'>
        <div className='bg-white lg:w-[500px] max-w-full  h-auto rounded-lg p-8'>
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
                disabled={isSubmitting}
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
            <div className='space-y-1.5'>
              <label
                className='text-xs uppercase text-gray-600'
                htmlFor='Bamount'>
                Enter Bonus
              </label>
              <input
                disabled={isSubmitting}
                type='number'
                {...register('Bamount')}
                className={`border appearance-none w-full focus:ring-1 rounded p-2 focus:outline-none outline-none ${
                  errors['amount']
                    ? 'border-red-300 border-2'
                    : 'focus:ring-offset-brand-yellow ring-brand-yellow'
                }`}
              />
              <>
                {errors['amount'] && (
                  <span className='text-xs text-red-400'>
                    <>{errors['Bamount']?.message}</>
                  </span>
                )}
              </>
            </div>
            <button
              disabled={isSubmitting}
              className='
              bg-brand-yellow 
              flex 
              items-center 
              justify-center 
              p-2 rounded 
              hover:bg-opacity-60 
              text-white 
              text-base 
              font-medium 
              w-full'>
              Top up
            </button>
          </form>
          <button
            onClick={closeDialog}
            className='
            border 
            border-brand-yellow 
            mt-4 
            text-brand-yellow 
            flex 
            items-center 
            justify-center 
            p-2 
            rounded 
            hover:bg-opacity-60  
            text-base 
            font-medium 
            w-full'>
            Cancel
          </button>
        </div>
      </dialog>
    ) : null;

  return modal;
}

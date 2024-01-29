'use client';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { FormInput } from '../Form/FormInput';
import * as zod from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import { BASE_URL } from '@/libs/contants';
import { useEffect, useRef } from 'react';
import { TStatus, TType } from '@prisma/client';

const schema = zod
  .object({
    amount: zod.string(),
    Bamount: zod.string(),
  })
  .refine((data) => data.amount !== '' || data.Bamount !== '', {
    message: 'At least one of the fields (amount or Bamount) must be filled',
  });

type Schema = zod.infer<typeof schema>;

const SubtractModal = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const id = pathName.split('/')[3];
  const modalRef = useRef<null | HTMLDialogElement>(null);
  const showModal = searchParams.get('showModalS');
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

  const resolver = zodResolver(schema);
  const {
    handleSubmit,
    formState: { errors, isSubmitting },
    register,
  } = useForm<Schema>({ mode: 'onChange', resolver });

  const onSubmit = handleSubmit(async (data) => {
    const { amount, Bamount } = data;
    const res = await axios.post(`${BASE_URL}/api/admin/transactions/withdrawal`, {
      amount: Number(amount),
      bonus: Number(Bamount),
      status: TStatus.COMPLETED,
      id: Number(id),
      type: TType.SUBTRACT,
    });
  });

  const modal: JSX.Element | null =
    showModal === 'y' ? (
      <dialog
        ref={modalRef}
        className='
        fixed 
        transition 
        ease-linear
        -translate-x-50 
        -translate-y-50 
      backdrop:bg-black/20 
        rounded-xl z-50'>
        <div
          className='
        bg-white 
          lg:w-[500px] 
          max-w-full 
          h-auto 
          rounded-lg 
          p-8'>
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
              subtract
            </button>
          </form>
          <button
            onClick={closeDialog}
            className='
          bg-red-300 
            mt-5 
            flex 
            items-center 
            justify-center 
            p-2 rounded 
            hover:bg-opacity-60 
          text-white 
            text-base 
            font-medium w-full'>
            Cancel
          </button>
        </div>
      </dialog>
    ) : null;

  return modal;
};

export default SubtractModal;

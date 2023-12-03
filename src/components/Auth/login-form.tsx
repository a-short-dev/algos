'use client';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import zod from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import toast from 'react-hot-toast';
import axios, { AxiosError } from 'axios';
import { Roles } from '@prisma/client';
import { useRouter } from 'next/navigation';
import { ADMIN_LOC_KEY, USER_LOC_KEY } from '@/libs/contants';

const LoginForm = () => {
  const router = useRouter();
  const schema = zod.object({
    email: zod.string().email(),

    password: zod
      .string()
      .regex(
        /^(?=.*\d)(?=.*[^\w\d\s]).*$/,
        'must contain one digit,one special character'
      )
      .min(8, 'must have min of 8 characters'),
  });
  type Schema = zod.infer<typeof schema>;
  const resolver = zodResolver(schema);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Schema>({ mode: 'all', resolver });

  const onSubmit = handleSubmit(async (data) => {
    const { email, password } = data;

    await axios
      .post('/api/login', { email, password })
      .then((res) => {
        if (res.data) {
          toast.success('Login successful');
          const { userId, role } = res.data.data;
          if (role === Roles.USER) {
            window.localStorage.setItem(`${USER_LOC_KEY}`, userId);
            return router.push('/dashboard');
          } else {
            window.localStorage.setItem(`${ADMIN_LOC_KEY}`, userId);
            return router.push('/overview');
          }
        }
      })
      .catch((error) => {
        if (error instanceof AxiosError) {
          console.log(error);
          return toast.error(error.response?.data.error);
        }
        return toast.error(error.response?.data.error);
      });
  });
  return (
    <form
      className='space-y-4'
      onSubmit={onSubmit}>
      <div className='mb-5 text-2xl p-2 text-white '>
        Enter login details to continue.
      </div>
      <div className='flex flex-col space-y-1'>
        <label
          className='text-sm uppercase text-gray-600'
          htmlFor='email'>
          Email
        </label>
        <input
          type='email'
          {...register('email')}
          className={`border focus:ring-1 rounded p-2 focus:outline-none outline-none ${
            errors['email']
              ? 'border-red-300 border-2'
              : 'focus:ring-offset-brand-yellow ring-brand-yellow'
          }`}
        />
        <>
          {errors['email'] && (
            <span className='text-xs text-red-400'>
              <>{errors['email']?.message}</>
            </span>
          )}
        </>
      </div>

      <div className='flex flex-col space-y-1'>
        <label
          className='text-sm uppercase text-gray-600'
          htmlFor='password'>
          password
        </label>
        <input
          type='password'
          {...register('password')}
          className={`border focus:ring-1 rounded p-2 focus:outline-none outline-none ${
            errors['password']
              ? 'border-red-300 border-2'
              : 'focus:ring-offset-brand-yellow ring-brand-yellow'
          }`}
        />
        <>
          {errors['password'] && (
            <span className='text-xs text-red-400'>
              <>{errors['password']?.message}</>
            </span>
          )}
        </>
      </div>

      <button className='bg-brand-yellow flex items-center justify-center p-2 rounded hover:bg-opacity-60 text-white text-base font-medium w-full'>
        Login
      </button>

      <div className='mb-2 flex items-center justify-center gap-2 text-baseyyy'>
        Don&apos;t have an account?
        <Link
          href='onboarding'
          className='text-brand-yellow'>
          Register
        </Link>
      </div>
    </form>
  );
};

export default LoginForm;

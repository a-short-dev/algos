'use client';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import zod from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import toast from 'react-hot-toast';
import axios, { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';
import { USER_LOC_KEY } from '@/libs/contants';

const SignupForm = () => {
  const router = useRouter();
  const schema = zod
    .object({
      firstName: zod
        .string()
        .min(3, { message: 'must contain at least 3 characters' }),
      lastName: zod
        .string()
        .min(3, { message: ' must contain at least 3 characters' }),
      email: zod.string().email(),
      phoneNumber: zod.string().regex(/^[0-9]+$/, 'only number allowed'),
      password: zod
        .string()
        .regex(
          /^(?=.*\d)(?=.*[^\w\d\s]).*$/,
          'must contain one digit,one special character'
        )
        .min(8, 'must have min of 8 characters'),
      confirmPassword: zod.string(),
    })
    .refine((x) => x.password === x.confirmPassword, {
      message: 'Passwords does not match',
      path: ['confirmPassword'],
    });

  type Schema = zod.infer<typeof schema>;
  const resolver = zodResolver(schema);
  const {
    formState: { errors, isSubmitting },
    handleSubmit,
    register,
  } = useForm<Schema>({ mode: 'all', resolver });

  const onSubmit = handleSubmit(async (user) => {
    await axios
      .post('/api/onboarding', user)
      .then((res) => {
        if (res.data) {
          const data = res.data;
          toast.success('Registration successful');
          window.localStorage.setItem(`${USER_LOC_KEY}`, data.data);
          return router.push('/dashboard');
        }
      })
      .catch((error) => {
        if (error instanceof AxiosError) {
          throw error.message;
        }
      });
  });
  return (
    <form
      className='space-y-4'
      onSubmit={onSubmit}>
      <div className='mb-5 text-2xl  text-white '>
        Create your account.
      </div>

      <div className='space-y-4'>
        <div className='flex md:flex-row flex-col  md:gap-5'>
          <div className='flex flex-col space-y-1'>
            <label
              className='text-sm uppercase text-gray-600'
              htmlFor='firstName'>
              first name
            </label>
            <input
              autoComplete='on'
              id='firstName'
              type='text'
              {...register('firstName')}
              className={`border focus:ring-1 rounded p-2 focus:outline-none outline-none ${
                errors['firstName']
                  ? 'border-red-300 border-2'
                  : 'focus:ring-offset-brand-yellow ring-brand-yellow'
              }`}
            />
            {errors['firstName'] && (
              <span className='text-xs text-red-400'>
                <>{errors['firstName']?.message}</>
              </span>
            )}
          </div>

          <div className='flex flex-col space-y-1'>
            <label
              className='text-sm uppercase text-gray-600'
              htmlFor='lastName'>
              last name
            </label>
            <input
              autoComplete='on'
              id='lastName'
              type='text'
              {...register('lastName')}
              className={`border focus:ring-1 rounded p-2 focus:outline-none outline-none ${
                errors['lastName']
                  ? 'border-red-300 border-2'
                  : 'focus:ring-offset-brand-yellow ring-brand-yellow'
              }`}
            />

            {errors['lastName'] && (
              <span className='text-xs text-red-400'>
                <>{errors['lastName']?.message}</>
              </span>
            )}
          </div>
        </div>

        <div className='flex md:flex-row flex-col md:gap-5'>
          <div className='flex flex-col space-y-1'>
            <label
              className='text-sm uppercase text-gray-600'
              htmlFor='email'>
              email
            </label>
            <input
              autoComplete='on'
              type='email'
              id='email'
              {...register('email')}
              className={`border focus:ring-1 rounded p-2 focus:outline-none outline-none ${
                errors['email']
                  ? 'border-red-300 border-2'
                  : 'focus:ring-offset-brand-yellow ring-brand-yellow'
              }`}
            />

            {errors['email'] && (
              <span className='text-xs text-red-400'>
                <>{errors['email']?.message}</>
              </span>
            )}
          </div>
          <div className='flex flex-col space-y-1'>
            <label
              className='text-sm uppercase text-gray-600'
              htmlFor='phoneNumber'>
              phone
            </label>
            <input
              autoComplete='on'
              type='tel'
              id='phoneNumber'
              {...register('phoneNumber')}
              className={`border focus:ring-1 rounded p-2 focus:outline-none outline-none ${
                errors['phoneNumber']
                  ? 'border-red-300 border-2'
                  : 'focus:ring-offset-brand-yellow ring-brand-yellow'
              }`}
            />
            <>
              {errors['phoneNumber'] && (
                <span className='text-xs text-red-400'>
                  <>{errors['phoneNumber']?.message}</>
                </span>
              )}
            </>
          </div>
        </div>

        <div className='flex md:flex-row flex-col  md:gap-5'>
          <div className='flex flex-col space-y-1'>
            <label
              className='text-sm uppercase text-gray-600'
              htmlFor='password'>
              password
            </label>
            <input
              autoComplete='on'
              id='password'
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

          <div className='flex flex-col space-y-1'>
            <label
              className='text-sm uppercase text-gray-600'
              htmlFor='confirmPassword'>
              confirm password
            </label>
            <input
              autoComplete='on'
              id='confirmPassword'
              type='password'
              {...register('confirmPassword')}
              className={`border focus:ring-1 rounded p-2 focus:outline-none outline-none ${
                errors['confirmPassword']
                  ? 'border-red-300 border-2'
                  : 'focus:ring-offset-brand-yellow ring-brand-yellow'
              }`}
            />
            <>
              {errors['confirmPassword'] && (
                <span className='text-xs text-red-400'>
                  <>{errors['confirmPassword']?.message}</>
                </span>
              )}
            </>
          </div>
        </div>
      </div>
      <button
        disabled={isSubmitting}
        className='bg-brand-yellow disabled:cursor-not-allowed disabled:opacity-50 flex items-center justify-center p-2 rounded hover:bg-opacity-60 text-white text-base font-medium w-full'>
        {isSubmitting ? (
          <span className='animate-pulse text-2xl'>...</span>
        ) : (
          'Signup'
        )}
      </button>

      <div className='mb-2 flex items-center justify-center gap-2 text-lg'>
        Have an account?
        <Link
          href='login'
          className='text-brand-yellow'>
          Login
        </Link>
      </div>
    </form>
  );
};

export default SignupForm;

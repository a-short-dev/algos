import LoginForm from '@/components/Auth/login-form';

export default function LoginPage() {
  return (
    <div className='bg-auth-bg relative]  bg-center bg-opacity-25 bg-no-repeat bg-cover'>
      <div className='w-full flex items-center h-screen justify-center p-2'>
        <section className='bg-gray-300/80  backdrop-blur-sm max-w-sm w-full px-5 py-10 rounded-md'>
          <LoginForm />
        </section>
      </div>
    </div>
  );
}

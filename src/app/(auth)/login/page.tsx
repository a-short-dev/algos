import LoginForm from '@/components/Auth/login-form';

export default function LoginPage() {
  return (
    <div className='h-screen  bg-auth-bg w-full bg-center bg-opacity-25 bg-no-repeat bg-cover'>
      <div className='w-full h-full flex items-center justify-center p-2'>
        <section className='bg-gray-300 max-w-sm w-full p-5 rounded-md'>
          <LoginForm />
        </section>
      </div>
    </div>
  );
}

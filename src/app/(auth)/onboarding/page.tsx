import SignupForm from '@/components/Auth/signup-form';

export default function OnboardingPage() {
  return (
    <div className='bg-auth-bg relative  p-5 w-full bg-center bg-opacity-25 bg-no-repeat bg-cover'>
      <div className='w-full flex items-center lg:h-screen justify-center p-2'>
        <section className='bg-gray-300/80 backdrop-blur-sm w-auto px-5 py-10 rounded-md'>
          <SignupForm />
        </section>
      </div>
    </div>
  );
}

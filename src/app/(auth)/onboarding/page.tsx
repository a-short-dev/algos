import SignupForm from "@/components/Auth/signup-form";

export default function OnboardingPage() {
  return (
    <div className='h-screen  bg-auth-bg w-full bg-center bg-opacity-25 bg-no-repeat bg-cover'>
      <div className='w-full h-full flex items-center justify-center p-2'>
        <section className='bg-gray-300 max-w-sm w-full p-5 rounded-md'>
          <SignupForm />
        </section>
      </div>
    </div>
  );
}

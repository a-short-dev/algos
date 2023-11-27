'use client';


import useDepositModal from '@/hooks/useDepositModal';
import Link from 'next/link';


export default function DashboardClient() {
  const depositModal = useDepositModal();


  return (
    <section className='w-full  p-5'>
      <div className='flex flex-col md:flex-row items-center  gap-4 justify-between   w-full'>
        <div className='bg-white h-32 c p-4 rounded-md  w-full'>
          <div className=' w-full h-full p-2'>
            <div className='text-lg mb-4 text-gray-400'>Available Balance</div>
            <div className='flex items-center justify-between'>
              <div className='text-2xl font-bold'>$ 55,578</div>
              <Link
                href='?showModalW=y'
                className='bg-brand-yellow py-2 px-4 text-white/95 rounded'>
                Withdraw
              </Link>
            </div>
          </div>
        </div>

        <div className='bg-white h-32 p-4 rounded-md  w-full'>
          <div className=' w-full h-full p-2'>
            <div className='text-lg mb-4 text-gray-400'>Bonus Balance</div>
            <div className='text-2xl font-bold'>$ 50,578</div>
          </div>
        </div>

        <div className='bg-white h-32 p-4 rounded-md  w-full'>
          <div className=' w-full h-full p-2'>
            <div className='text-lg mb-4 text-gray-400'>Total Deposits</div>
            <div className='flex items-center justify-between'>
              <div className='text-2xl font-bold'>$ 25,000</div>
              <button
                onClick={depositModal.onOpen}
                className='bg-blue-400 py-2 px-4 text-white/95 rounded'>
                Deposit
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 w-full gap-4 mt-10 md:mt-20'>
        <div className='bg-white/60 rounded-md col-spa md:col-span-2 p-4'>
          <h4 className='text-lg md:text-2xl'>Recent Transactions</h4>
          <hr className='my-4 ' />
        </div>

        <div className='bg-white/80 rounded-md col-span-1 w-full'>
          <div className='p-4'>
            <h4 className='text-lg md:text-2xl'>Current plan</h4>
            <div></div>
          </div>
        </div>
      </div>
    </section>
  );
}

'use client';
import DepositModal from '@/components/Modals/deposit-modal';
import WithdrawalModal from '@/components/Modals/withdrawal-modal';
import Link from 'next/link';

interface DashProps {
  balance?: number;
  bonus?: string;
  deposit?: string;
}

 function DashboardClient({ balance, bonus, deposit }: DashProps) {
  return (
    <>
      <section className='w-full p-5'>
        <div className='flex flex-col md:flex-row items-center  gap-4 justify-between   w-full'>
          <div className='bg-white h-auto c p-4 rounded-md  w-full'>
            <div className='w-full h-full flex-col flex justify-between p-2'>
              <div className='text-base mb-4 text-gray-400'>
                Available Balance
              </div>
              <div className='flex flex-wrap items-center justify-between'>
                <div className='text-xl font-bold'>$ {balance ?? 0}</div>
                <Link
                  href={`?showModalW=y?bal`}
                  className='bg-brand-yellow py-2 px-4 text-white/95 rounded'>
                  Withdraw
                </Link>
              </div>
            </div>
          </div>

          <div className='bg-white h-auto p-4 rounded-md  w-full'>
            <div className='w-full h-full flex-col flex justify-between p-2'>
              <div className='text-base mb-4 text-gray-400'>Total Bonus</div>
              <div className='text-2xl font-bold'>$ {bonus ?? 0}</div>
            </div>
          </div>

          <div className='bg-white h-auto p-4 rounded-md  w-full'>
            <div className=' w-full h-full p-2'>
              <div className='text-base mb-4 text-gray-400'>Total Deposits</div>
              <div className='flex flex-wrap items-center gap-2 justify-between'>
                <div className='text-xl font-bold'>$ {deposit ?? 0}</div>
                <Link
                  href='?showModalD=y'
                  className='bg-blue-400 py-2 px-4 text-white/95 rounded'>
                  Deposit
                </Link>
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
      <WithdrawalModal />
      <DepositModal />
    </>
  );
}

import DepositModal from '@/components/Modals/deposit-modal';
import WithdrawalModal from '@/components/Modals/withdrawal-modal';
import { BASE_URL } from '@/libs/contants';
import axios from 'axios';
import { cookies } from 'next/headers';
import Link from 'next/link';
import toast from 'react-hot-toast';

async function getTransactitons(id: number): Promise<any> {
  const user = await axios.get(`${BASE_URL}/api/transactions?id=${id}`);
  if (user.status === 200) {
    const { balance, bonus, deposits, recentTransactions } = user.data.data;
    console.log(recentTransactions)
    return { balance, bonus, deposits, recentTransactions };
  } else {
    toast.error('something went wrong');
  }
}

export default async function Dashboard() {
  const id = Number(cookies().get('userToken')?.value || 0);
  const { balance, bonus, deposits, recentTransactions } =
    await getTransactitons(id);
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
                <div className='text-xl font-bold'>$ {deposits ?? 0}</div>
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
          <div className='bg-white/60 relative rounded-md col-spa md:col-span-2 p-4'>
            <h4 className='text-lg md:text-2xl'>Recent Transactions</h4>
            <hr className='my-4 ' />
            {recentTransactions.map((tx: any, index: number) => (
              <div
                className='flex w-full justify-between px-4'
                key={index}>
                <div>{tx.amount}</div>
                <div>{tx.status}</div>
                <div>{tx.type}</div>
              </div>
            ))}
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

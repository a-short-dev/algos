import { BASE_URL } from '@/libs/contants';
import { TStatus } from '@prisma/client';
import axios from 'axios';
import Link from 'next/link';
import toast from 'react-hot-toast';

async function getTransactitons(id: number): Promise<any> {
  const user = await axios.get(`${BASE_URL}/api/transactions?id=${id}`);
  if (user.status === 200) {
    const { balance, bonus, deposits, recentTransactions } = user.data.data;

    return { balance, bonus, deposits, recentTransactions };
  } else {
    toast.error('something went wrong');
  }
}

export default async function Page({ params }: { params: { id: string } }) {
  // const user = await fetchUserDetails(params.id);
  const fetchUserDetails = async (): Promise<any> => {
    const res = await axios.get(
      `${BASE_URL}/api/admin/userDetails?id=${params.id}`
    );

    return res.data.data;
  };
  const user = await fetchUserDetails();
  const { balance, bonus, deposits, recentTransactions } =
    await getTransactitons(Number(params.id));

  return (
    <div className='w-full p-5 space-y-3'>
      <div className='max-w-4xl mx-auto w-full p-2'>
        <div className='my-3'>
          <h4 className='text-2xl mb-4'>Bio</h4>
          <div className='flex w-full justify-between'>
            <div>
              <div className='text-sm capitalize text-gray-400'>Email</div>
              <span>{user.user.email}</span>
            </div>
            <div>
              <div className='text-sm capitalize text-gray-400'>First name</div>
              {user.user.firstName}
            </div>
            <div>
              <div className='text-sm capitalize text-gray-400'>Last name</div>
              {user.user.lastName}
            </div>
          </div>
        </div>
        <div className=''>
          <div>
            <h4 className='text-2xl'>Finances</h4>
            <Link
              href='?showModalS=y'
              className='rounded border p-2'>
              Subtract
            </Link>
          </div>
          <div>
            {/**
             * <div className='space-y-3'>
              <div className='text-xl'>Current Bal</div>
              <div className='flex items-center gap-4'>
                <span className='text-2xl'>${user.currentBal}</span>
              </div>
              <div className='flex items-center gap-3'>
                <button className='bg-blue-700 px-4 text-white py-2 rounded-md'>
                  add
                </button>
                <button className='bg-brand-yellow px-4 text-white py-2 rounded-md'>
                  subtract
                </button>
              </div>
            </div>
            <div className='space-y-3'>
              <div className='text-xl'>Total bonus</div>
              <div className='flex items-center gap-4'>
                <span className='text-2xl'>${user.totalBonus}</span>
              </div>
              <div className='flex items-center gap-3'>
                <button className='bg-blue-700 px-4 text-white py-2 rounded-md'>
                  add
                </button>
                <button className='bg-brand-yellow px-4 text-white py-2 rounded-md'>
                  subtract
                </button>
              </div>
            </div>
            <div className='space-y-3'>
              <div className='text-xl'>Total deposits</div>
              <div className='flex items-center gap-4'>
                <span className='text-2xl'>${user.totalDeposits}</span>
              </div>
              <div className='flex items-center gap-3'>
                <button className='bg-blue-700 px-4 text-white py-2 rounded-md'>
                  add
                </button>
                <button className='bg-brand-yellow px-4 text-white py-2 rounded-md'>
                  subtract
                </button>
              </div>
            </div>
             */}
          </div>
        </div>
      </div>
      <div>
        <div className='bg-white/60 relative rounded-md col-spa md:col-span-2 p-4 '>
          <h4 className='text-lg md:text-2xl'>Recent Transactions</h4>
          <hr className='my-4 ' />
          <div className='overflow-x-scroll'>
            <table className='min-w-full divide-y  overflow-x-scroll divide-gray-200'>
              <thead>
                <tr>
                  <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                    Type
                  </th>
                  <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                    Amount
                  </th>
                  <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                    Bonus
                  </th>
                  <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                    STATUS
                  </th>
                  <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                    ACTION
                  </th>
                </tr>
              </thead>
              <tbody className='bg-white divide-y text-base divide-gray-200'>
                {recentTransactions.map((transaction: any, index: number) => (
                  <tr key={index}>
                    <td className='px-6 py-4 whitespace-nowrap'>
                      {transaction.type}
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap'>
                      {transaction.amount}
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap'>
                      {transaction.bonus || '-'}
                    </td>
                    <td
                      className={`px-6 py-4 whitespace-nowrap ${
                        transaction.status === TStatus.PENDING
                          ? 'bg-orange-300 text-white'
                          : transaction.status === TStatus.FAILED
                          ? 'bg-red-300'
                          : 'bg-green-200'
                      }`}>
                      {transaction.status}
                    </td>
                    <td
                      className={`px-6 py-4 whitespace-nowrap ${
                        transaction.status === TStatus.PENDING
                          ? 'bg-orange-300 text-white'
                          : transaction.status === TStatus.FAILED
                          ? 'bg-red-300'
                          : 'bg-green-200'
                      }`}>
                      {transaction.status}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

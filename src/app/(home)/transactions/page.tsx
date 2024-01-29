import { BASE_URL } from '@/libs/contants';
import toast from 'react-hot-toast';
import { TStatus, TType } from '@prisma/client';
import axios from 'axios';
import { cookies } from 'next/headers';

async function getTransactitons(id: number): Promise<any> {
  const user = await axios.get(`${BASE_URL}/api/transactions?id=${id}`);
  if (user.status === 200) {
    const { balance, bonus, deposits, recentTransactions } = user.data.data;

    return { balance, bonus, deposits, recentTransactions };
  } else {
    toast.error('something went wrong');
  }
}

export default async function Transactions() {
  const id = Number(cookies().get('userToken')?.value || 0);
  const { balance, bonus, deposits, recentTransactions } =
    await getTransactitons(id);
  return (
    <div>
      <div className='bg-white/60 relative rounded-md col-spa md:col-span-2 p-4 '>
        <h4 className='text-lg md:text-2xl'>Transactions</h4>
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
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

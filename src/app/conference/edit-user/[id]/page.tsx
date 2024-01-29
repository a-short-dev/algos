import { BASE_URL } from '@/libs/contants';
import axios from 'axios';
import Link from 'next/link';

export default async function Page({ params }: { params: { id: string } }) {
  // const user = await fetchUserDetails(params.id);
  const fetchUserDetails = async (): Promise<any> => {
    const res = await axios.get(
      `${BASE_URL}/api/admin/userDetails?id=${params.id}`
    );

    return res.data.data;
  };
  const user = await fetchUserDetails();

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
      <div>Pending withdrawals</div>
      <div>Pending deposits</div>
    </div>
  );
}

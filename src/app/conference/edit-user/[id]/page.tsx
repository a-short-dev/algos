import { BASE_URL } from '@/libs/contants';
import axios from 'axios';

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
    <div className='w-full h-full p-5 space-y-3'>
      <div className='max-w-4xl mx-auto w-full p-2'>
        <div>{user.user.email}</div>
        <div>{user.user.firstName}</div>
        <div>{user.user.lastName}</div>
        <div className='space-y-3'>
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
      </div>
      <div>Pending withdrawals</div>
      <div>Pending deposits</div>
    </div>
  );
}

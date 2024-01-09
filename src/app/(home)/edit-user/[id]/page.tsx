import { BASE_URL } from '@/libs/contants';
import axios from 'axios';

export default async function Page({ params }: { params: { id: string } }) {
  // const user = await fetchUserDetails(params.id);
  const fetchUserDetails = async (): Promise<any> => {
    const res = await axios.get(
      `${BASE_URL}/api/admin/userDetails?id=${params.id}`
    );
    console.log(res.data.data);
    return res.data.data;
  };
  const user = await fetchUserDetails();

  return (
    <div className='w-full h-full p-5'>
      <div className='max-w-4xl mx-auto w-full p-2'>
        <div>{user.user.email}</div>
        <div>{user.user.firstName}</div>
        <div>{user.user.lastName}</div>
        <div>{user.currentBal}</div>
        <div>{user.totalBonus}</div>
        <div>{user.totalDeposits}</div>
      </div>
      <div>Pending withdrawals</div>
      <div>Pending deposits</div>
      
    </div>
  );
}

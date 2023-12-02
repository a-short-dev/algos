import Modal from '@/components/Modals/withdrawal-modal';
import DashboardClient from './DashboardClient';
import { cookies } from 'next/headers';
import axios from 'axios';
import { BASE_URL } from '@/libs/contants';

async function getBalance() {
  try {
    const userId = cookies().get('userToken');
    const user = await axios.get(
      `${BASE_URL}/api/transactions/get-balance?id=${userId?.value}`
    );
    const { currentBal } = user.data;
    console.log(currentBal);
    return { balance: currentBal };
  } catch (error: any) {
    throw Error(error.message);
  }
}

export default async function DashboardPage() {
  const { balance } = await getBalance();
  return (
    <>
      <div></div>
    </>
  );
}

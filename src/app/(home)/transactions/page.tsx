import { BASE_URL } from "@/libs/contants";
import axios from "axios";
import toast from "react-hot-toast";

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
  return <div>Hello</div>;
}

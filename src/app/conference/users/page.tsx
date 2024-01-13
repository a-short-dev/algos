import { BASE_URL } from '@/libs/contants';
import axios from 'axios';
import Link from 'next/link';
import toast from 'react-hot-toast';
import { FaEdit } from 'react-icons/fa';

const getAllUsers = async (): Promise<any> => {
  const user = await axios.get(`${BASE_URL}/api/admin/users`);
  if (user.status === 200) {
    const users = user.data.data;
    return users;
  } else {
    toast.error('something went wrong');
  }
};

export default async function UsersPage() {
  const users = await getAllUsers();
  return (
    <div className='w-full max-w-5xl mx-auto p-4 '>
      <div className='overflow-x-scroll bg-slate-400 rounded'>
        <table className='min-w-full divide-y  overflow-x-auto divide-gray-200'>
          <thead>
            <tr>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                First name
              </th>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                Last name
              </th>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                Status
              </th>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                Action
              </th>
            </tr>
          </thead>
          <tbody className='bg-white divide-y text-base divide-gray-200'>
            {users.map((user: any, index: number) => (
              <tr key={index}>
                <td className='px-6 py-4 whitespace-nowrap'>
                  {user.firstName}
                </td>
                <td className='px-6 py-4 whitespace-nowrap'>{user.lastName}</td>
                <td className='px-6 py-4 whitespace-nowrap'>
                  {user.isSuspended ? 'suspended' : 'active'}
                </td>
                <td
                  className={`px-6 py-4 whitespace-nowrap flex items-center gap-2`}>
                  <Link href={`edit-user/${user.id}`}>
                    <FaEdit size={24} />
                  </Link>

                  <Link
                    className='bg-blue-300 text-base p-2 rounded text-white'
                    href={`?topup=y&&user=${user.id}`}>
                    Top up
                  </Link>

                  <button className='p-2 bg-red-500 rounded text-white'>
                    disable
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

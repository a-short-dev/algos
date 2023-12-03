import { BASE_URL } from '@/libs/contants';
import axios from 'axios';
import Link from 'next/link';
import { use } from 'react';
import toast from 'react-hot-toast';
import { FaEdit } from 'react-icons/fa';

async function getAllUsers(): Promise<any> {
  const user = await axios.get(`${BASE_URL}/api/admin/users`);
  if (user.status === 200) {
    const users = user.data.data;
    return users;
  } else {
    toast.error('something went wrong');
  }
}

export default async function Overview() {
  const users = await getAllUsers();
  return (
    <div>
      <div className='bg-white/60 relative rounded-md col-spa md:col-span-2 p-4 '>
        <div className='flex items-center justify-between'>
          <h4 className='text-lg md:text-2xl '>All Users</h4>
          <button
            type='button'
            className='bg-blue-200 px-4 py-2 rounded text-slate-700'>
            Create user
          </button>
        </div>
        <hr className='my-4 ' />
        <div className='overflow-x-scroll'>
          <table className='min-w-full divide-y  overflow-x-scroll divide-gray-200'>
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
                  <td className='px-6 py-4 whitespace-nowrap'>
                    {user.lastName}
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap'>
                    {user.isSuspended}
                  </td>
                  <td className={`px-6 py-4 whitespace-nowrap `}>
                    <Link href={`edit-user/${user.id}`}>
                      <FaEdit size={24} />
                    </Link>
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

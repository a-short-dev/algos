import { Header } from '@/components/Home/Header';
import { Sidebar } from '@/components/Home/Sidebar';
import { BASE_URL } from '@/libs/contants';
import axios from 'axios';
import { cookies } from 'next/headers';
import React from 'react';
import toast from 'react-hot-toast';

interface UserR {
  firstName: string;
  lastName: string;
  email: string;
}

const getUserDetails = async (id: number): Promise<any> => {
  const user = await axios.get(`${BASE_URL}/api/users?id=${id}`);
  if (user.status === 200) {
    //console.log(user.data.data);
    return user.data.data;
  } else {
    toast.error('something went wrong');
  }
};
export default async function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const id = Number(cookies().get('userToken')?.value || null);
  const { firstName, lastName, email } = await getUserDetails(id);

  return (
    <section className='bg-gray-400 flex md:h-full'>
      <Sidebar />
      <div className='relative md:pl-52 xl:pl-60 bg-gray-200 w-full'>
        <Header firstName={firstName} />
        {children}
      </div>
    </section>
  );
}

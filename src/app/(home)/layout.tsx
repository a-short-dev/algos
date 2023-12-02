import { Header } from '@/components/Home/Header';
import { Sidebar } from '@/components/Home/Sidebar';
import { BASE_URL } from '@/libs/contants';
import axios from 'axios';
import React from 'react';
import { cookies } from 'next/headers';
import toast from 'react-hot-toast';

 async function getName() {
  try {
    const userId = cookies().get('userToken');
    const user = await axios.get(`${BASE_URL}/api/user?id=${userId?.value}`);
    const { firstName } = user.data.user;
    return { firstName: firstName };
  } catch (error) {
    toast.error('An error occured!');
    throw Error('ll');
  }

  //console.log(x);
}

export default async function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { firstName } = await getName();
  return (
    <>
      <div className='flex md:h-full'>
        <Sidebar />
        <section className='relative md:pl-52 xl:pl-60 bg-gray-200 w-full '>
          <Header firstName={firstName} />
          {children}
        </section>
       
      </div>
    </>
  );
}

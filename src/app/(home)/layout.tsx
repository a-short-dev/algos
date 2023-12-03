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
  const user = await getUserDetails(id);
  console.log(user);
  return <section>{children}</section>;
}

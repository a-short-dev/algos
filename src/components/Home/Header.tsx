'use client';

import { BASE_URL, USER_LOC_KEY } from '@/libs/contants';
import axios from 'axios';
import Link from 'next/link';
import { useEffect, useState } from 'react';

interface HeaderProps {
  firstName: string;
}
async function logout() {
  await axios.get(`${BASE_URL}/api/logout`);
}
export const Header = ({ firstName }: HeaderProps) => {
  return (
    <header className='sticky top-0 w-full bg-gray-600/75 z-20 p-5'>
      <div className='flex w-full items-center justify-between'>
        <span className='text-base text-white font-normal'>
          Hello, {firstName}
        </span>

        <span>
          <button
            type='button'
            onClick={logout}
            className='bg-red-300 text-white rounded py-2 px-4 text-base'>
            Log out
          </button>
        </span>
      </div>
    </header>
  );
};

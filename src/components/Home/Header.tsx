'use client';

import { USER_LOC_KEY } from '@/libs/contants';
import { useEffect, useState } from 'react';

interface HeaderProps {
  firstName: string;
}
export const Header = ({ firstName }: HeaderProps) => {
  return (
    <header className='sticky top-0 w-full bg-gray-600/75 z-20 p-5'>
      <div className='flex w-full items-center'>
        <span className='ml-auto text-base text-white font-normal'>
          Hello, {firstName}
        </span>
      </div>
    </header>
  );
};

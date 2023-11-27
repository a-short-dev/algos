'use client';

import { getCurrentUser } from '@/app/_actions/getCurrentUser';
import { USER_LOC_KEY } from '@/libs/contants';
import { useEffect, useState } from 'react';

export const Header = () => {
  const [state, setState] = useState<null | any>();
  useEffect(() => {
    const fetchData = async () => {
      const id = window.localStorage.getItem(`${USER_LOC_KEY}`);
      const user = await getCurrentUser(Number(id));
      setState(user);
      console.log(user);
    };

    fetchData();
  }, []);
  return (
    <header className='sticky top-0 w-full bg-gray-600/75 z-20 p-5'>
      <div className='flex w-full items-center'>
        <span className='ml-auto text-base text-white font-normal'>
          Hello, {state?.firstName}
        </span>
      </div>
    </header>
  );
};

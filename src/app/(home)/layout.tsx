import { Header } from '@/components/Home/Header';
import { Sidebar } from '@/components/Home/Sidebar';
import WithdrawalModal from '@/components/Modals/withdrawal-modal';
import React from 'react';

export default async function AppLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {

  return (
    <>
      <div className='flex md:h-full'>
        <Sidebar />
        <section className='relative md:pl-60 bg-gray-200 w-full '>
          <Header  />
          {children}
        </section>
        <WithdrawalModal />
      </div>
    </>
  );
}

import { Header } from '@/components/Home/Header';
import { Sidebar } from '@/components/Home/Sidebar';
import Modal from '@/components/Modal';
import DepositModal from '@/components/Modals/DepositModal';
import React, { Suspense } from 'react';

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='relative flex md:h-full'>
      <Sidebar />
      <section className='relative md:pl-60 bg-gray-200 w-full '>
        <Header />
        {children}
      </section>
      <DepositModal />
    </div>
  );
}

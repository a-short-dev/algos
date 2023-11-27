'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { IconType } from 'react-icons';

interface NavLinkProps {
  slug: string;
  label: string;
  icon?: React.ReactElement;
}
const NavLink: React.FC<NavLinkProps> = ({ slug, label, icon: Icon }) => {
  const pathName = usePathname();
  const isActive = slug === pathName.substring(1);

  return (
    <Link href={slug}>
      <div
        className={` transition text-base  ${
          isActive
            ? 'bg-blue-400 text-white rounded-md text-lg  p-4'
            : 'hover:bg-blue-100 p-2 rounded text-gray-800'
        }`}>
        <div className='flex items-center gap-2'>
          {Icon && React.cloneElement(Icon, { size: 24 })}
          <span>{label}</span>
        </div>
      </div>
    </Link>
  );
};

export default NavLink;

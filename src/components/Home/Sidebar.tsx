import { FaDashcube, FaHome, FaList } from 'react-icons/fa';
import NavLink from '../Navlink';
import { IconType } from 'react-icons';
import { cookies } from 'next/headers';

export const Sidebar = () => {
  const id = Number(cookies().get('adminToken')?.value || 0);

  const navItem = [
    {
      label: `${id > 0 ? 'overview' : 'dashboard'}`,
      slug: `${id > 0 ? 'overview' : 'dashboard'}`,
      icon: <FaHome />,
    },
    {
      label: `${id > 0 ? 'users' : 'transactions'}`,
      slug: `${id > 0 ? 'users' : 'transactions'}`,
      icon: <FaList />,
    },
    {
      label: `${id > 0 ? 'wallets' : ''}`,
      slug: `${id > 0 ? 'wallets' : ''}`,
      icon: undefined
    },
  ];

  return (
    <aside className='hidden md:block md:fixed border-r-gray-500 bg-white md:w-52 xl:w-60 md:z-30 h-full'>
      <nav className='p-6 mt-16 flex flex-col gap-y-2'>
        {navItem.map((item, index) => (
          <NavLink
            key={index}
            label={item.label}
            icon={item.icon}
            slug={item.slug}
          />
        ))}
      </nav>
    </aside>
  );
};

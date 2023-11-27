import { FaDashcube } from 'react-icons/fa';
import NavLink from '../Navlink';
import { IconType } from 'react-icons';

const navItem = [
  {
    label: 'Dashboard',
    slug: 'dashboard',
    icon: <FaDashcube />,
  },
  {
    label: 'Transactions',
    slug: 'transaction',
  },
  {
    label: 'Settings',
    slug: 'settings',
  },
];
export const Sidebar = () => {
  return (
    <aside className='hidden md:block md:fixed bg-gray-400/75 md:w-60 md:z-30 h-full'>
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

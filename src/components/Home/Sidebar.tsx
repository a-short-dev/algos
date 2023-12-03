import { FaDashcube, FaHome } from 'react-icons/fa';
import NavLink from '../Navlink';
import { IconType } from 'react-icons';

const navItem = [
  {
    label: 'Dashboard',
    slug: 'dashboard',
    icon: <FaHome />,
  },
  {
    label: 'Transactions',
    slug: '',
  },
  {
    label: 'Settings',
    slug: '',
  },
];
export const Sidebar = () => {
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

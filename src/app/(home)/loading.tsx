import { FaBtc } from 'react-icons/fa';

export default function Loading() {
  return (
    <div className='w-full h-screen flex items-center backdrop-brightness-90 justify-center'>
      <h2 className='text-2xl animate-pulse'>
        <FaBtc size={64} />
      </h2>
    </div>
  );
}

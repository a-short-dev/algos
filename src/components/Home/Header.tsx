interface HeaderProps {
  fullname?: string;
}
export const Header = ({ fullname = 'Mary' }: HeaderProps) => {
  return (
    <header className='sticky top-0 w-full bg-gray-600/75 z-20 p-5'>
      <div className='flex w-full items-center'>
        <span className='ml-auto text-base text-white font-normal'>
          Hello, {fullname}
        </span>
      </div>
    </header>
  );
};

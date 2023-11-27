'use client';
import React from 'react';
interface ModalProps {
  isOpen?: boolean;
}

const Modal: React.FC<ModalProps> = ({ isOpen }) => {
  const [show, setShow] = React.useState(isOpen);

  React.useEffect(() => {
    setShow(isOpen);
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  return (
    <>
      <div
        id='modal'
        className={`inset-0 fixed z-50 flex items-center justify-center w-full bg-neutral-800/50 focus:outline-none overflow-hidden`}>
        <div
          className={`relative w-full md:w-4/6 lg:w-3/6 xl:w-2/5 my-6 mx-auto h-full md:h-auto`}>
          <div
            className={`
            translate 
            duration-300 
            h-full 
            ${show ? 'translate-y-0' : 'transalate-full'}>
            ${show ? 'opacity-100' : 'opacity-0'}`}>
            <div
              className={` 
              translate
              h-full
              lg:h-auto
              md:h-auto
              border-0 
              rounded-lg 
              shadow-lg 
              relative 
              flex 
              flex-col 
              w-full 
              bg-white 
              outline-none 
              focus:outline-none`}>
              Modal
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;

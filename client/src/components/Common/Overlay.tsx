import React from 'react';

type OverlayProps = {
  children: React.ReactNode;
};

const Overlay = ({ children }: OverlayProps) => {
  return (
    <div className='absolute flex flex-col inset-0 z-10 justify-center items-center bg-slate-900 bg-opacity-90'>
      {children}
    </div>
  );
};

export default Overlay;

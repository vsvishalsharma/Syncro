import React from 'react';
import DemoCredentials from '@/components/forms/demo-credentials';

type Props = { children: React.ReactNode };

const Layout = ({ children }: Props) => {
  return (
    <div className="flex items-center justify-center h-screen w-full">
      <div className='flex'>
        {children}
        <DemoCredentials />
      </div>
    </div>
  );
};

export default Layout;

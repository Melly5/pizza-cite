import { Header } from '@components/Header/Header';
import React from 'react';

interface Props {
  children: React.ReactNode;
}

export const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div style={{ width: '100vw' }}>
      <Header />
      <main>{children}</main>
    </div>
  );
};

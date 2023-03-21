import React from 'react';

import Footer from './Footer';
import Header from './Header';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className={'app__wrapper'}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

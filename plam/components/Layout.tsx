import { Montserrat } from 'next/font/google';
import React from 'react';

import Footer from './Footer';
import Header from './Header';

const font = Montserrat({ subsets: ['latin'], weight: ['500'] });

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className={`${font.className} app__wrapper`}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

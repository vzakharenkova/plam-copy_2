import { Montserrat } from 'next/font/google';
import React from 'react';

import Footer from './Footer';
import Header from './Header';

const montserrat = Montserrat({ subsets: ['latin'], weight: ['600', '500', '400', '300', '200'] });

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className={`${montserrat.className} app__wrapper`}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

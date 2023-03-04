import { Inter } from 'next/font/google';

import Footer from './Footer';
import Header from './Header';

const inter = Inter({ subsets: ['latin'], weight: ['500'] });

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className={inter.className}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

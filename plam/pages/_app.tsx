import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Layout from '../components/Layout';

import '@/styles/globals.scss';

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({ debounceDelay: 50, once: false, mirror: true });
    AOS.refresh();
  }, []);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

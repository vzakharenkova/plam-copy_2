import '@/styles/globals.scss';
import type { AppProps } from 'next/app';
import Layout from '../components/Layout';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

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

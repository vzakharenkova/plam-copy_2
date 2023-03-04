import Head from 'next/head';
import Startscreen from '../components/homepage/Startscreen';

export default function Home() {
  return (
    <>
      <Head>
        <title>Plam | Дизайн интерьеров</title>
        <meta name="description" content="Дизайн интерьеров" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Startscreen />
    </>
  );
}

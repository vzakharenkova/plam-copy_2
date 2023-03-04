import Head from 'next/head';
import { useRouter } from 'next/router';

export default function Projects() {
  const { query } = useRouter();
  return (
    <>
      <Head>
        <title>Plam | Проект {query.id} </title>
      </Head>
      <div>Данные по проекту {query.id}</div>
    </>
  );
}

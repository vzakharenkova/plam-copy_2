import Head from 'next/head';
import { builder } from '@builder.io/react';

import AboutBlock from '../components/homepage/AboutBlock';
import ContactsBlock from '../components/homepage/ContactsBlock';
import ProjectsBlock from '../components/homepage/ProjectsBlock';
import Startscreen from '../components/homepage/Startscreen';

builder.init('1a3cc1f7cda7484f830f5a3ac8cb5cb0');

export async function getStaticProps() {
  const homepageData = await builder.getAll('homepage');

  // console.log(homepageData[0]);

  return {
    props: {
      data: homepageData[0].data,
    },
    revalidate: 5,
  };
}

interface HomeProps {
  data: {
    ticker: string;
    tickerColor: string;
    firstSectionTitle: string;
    firstSectionImg: string;
    firstSectionText: string;
    projectImg1: string;
    projectImg2: string;
  };
}

export default function Home({ data }: HomeProps) {
  return (
    <>
      <Head>
        <title>Plam | Дизайн интерьеров</title>
        <meta name="description" content="Дизайн интерьеров" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Startscreen tickerText={data.ticker} tickerColor={data.tickerColor} />
      <AboutBlock
        title={data.firstSectionTitle}
        img={data.firstSectionImg}
        text={data.firstSectionText}
      />
      <ProjectsBlock img1={data.projectImg1} img2={data.projectImg2} />
      <ContactsBlock />
    </>
  );
}

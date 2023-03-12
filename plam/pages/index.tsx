import Head from 'next/head';
import axios from 'axios';

import ContactsBlock from '../components/homepage/ContactsBlock';
import AboutBlock from '../components/homepage/AboutBlock';
import ProjectsBlock from '../components/homepage/ProjectsBlock';
import Startscreen from '../components/homepage/Startscreen';
// import { ApiImgData } from '../interfaces/apiInterface';

function Home({ data }) {
  return (
    <>
      <Head>
        <title>Plam | Дизайн интерьеров</title>
        <meta name="description" content="Дизайн интерьеров" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Startscreen />
      <AboutBlock data={data.aboutBlock} />
      <ProjectsBlock />
      <ContactsBlock />
    </>
  );
}

// interface Data {
//   data: {
//     attributes: { heading: string; text: string; img: ApiImgData };
//   };
// }

export const getStaticProps = async (context) =>
  axios
    .get('http://127.0.0.1:1337/api/home-about?populate=*', {
      headers: {
        Authorization:
          'Bearer 9d176b0454859b6ee271fed1889e28d9e61fe8c86f99a2997d71848faa7abfa8ab72871d4afc28eae3180af0aea92147b26a1bfafd42aa4e5363bcfd7caecccf0b425e4603954a51bab0ce64e554c9ed49f80ec037702481c9e5e1a34799573ca2b27920d712c90ea8c1168bf7a1de5e2fa0712705f46fd81ed207944f85b722',
      },
    })
    .then((res) => ({
      props: {
        data: {
          aboutBlock: res.data,
        },
      },
    }))
    .catch((error) => error);

export default Home;

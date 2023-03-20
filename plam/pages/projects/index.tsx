import Head from 'next/head';
import HeadingBlock from '../../components/projectspage/HeadingBlock';
import ProjectsListBlock from '../../components/projectspage/ProjectsListBlock';

export default function Projects() {
  return (
    <>
      <Head>
        <title>Plam | Проекты</title>
      </Head>
      <HeadingBlock />
      <ProjectsListBlock />
    </>
  );
}

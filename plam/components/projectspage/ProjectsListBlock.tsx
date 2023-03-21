import Link from 'next/link';

import styles from '@/styles/pages/ProjectsPage.module.scss';

function ProjectsListBlock() {
  return (
    <section className={styles.projects}>
      <Link href="/projects/project_1">Страница проекта</Link>
    </section>
  );
}

export default ProjectsListBlock;

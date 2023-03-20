import Link from 'next/link';

import styles from '@/styles/ProjectsPage.module.scss';

function ProjectsListBlock() {
  return (
    <section className={styles.projectslist_block}>
      <Link href="/projects/project_1">Страница проекта</Link>
    </section>
  );
}

export default ProjectsListBlock;

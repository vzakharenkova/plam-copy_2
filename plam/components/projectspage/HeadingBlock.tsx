import Image from 'next/image';

import styles from '@/styles/ProjectsPage.module.scss';

import scheme from '@/public/projectspage/project-scheme.svg';

function HeadingBlock() {
  return (
    <section className={styles.headingblock}>
      <div className={['container', styles.content_wrapper].join(' ')}>
        <div className={styles.text_wrapper}>
          <h1 className={styles.content_heading}>{'проекты'.toUpperCase()}</h1>
          <p className={styles.content_paragraph}>
            Наша работа над проектами строится на диалоге и комфортном сотрудничестве. Мы искренне любим своё дело, всегда находим лучшие решения и уделяем большое внимание деталям
            и срокам. Именно так мы делаем клиентов счастливыми и довольными результатом.
          </p>
        </div>
        <Image src={scheme} alt="scheme img"></Image>
      </div>
    </section>
  );
}

export default HeadingBlock;

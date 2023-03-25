import Image from 'next/image';

import styles from '@/styles/pages/ProjectsPage.module.scss';
import scheme from '@/public/projectspage/project-scheme.gif';

function HeadingBlock() {
  return (
    <section className={styles.startscreen}>
      <div className={`container ${styles.content_wrapper}`}>
        <div className={styles.text_wrapper}>
          <h1 className={styles.content_heading}>{'проекты'.toUpperCase()}</h1>
          <p className={styles.content_paragraph}>
            Наша работа над проектами строится на диалоге и комфортном сотрудничестве. Мы
            искренне любим своё дело, всегда находим лучшие решения и уделяем большое
            внимание деталям и срокам. Именно так мы делаем клиентов счастливыми и
            довольными результатом.
          </p>
        </div>
        <Image
          src={scheme}
          height={479}
          className={styles.content_img}
          alt="scheme img"
        ></Image>
      </div>
    </section>
  );
}

export default HeadingBlock;

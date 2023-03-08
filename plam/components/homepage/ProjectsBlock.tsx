import Link from 'next/link';
import Image from 'next/image';

import styles from '@/styles/Home.module.scss';

import img1 from '@/public/photo_2.png';
import img2 from '@/public/photo_3.png';

export default function ProjectsBlock() {
  return (
    <section className={styles.projects}>
      <div className={`container ${styles.projects__container}`}>
        <h2 className={styles.projects__title}>{'проекты'.toUpperCase()}</h2>
        <div className={styles.projects__content}>
          <Link href="/projects" className={styles.btn}>
            СМОТРЕТЬ ВСЕ
          </Link>
          <Image src={img1} alt={'фрагмент дизайн-проекта (корридор)'} className={`${styles.img} ${styles.img_1}`} />
          <Image src={img2} alt={'фрагмент дизайн-проекта (кухня)'} className={`${styles.img} ${styles.img_2}`} />
        </div>
      </div>
    </section>
  );
}

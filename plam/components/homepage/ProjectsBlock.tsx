import Link from 'next/link';
import Image from 'next/image';

import styles from '@/styles/pages/HomePage.module.scss';

interface ProjectBlockProps {
  img1: string;
  img2: string;
}

export default function ProjectsBlock({ img1, img2 }: ProjectBlockProps) {
  return (
    <section className={styles.projects} data-aos="fade" data-aos-duration="1000">
      <div className={`container ${styles.projects__container}`}>
        <h2 className={styles.projects__title} data-aos="slide-up">
          {'проекты'.toUpperCase()}
        </h2>
        <div className={styles.projects__content}>
          <Link href="/projects" className={styles.btn}>
            СМОТРЕТЬ ВСЕ
          </Link>
          <Image
            width={0}
            height={0}
            sizes="100%"
            src={img1}
            alt={'фрагмент дизайн-проекта (корридор)'}
            className={`${styles.img} ${styles.img_1}`}
            data-aos="fade-right"
            data-aos-easing="ease-in-sine"
          />
          <Image
            width={0}
            height={0}
            sizes="100%"
            src={img2}
            alt={'фрагмент дизайн-проекта (кухня)'}
            className={`${styles.img} ${styles.img_2}`}
            data-aos="fade-left"
            data-aos-easing="ease-in-sine"
          />
        </div>
      </div>
    </section>
  );
}

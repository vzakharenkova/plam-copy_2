import Image from 'next/image';
import Link from 'next/link';

import styles from '@/styles/pages/HomePage.module.scss';

interface AboutProps {
  title: string;
  img: string;
  text: string;
}

export default function AboutBlock({ title, img, text }: AboutProps) {
  return (
    <section className={styles.about}>
      <div
        className={`container ${styles.about__container}`}
        data-aos="fade"
        data-aos-duration="1000"
      >
        <h2
          className={styles.about__title}
          data-aos="fade-up"
          data-aos-anchor-placement="bottom-bottom"
        >
          {title.toUpperCase()}
        </h2>
      </div>
      <div className={`container ${styles.about__wrapper}`}>
        <div className={styles.about__content}>
          <Image
            src={img}
            width={500}
            height={600}
            alt="image"
            className={styles.about__img}
            data-aos="fade-right"
            data-aos-easing="ease-in-sine"
          />
          <div className={styles.about__info} data-aos="fade-up">
            <div
              className={styles.about__text_block}
              dangerouslySetInnerHTML={{ __html: text }}
            ></div>
            <div className={styles.about__btn_wrapper} data-aos="zoom-in-left">
              <Link href="/about" className={'button'}>
                {'узнать больше'.toUpperCase()}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

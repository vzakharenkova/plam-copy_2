import Image from 'next/image';
import Link from 'next/link';

import styles from '@/styles/pages/HomePage.module.scss';

import img from '@/public/homepage/about.png';

export default function AboutBlock() {
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
          {'о нас'.toUpperCase()}
        </h2>
      </div>
      <div className={`container ${styles.about__wrapper}`}>
        <div className={styles.about__content}>
          <Image
            src={img}
            alt="image"
            className={styles.about__img}
            data-aos="fade-right"
            data-aos-easing="ease-in-sine"
          />
          <div className={styles.about__info} data-aos="fade-up">
            <div className={styles.about__text_block}>
              <p className={`${styles.text_bold} ${styles.text}`}>
                Мы команда, увлеченных свои делом, архитекторов и дизайнеров.
              </p>
              <p className={styles.text}>
                В основе наших проектов - функциональная планировка, законченная
                композиция и разумный бюджет для воплощения проекта.
              </p>
              <p className={styles.text}>
                Наша цель: создавать индивидуальные и комфортные интерьеры.
              </p>
              <p className={styles.text}>
                Мы не используем штампы и не преобразуем готовые решения. Каждый проект
                для нас - чистый лист. Поэтому среди работ Вы не найдете двух одинаковых
                интерьеров. Наша работа над проектами строится на диалоге и комфортном
                сотрудничестве. Мы искренне любим своё дело, всегда находим лучшие решения
                и уделяем большое внимание деталям и срокам. Именно так мы делаем клиентов
                счастливыми и довольными результатом.
              </p>
            </div>
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

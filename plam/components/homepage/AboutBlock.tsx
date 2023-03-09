import Image from 'next/image';
import Link from 'next/link';

import styles from '@/styles/Home.module.scss';

import img from '@/public/photo_1.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';

export default function AboutBlock() {
  return (
    <section className={styles.about}>
      <div className={styles.about__header}>
        <div className={styles.ticker}>
          <div className={`${styles.ticker__wrapper} ${styles.ticker__wrapper_reverse}`}>
            <p className={styles.ticker__text}>{'дизайн интерьеров'.toUpperCase()}</p>
            <p className={styles.ticker__text}>{'дизайн интерьеров'.toUpperCase()}</p>
          </div>
        </div>
        <div className={`container ${styles.about__container}`}>
          <h2 className={styles.about__title}>{'о нас'.toUpperCase()}</h2>
        </div>
      </div>
      <div className={`container ${styles.about__wrapper}`}>
        <div className={styles.about__content}>
          <Image src={img} alt="image" className={styles.about__img} />
          <div className={styles.about__info}>
            <div className={styles.about__text_block}>
              <p className={[styles.text_bold, styles.text].join(' ')}>Мы команда, увлеченных свои делом, архитекторов и дизайнеров.</p>
              <p className={styles.text}>В основе наших проектов - функциональная планировка, законченная композиция и разумный бюджет для воплощения проекта.</p>
              <p className={styles.text}>Наша цель: создавать индивидуальные и комфортные интерьеры.</p>
              <p className={styles.text}>
                Мы не используем штампы и не преобразуем готовые решения. Каждый проект для нас - чистый лист. Поэтому среди работ Вы не найдете двух одинаковых интерьеров. Наша
                работа над проектами строится на диалоге и комфортном сотрудничестве. Мы искренне любим своё дело, всегда находим лучшие решения и уделяем большое внимание деталям
                и срокам. Именно так мы делаем клиентов счастливыми и довольными результатом.
              </p>
            </div>
            <Link href="/about" className={styles.about__actions}>
              <div className={styles.actions__text}>{'узнать больше'.toUpperCase()}</div>
              {/* <Image src={arrow} alt="arrow" height={29} /> */}
              <FontAwesomeIcon icon={faCircleArrowRight} height={29} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

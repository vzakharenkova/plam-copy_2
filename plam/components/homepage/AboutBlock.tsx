import Image from 'next/image';
import Link from 'next/link';

import styles from '@/styles/Home.module.scss';

import img from '@/public/photo_1.png';
import arrow from '@/public/arrow.svg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';

export default function AboutBlock() {
  return (
    <section className={styles.about}>
      <div className={styles.about__header}>
        <h2 className={styles.about__title}>О НАС</h2>
      </div>
      <div className={styles.about__content}>
        <Image src={img} alt="image" className={styles.about__img} />
        <div className={styles.about__info}>
          <div className={styles.about__text}>
            <div className={styles.text_bold}>Мы команда, увлеченных свои делом, архитекторов и дизайнеров.</div>
            <div>В основе наших проектов - функциональная планировка, законченная композиция и разумный бюджет для воплощения проекта.</div>
            <div>Наша цель: создавать индивидуальные и комфортные интерьеры.</div>
            <div>
              Мы не используем штампы и не преобразуем готовые решения. Каждый проект для нас - чистый лист. Поэтому среди работ Вы не найдете двух одинаковых интерьеров. Наша
              работа над проектами строится на диалоге и комфортном сотрудничестве. Мы искренне любим своё дело, всегда находим лучшие решения и уделяем большое внимание деталям и
              срокам. Именно так мы делаем клиентов счастливыми и довольными результатом.
            </div>
          </div>
          <Link href="/about" className={styles.about__actions}>
            <div className={styles.actions__text}>УЗНАТЬ БОЛЬШЕ</div>
            {/* <Image src={arrow} alt="arrow" height={29} /> */}
            <FontAwesomeIcon icon={faCircleArrowRight} height={29} />
          </Link>
        </div>
      </div>
    </section>
  );
}

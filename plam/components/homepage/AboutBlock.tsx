import Image from 'next/image';
import Link from 'next/link';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';

import ReactMarkdown from 'react-markdown';
import styles from '@/styles/Home.module.scss';

// import img from '@/public/homepage/about.png';

export interface AboutBlockData {
  heading: string;
  content: string;
  img: string;
}

function AboutBlock({ data }: { data: AboutBlockData }) {
  const imgLoader = () => data.img;

  return (
    <section className={styles.about}>
      <div className={`container ${styles.about__container}`} data-aos="fade" data-aos-duration="1000">
        <h2 className={styles.about__title} data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
          {(data.heading || 'о нас').toUpperCase()}
        </h2>
      </div>
      <div className={`container ${styles.about__wrapper}`}>
        <div className={styles.about__content}>
          <Image
            loader={imgLoader}
            src={data.img}
            width={6}
            height={7}
            unoptimized={true}
            alt="image"
            className={styles.about__img}
            data-aos="fade-right"
            data-aos-easing="ease-in-sine"
          />
          {/* <Image src={img} alt="image" className={styles.about__img} data-aos="fade-right" data-aos-easing="ease-in-sine" /> */}
          <div className={styles.about__info} data-aos="fade-up">
            <div className={styles.about__text_block}>
              {/* <ReactMarkdown className={styles.text}>{data.content}</ReactMarkdown> */}
              {/* <ReactMarkdown className={[styles.text_bold, styles.text].join(' ')}>{data}</ReactMarkdown> */}
              <p className={[styles.text_bold, styles.text].join(' ')}>Мы команда, увлеченных свои делом, архитекторов и дизайнеров.</p>
              <p className={styles.text}>В основе наших проектов - функциональная планировка, законченная композиция и разумный бюджет для воплощения проекта.</p>
              <p className={styles.text}>Наша цель: создавать индивидуальные и комфортные интерьеры.</p>
              <p className={styles.text}>
                Мы не используем штампы и не преобразуем готовые решения. Каждый проект для нас - чистый лист. Поэтому среди работ Вы не найдете двух одинаковых интерьеров. Наша
                работа над проектами строится на диалоге и комфортном сотрудничестве. Мы искренне любим своё дело, всегда находим лучшие решения и уделяем большое внимание деталям
                и срокам. Именно так мы делаем клиентов счастливыми и довольными результатом.
              </p>
              {/* <ReactMarkdown className={styles.text}>{data ? data.data.attributes.text : ''}</ReactMarkdown> */}
            </div>
            <Link href="/about" className={styles.about__actions} data-aos="zoom-in-left">
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

export default AboutBlock;

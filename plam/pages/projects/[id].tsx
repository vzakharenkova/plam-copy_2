import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ImgComparisonSlider } from '@img-comparison-slider/react';

import styles from '@/styles/pages/SingleProjectPage.module.scss';
import Image from 'next/image';

export default function Projects() {
  const { query } = useRouter();
  return (
    <>
      <Head>
        <title>Plam | Проект {query.id} </title>
      </Head>
      <section className={styles.single_project_page}>
        <div className={`container ${styles.content_wrapper}`}>
          <h1 className={styles.page__heading}>Маленькая квартира для сдачи в аренду</h1>
          <div className={styles.carousel}>
            <div className={styles.carousel__content}></div>
          </div>
          <div className={styles.project_information}>
            <div className={styles.project_params_wrapper}>
              <div className={styles.project_params}>
                <p className={styles.project_param}>
                  Расположение:
                  <span className={styles.project_param__highlighted}>
                    <Link href=""> Беларусь, Минск, ЖК “ Минск-Мир”</Link>
                  </span>
                </p>
                <p className={styles.project_param}>
                  Площадь:{' '}
                  <span className={styles.project_param__highlighted}>
                    41 м<sup>2</sup>
                  </span>
                </p>
                <p className={styles.project_param}>
                  Год: <span className={styles.project_param__highlighted}> 2022</span>
                </p>
              </div>
              <div className={styles.project_description}>
                <h2 className={styles.page__subheading}>
                  {'описание проекта'.toUpperCase()}
                </h2>
                <div>
                  <p className={styles.project_description__text}>
                    Квартира располагается на 24 этаже. Из окон открываются потрясающие
                    виды: урбанистический пейзаж, вечно спешащие машины. Но ты всегда выше
                    этой суеты, почти в облаках. Это стало отправной точкой в создании
                    концепции проекта.
                  </p>
                  <p className={styles.project_description__text}>
                    Главная идея – создать ощущение жизни в небоскрёбе, усилить иллюзию
                    «полёта», растворить интерьер, стереть границу между внутренним и
                    внешним пространством. Материалы и предметы в интерьере поддерживают
                    главный художественный приём-игру света. Они отражают, пропускают и
                    преломляют его. В тоже время, не перетягивают на себя внимание и не
                    отвлекают от самого главного- захватывающего городского пейзажа.
                  </p>
                </div>
              </div>
              <button className={`button ${styles.btn}`}>
                {'заказать дизайн-проект'.toUpperCase()}
              </button>
            </div>
            <div className={styles.project_plan_wrapper}>
              <h2 className={styles.page__subheading}>{'план'.toUpperCase()}</h2>
              <ImgComparisonSlider className={styles.project_plan}>
                <Image
                  slot="first"
                  src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Bmw_e12_v_sst.jpg"
                  className={styles.project_img}
                  alt={'test image'}
                  width={600}
                  height={400}
                />
                <Image
                  slot="second"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/BMW5er_6.jpg/2880px-BMW5er_6.jpg"
                  className={styles.project_img}
                  alt={'test image'}
                  width={600}
                  height={400}
                />
              </ImgComparisonSlider>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

import { FormEvent } from 'react';

import styles from '@/styles/pages/HomePage.module.scss';

export default function ContactsBlock() {
  const submitForm = (event: FormEvent) => {
    event.preventDefault();
  };

  return (
    <section className={styles.contacts} data-aos="fade" data-aos-duration="1000">
      <div className={`container ${styles.contacts__container}`} data-aos="fade">
        <div className={styles.contacts__heading}>
          <h2 className={styles.contacts__title}>{'напишите нам'.toUpperCase()}</h2>
          <div className={styles.contacts__text}>
            И мы ответим на любые интересующие вас вопросы
          </div>
        </div>
        <div
          className={styles.contacts__form_wrapper}
          data-aos="zoom-in"
          data-aos-delay="100"
        >
          <form className={styles.contacts__form} onSubmit={(e) => submitForm(e)}>
            <div
              className={styles.form__field_wrapper}
              data-aos="fade-right"
              data-aos-delay="500"
            >
              <label className={styles.form__field_label} htmlFor="input_name">
                Имя:
              </label>
              <input type="text" className={styles.form__input} id="input_name" />
            </div>
            <div
              className={styles.form__field_wrapper}
              data-aos="fade-right"
              data-aos-delay="800"
            >
              <label className={styles.form__field_label} htmlFor="input_tel">
                Номер телефона:
              </label>
              <input type="tel" className={styles.form__input} id="input_tel" />
            </div>
            <div
              className={styles.form__field_wrapper}
              data-aos="fade-right"
              data-aos-delay="1100"
            >
              <label className={styles.form__field_label} htmlFor="input_msg">
                Сообщение:
              </label>
              <textarea className={styles.form__textarea} id="input_msg" />
            </div>
            <input
              type="submit"
              className={styles.form__submit_btn}
              value="Отправить"
              data-aos="zoom-in"
              data-aos-delay="1400"
            />
          </form>
        </div>
      </div>
    </section>
  );
}

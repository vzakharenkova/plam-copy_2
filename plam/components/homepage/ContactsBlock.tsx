import styles from '@/styles/Home.module.scss';
import { FormEvent } from 'react';

export default function ContactsBlock() {
  const submitForm = (event: FormEvent) => {
    event.preventDefault();
  };

  return (
    <section className={styles.contacts}>
      <div className={`container ${styles.contacts__container}`}>
        <div className={styles.contacts__heading}>
          <h2 className={styles.contacts__title}>{'напишите нам'.toUpperCase()}</h2>
          <div className={styles.contacts__text}>И мы ответим на любые интересующие вас вопросы</div>
        </div>
        <div className={styles.contacts__form_wrapper}>
          <form className={styles.contacts__form} onSubmit={(e) => submitForm(e)}>
            <div className={styles.form__field_wrapper}>
              <label className={styles.form__field_label} htmlFor="input_name">
                Имя:
              </label>
              <input type="text" className={styles.form__input} id="input_name" />
            </div>
            <div className={styles.form__field_wrapper}>
              <label className={styles.form__field_label} htmlFor="input_tel">
                Номер телефона:
              </label>
              <input type="tel" className={styles.form__input} id="input_tel" />
            </div>
            <div className={styles.form__field_wrapper}>
              <label className={styles.form__field_label} htmlFor="input_msg">
                Сообщение:
              </label>
              <textarea className={styles.form__textarea} id="input_msg" />
            </div>
            <input type="submit" className={styles.form__submit_btn} value="Отправить" />
          </form>
        </div>
      </div>
    </section>
  );
}

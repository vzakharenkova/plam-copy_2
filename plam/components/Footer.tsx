import Link from 'next/link';
import Image from 'next/image';

import styles from '@/styles/components/Footer.module.scss';

import logo from '@/public/logos/logo_footer.svg';

import instagram from '@/public/icons/instagram_white.svg';
import telegram from '@/public/icons/telegram_white.svg';
import viber from '@/public/icons/viber_white.svg';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Link href="/" className={styles.footer__logo_field__wrapper}>
        <div className={styles.footer__logo_field}>
          <Image src={logo} alt="logo" />
          <h2>{'дизайн интерьеров'.toUpperCase()}</h2>
        </div>
      </Link>
      <div className={styles.footer__contacts_field}>
        <div className={styles.footer__contacts}>
          <a href="mailto: info@plam.by">info@plam.by</a>
          <Link href="tel: +375 29 955-06-09">+375 29 955-06-09</Link>
        </div>
        <div className={styles.footer__social_networks}>
          <Link href={''}>
            <Image src={viber} alt="viber" height={28} width={28} />
          </Link>
          <Link href={''}>
            <Image src={telegram} alt="telegram" height={28} width={28} />
          </Link>
          <Link href={''}>
            <Image src={instagram} alt="instagram" height={28} width={28} />
          </Link>
        </div>
      </div>
    </footer>
  );
}

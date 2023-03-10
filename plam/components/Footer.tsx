import Link from 'next/link';
import Image from 'next/image';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faViber, faTelegramPlane, faInstagram } from '@fortawesome/free-brands-svg-icons';

import styles from '@/styles/Footer.module.scss';

import logo from '@/public/logos/logo_footer.svg';

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
          <Link href="email: info@plam.by">info@plam.by</Link>
          <Link href="tel: +375 29 955-06-09">+375 29 955-06-09</Link>
        </div>
        <div className={styles.footer__social_networks}>
          <Link href={''}>
            <FontAwesomeIcon icon={faViber} height={28} />
          </Link>
          <Link href={''}>
            <FontAwesomeIcon icon={faTelegramPlane} height={28} />
          </Link>
          <Link href={''}>
            <FontAwesomeIcon icon={faInstagram} height={28} />
          </Link>
        </div>
      </div>
    </footer>
  );
}

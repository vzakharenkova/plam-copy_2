import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

import logo from '@/public/logos/logo.svg';
import viber from '@/public/icons/viber.svg';
import inst from '@/public/icons/instagram.svg';
import tg from '@/public/icons/telegram.svg';

import styles from '@/styles/Header.module.scss';

const NAVIGATION = [
  { id: 1, title: 'Главная', path: '/' },
  { id: 2, title: 'Проекты', path: '/projects' },
  { id: 3, title: 'Услуги', path: '/services' },
  { id: 4, title: 'О нас', path: '/about' },
  { id: 5, title: 'Контакты', path: '/contacts' },
];

export default function Header() {
  const { pathname } = useRouter();

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        {NAVIGATION.map(({ id, title, path }) => (
          <Link href={path} key={id} className={[pathname === path ? styles.active : '', styles.link].join(' ')} data-aos="zoom-in" data-aos-delay={`${100 * id}`}>
            {title.toUpperCase()}
          </Link>
        ))}
      </nav>
      <Link href="/" className={styles.logo__wrapper} data-aos="flip-up">
        <Image src={logo} alt="logo" className={styles.logo} />
      </Link>
      <div className={styles.contacts}>
        <Link href="tel: +375 29 955-06-09" className={styles.contacts__phone} data-aos="zoom-in" data-aos-delay="500">
          +375 29 955-06-09
        </Link>
        <div className={styles.contacts__social_networks}>
          <Link href={''}>
            <Image src={viber} alt="viber" height={28} data-aos="zoom-in" data-aos-delay="300" />
          </Link>
          <Link href={''}>
            <Image src={tg} alt="telegram" height={28} data-aos="zoom-in" data-aos-delay="200" />
          </Link>
          <Link href={''} data-aos="zoom-in" data-aos-delay="100">
            <Image src={inst} alt="instagram" height={28} />
          </Link>
        </div>
      </div>
    </header>
  );
}

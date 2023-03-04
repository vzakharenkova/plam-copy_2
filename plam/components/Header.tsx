import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

import logo from '@/public/logo.svg';
import viber from '@/public/viber.svg';
import inst from '@/public/instagram.svg';
import tg from '@/public/telegram.svg';

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
          <Link href={path} key={id} className={[pathname === path ? styles.active : '', styles.link].join(' ')}>
            {title.toUpperCase()}
          </Link>
        ))}
      </nav>
      <Link href="/" className={styles.logo__wrapper}>
        <Image src={logo} alt="logo" className={styles.logo} />
      </Link>
      <div className={styles.contacts}>
        <Link href="tel: +375 29 955-06-09" className={styles.contacts__telephone}>
          +375 29 955-06-09
        </Link>
        <div className={styles.contacts__social_networks}>
          <Link href={''}>
            <Image src={viber} alt="viber" height={28} />
          </Link>
          <Link href={''}>
            <Image src={tg} alt="telegram" height={28} />
          </Link>
          <Link href={''}>
            <Image src={inst} alt="instagram" height={28} />
          </Link>
        </div>
      </div>
    </header>
  );
}

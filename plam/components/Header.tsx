import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

import logo from '@/public/logos/logo.svg';
import viber from '@/public/icons/viber.svg';
import inst from '@/public/icons/instagram.svg';
import tg from '@/public/icons/telegram.svg';

import styles from '@/styles/components/Header.module.scss';

import useScrollDirection from '../utils/useScrollDirection';

const NAVIGATION = [
  { id: 1, title: 'Главная', path: '/' },
  { id: 2, title: 'Проекты', path: '/projects' },
  {
    id: 3,
    title: 'Услуги',
    path: '/services',
    subItems: [
      { id: 3.1, title: 'дизайн-проект', path: '/services/design-project' },
      { id: 3.2, title: 'авторское сопровождение', path: '/services/author-support' },
    ],
  },
  { id: 4, title: 'О нас', path: '/about' },
];

export default function Header() {
  const { pathname } = useRouter();
  const scrollDirection = useScrollDirection();

  return (
    <header
      className={`${styles.header} ${
        scrollDirection === 'down' ? styles.scroll_down : styles.scroll_up
      }`}
    >
      <nav>
        <ul className={styles.nav}>
          {NAVIGATION.map(({ id, title, path, subItems }) => (
            <li
              className={`${styles.link_wrapper} ${subItems ? styles.has__sub_nav : ''}`}
              key={id}
            >
              <Link
                href={path}
                className={`${pathname === path ? styles.active : ''} ${styles.link}`}
              >
                {title.toUpperCase()}
              </Link>
              {subItems && (
                <div className={styles.sub_nav}>
                  {subItems.map((props) => (
                    <Link
                      key={props.id}
                      href={props.path}
                      className={`${pathname === props.path ? styles.active : ''} $ ${
                        styles.sub_link
                      }`}
                    >
                      {props.title.toUpperCase()}
                    </Link>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>
      </nav>
      <Link href="/" className={styles.logo__wrapper}>
        <Image src={logo} alt="logo" className={styles.logo} />
      </Link>
      <div className={styles.contacts}>
        <Link href="tel: +375 29 955-06-09" className={styles.contacts__phone}>
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

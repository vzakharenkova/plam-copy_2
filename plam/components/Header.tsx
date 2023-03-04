import styles from '@/styles/Header.module.scss';
import Link from 'next/link';
import { useRouter } from 'next/router';

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
          <Link href={path} key={id} className={pathname === path ? styles.active : ''}>
            {title}
          </Link>
        ))}
      </nav>
      <div>Plam</div>
    </header>
  );
}

import Link from 'next/link';
import styles from './styles.module.scss';

import { ActiveLink } from '../ActiveLink';

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src='/images/logo.svg' alt='ig.news' />
        <nav>
          <ActiveLink activeClassName={styles.active} href={'/'}>
            <a>HOME</a>
          </ActiveLink>
          <ActiveLink activeClassName={styles.active} href={'/about'}>
            <a>SOBRE NOS</a>
          </ActiveLink>
          <ActiveLink activeClassName={styles.active} href={'/services'}>
            <a>SERVIÇOS</a>
          </ActiveLink>
          <ActiveLink activeClassName={styles.active} href={''}>
            <a>PROJETOS</a>
          </ActiveLink>
        </nav>

        {/* <ContactButton /> */}
      </div>
    </header>
  );
}

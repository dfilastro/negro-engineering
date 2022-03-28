import styles from './styles.module.scss';

import { ActiveLink } from '../ActiveLink';

export function Header({ activation }) {
  return (
    <header className={`${styles.headerContainer} ${activation && styles.active}`}>
      <div className={`${styles.headerContent} ${activation && styles.active}`}>
        <img src='/images/logo.svg' alt='ig.news' />
        <nav>
          <ActiveLink activeClassName={styles.active} href={'/'}>
            <a>HOME</a>
          </ActiveLink>
          <ActiveLink activeClassName={styles.active} href={'/services'}>
            <a>SERVIÇOS</a>
          </ActiveLink>
          <ActiveLink activeClassName={styles.active} href={'/projects'}>
            <a>PROJETOS</a>
          </ActiveLink>
          <ActiveLink activeClassName={styles.active} href={'/contact'}>
            <a>CONTATO</a>
          </ActiveLink>
        </nav>

        {/* <ContactButton /> */}
      </div>
    </header>
  );
}

import Link from 'next/link';
import styles from './styles.module.scss';

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src='/images/logo.svg' alt='ig.news' />
        <nav>
          <Link href={'/'}>
            <a className={styles.active}>HOME</a>
          </Link>
          <Link href={'/about'}>
            <a>SOBRE NOS</a>
          </Link>
          <Link href={''}>
            <a>SERVIÇOS</a>
          </Link>
          <Link href={''}>
            <a>PROJETOS</a>
          </Link>
        </nav>

        {/* <ContactButton /> */}
      </div>
    </header>
  );
}

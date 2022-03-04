import styles from './styles.module.scss';

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src='/images/logo.svg' alt='ig.news' />
        <nav>
          <a className={styles.active}>HOME</a>
          <a>SOBRE NOS</a>
          <a>SERVIÇOS</a>
          <a>PROJETOS</a>
        </nav>

        {/* <ContactButton /> */}
      </div>
    </header>
  );
}

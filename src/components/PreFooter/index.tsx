import Link from 'next/link';
import styles from './styles.module.scss';

export function PreFooter() {
  return (
    <div className={styles.container}>
      <p className={styles.text}>Se você pode imaginar, então podemos construir. Conte-nos mais sobre seu projeto.</p>
      <Link href={'/contact'}>
        <button type='button' className={styles.button}>
          Entre em contato
        </button>
      </Link>
    </div>
  );
}

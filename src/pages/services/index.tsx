import Head from 'next/head';
import styles from './styles.module.scss';

export default function Services() {
  return (
    <>
      <Head>
        <title>Negro | Serviços</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.hero}>
          <h1>NOSSOS SERVIÇOS</h1>
          <p>CONHEÇA UM POUCO MAIS A NOSSA HISTÓRIA</p>
        </div>
      </main>
    </>
  );
}

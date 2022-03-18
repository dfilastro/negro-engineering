import Head from 'next/head';
import styles from './styles.module.scss';

export default function About() {
  return (
    <>
      <Head>Negro | Sobre</Head>

      <main className={styles.container}>
        <div className={styles.hero}>
          <h1>SOBRE NÓS</h1>
          <p>TRABALHAMOS PRO SEU SONHO SE TORNAR REALIDADE</p>
        </div>
      </main>

      <section className={styles.postsContainer}>
        <div></div>
        
        
        TESTE LOCAL DOS POSTS</section>
    </>
  );
}

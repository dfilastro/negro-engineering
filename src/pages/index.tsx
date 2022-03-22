import Head from 'next/head';
import { Footer } from '../components/Footer';

import styles from './home.module.scss';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Negro Engenharia</title>
      </Head>

      <main className={styles.contentContainer}>
        <div className={styles.hero}>
          <h1>NEGRO ENGENHARIA</h1>
          <p>
            CONHEÇA NOSSOS<span> 14 ANOS</span> DE HISTÓRIA
          </p>
          <button>VEJA NOSSOS PROJETOS RECENTES</button>
        </div>
      </main>

      <section className={styles.postsContainer}>EM CONSTRUÇÃO</section>
    </>
  );
}

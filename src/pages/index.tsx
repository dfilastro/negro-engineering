import Head from 'next/head';
import Link from 'next/link';
import { Footer } from '../components/Footer';
import TimeLine from '../components/TimeLine';
import { Values } from '../components/Values';

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
          <Link href={'/projects'}>
            <button>VEJA NOSSOS PROJETOS RECENTES</button>
          </Link>
        </div>
      </main>

      <section className={styles.aboutContainer}>
        <div className={styles.timeLine}>
          <h1>Pontos Mais Importantes da Nossa História</h1>
          <TimeLine />
        </div>
        <div className={styles.valuesContainer}>
          <Values />
        </div>
      </section>
    </>
  );
}

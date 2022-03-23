import Head from 'next/head';
import CustomizedTimeline from '../../components/TimeLine';
import styles from './styles.module.scss';

import { IoIosRocket, IoIosEye } from 'react-icons/io';
import { GrDiamond } from 'react-icons/gr';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Negro | Sobre Nós</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.hero}>
          <h1>PÁGINA EM CONSTRUÇÃO</h1>
        </div>
      </main>
    </>
  );
}

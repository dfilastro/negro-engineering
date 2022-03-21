import Head from 'next/head';
import CustomizedTimeline from '../../components/TimeLine';
import styles from './styles.module.scss';

import { IoIosRocket, IoIosEye } from 'react-icons/io';
import { GrDiamond } from 'react-icons/gr';

export default function About() {
  return (
    <>
      <Head>
        <title>Negro | Sobre Nós</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.hero}>
          <h1>SOBRE NÓS</h1>
          <p>CONHEÇA UM POUCO MAIS A NOSSA HISTÓRIA</p>
        </div>
      </main>

      <section className={styles.aboutContainer}>
        <CustomizedTimeline />
        <div className={styles.valuesContainer}>
          <h1>Nossos Valores</h1>
          <div className={styles.contentContainer}>
            <div className={styles.valuesCard}>
              <IoIosRocket size='4rem' color='var(--red-100)' className={styles.valuesImg} />
              <div>
                <h3>Missão</h3>
                <p>Realizar sonhos e valorizar pessoas</p>
              </div>
            </div>

            <div className={styles.valuesCard}>
              <IoIosEye size='4rem' color='var(--yellow-500)' className={styles.valuesImg} />
              <div>
                <h3>Visão</h3>
                <p>Entregar 10 projetos no setor privado até o final de 2023.</p>
              </div>
            </div>

            <div className={styles.valuesCard}>
              <p>
                <GrDiamond size='4rem' color='var(--red-100)' className={styles.valuesImg} />
              </p>
              <div>
                <h3>Valores</h3>
                <p>Audácia, Persistência, Honestidade, Lealdade, Empatia, Liderança</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

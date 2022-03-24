import Head from 'next/head';
import CustomizedTimeline from '../../components/TimeLine';
import styles from './styles.module.scss';

import { IoIosRocket, IoIosEye } from 'react-icons/io';
import { GrDiamond } from 'react-icons/gr';
import { ContactForm } from '../../components/ContactForm';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Negro | Contato</title>
      </Head>
      <div className={styles.headerBackground}></div>

      <main className={styles.mapLocation}>
        <p>MAPA COM LOCALIZAÇÃO</p>
      </main>

      <section className={styles.container}>
        <div className={styles.contentContainer}>
          <div className={styles.adress}>
            <h4>Contatos</h4>
            <p>
              <span>Endereço:</span> Rua Professor Paulo Galli, 137 - Centro - Cocal do Sul/SC
            </p>
            <p>
              <span>Telefone:</span> (48) 999.340-240
            </p>
            <p>
              <span>Atendimento:</span> Segunda a Sexta: 9h as 17h
            </p>
          </div>
          <div className={styles.form}>
            <h4>Fale Conosco</h4>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}

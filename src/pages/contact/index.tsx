import Head from 'next/head';
import styles from './styles.module.scss';

import { ContactForm } from '../../components/ContactForm';
import LocationMap from '../../components/LocationMap';
import GoogleMaps from '../../components/LocationMap';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Negro | Contato</title>
      </Head>
      <div className={styles.headerBackground}></div>

      <GoogleMaps latitude={-28.59891} longitude={-49.32805} />

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

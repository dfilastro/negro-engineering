import Head from 'next/head';
import styles from './styles.module.scss';

import { ContactForm } from '../../components/ContactForm';
import GoogleMaps from '../../components/LocationMap';
import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

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
            <div className={styles.socialMediaSection}>
              <a href='https://www.instagram.com/negromateriaiseletricos/' target='_blank' rel='noreferrer'>
                <FaInstagram size='2rem' />
              </a>
              <a href='https://www.facebook.com/negromateriaiseletricos' target='_blank' rel='noreferrer'>
                <FaFacebook size='2rem' />
              </a>
              <a href='https://wa.me/5548999340240' target='_blank' rel='noreferrer'>
                <FaWhatsapp size='2rem' />
              </a>
            </div>
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

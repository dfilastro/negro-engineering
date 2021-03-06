import { FaLinkedin, FaFacebook, FaInstagram, FaWhatsapp, FaInstagramSquare } from 'react-icons/fa';
import styles from './styles.module.scss';

export function Footer() {
  return (
    <section className={styles.footerContainer}>
      <div className={styles.footerContent}>
        <img className={styles.logoImg} src='/images/logo.svg' alt='' />
        <div className={styles.socialMediaSection}>
          <a href='https://www.instagram.com/negromateriaiseletricos/' target='_blank' rel='noreferrer'>
            <FaInstagram size='2rem' color='var(--white)' />
          </a>
          <a href='https://www.facebook.com/negromateriaiseletricos' target='_blank' rel='noreferrer'>
            <FaFacebook size='2rem' color='var(--white)' />
          </a>
          <a href='https://wa.me/5548999340240' target='_blank' rel='noreferrer'>
            <FaWhatsapp size='2rem' color='var(--white)' />
          </a>
          <a href='https://www.linkedin.com/' target='_blank' rel='noreferrer'>
            <FaLinkedin size='2rem' color='var(--white)' />
          </a>
        </div>
        <div className={styles.contactSection}>
          <h2>Contatos</h2>
          <p>Telefone: (48) 999.340-240</p>
          <p>
            E-mail: <a href='mailto:diego@negromee.com'>diego@negromee.com</a>
          </p>
          <p>Rua Professor Paulo Galli, 137 - Centro - Cocal do Sul/SC</p>
          <p>Segunda a Sexta: 9h as 17h</p>
        </div>
      </div>
    </section>
  );
}

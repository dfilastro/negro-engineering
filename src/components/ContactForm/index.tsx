import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

import styles from './styles.module.scss';

export function ContactForm() {
  const [state, handleSubmit] = useForm('xzboapyy');
  if (state.succeeded) {
    return <p className={styles.sentMessage}>Mensagem Enviada!</p>;
  }
  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <label className={styles.formTitle} htmlFor='name'>
        Nome
      </label>
      <input className={styles.formInput} id='name' type='name' name='name' />
      <ValidationError prefix='Email' field='email' errors={state.errors} />

      <label className={styles.formTitle} htmlFor='email'>
        E-mail
      </label>
      <input className={styles.formInput} id='email' type='email' name='email' />
      <ValidationError prefix='Email' field='email' errors={state.errors} />

      <label className={styles.formTitle} htmlFor='message'>
        Mensagem
      </label>
      <textarea className={styles.textInput} id='message' name='message' />
      <ValidationError prefix='Message' field='message' errors={state.errors} />
      <button type='submit' disabled={state.submitting}>
        Enviar
      </button>
    </form>
  );
}

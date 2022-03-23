import { GrDiamond } from 'react-icons/gr';
import { IoIosEye, IoIosRocket } from 'react-icons/io';
import styles from './styles.module.scss';

export function Values() {
  return (
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
            <p>Entregar o 800m2 de área construída no setor privado até o final de 2023.</p>
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
  );
}

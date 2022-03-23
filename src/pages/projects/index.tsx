import Head from 'next/head';
import Image from 'next/image';
import { PreFooter } from '../../components/PreFooter';

import raulImg from '../../../public/images/raul-pompeia.jpeg';
import memorialImg from '../../../public/images/memorial-padres.jpeg';
import portoImg from '../../../public/images/caixa-portoalegre.jpeg';
import videiraImg from '../../../public/images/caixa-videira.jpeg';
import xanxereImg from '../../../public/images/caixa-xanxere.jpg';
import playgroundImg from '../../../public/images/playground.jpeg';

import styles from './styles.module.scss';

export default function Projects() {
  return (
    <>
      <Head>
        <title>Negro | Projetos</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.hero}>
          <h1>PROJETOS</h1>
        </div>
      </main>

      <section className={styles.projectsContainer}>
        <div className={styles.singleProject}>
          <div className={styles.projectImg}>
            <img src='/images/raul-pompeia.jpeg' alt='' />
          </div>
          <h3>Rua Raul Pompéia - Cocal do Sul/SC</h3>
          <p>
            Execução de praça em frente ao centro comunitário do bairro Jardim Itália, foram executadas e revestidas
            todas as calçadas, instalação de lixeiras, bancos e paisagismo. Data de entrega 1/2022.
          </p>
        </div>

        <div className={styles.singleProject}>
          <div className={styles.projectImg}>
            <Image className={styles.imagem} src={memorialImg} alt='' />
          </div>
          <h3>Memorial dos Padres - Cocal do Sul/SC</h3>
          <p>
            Construção do memorial dos padres na cidade de Cocal do Sul. Área total construída é de XX m2. Data de
            entrega 12/2021.
          </p>
        </div>

        <div className={styles.singleProject}>
          <div className={styles.projectImg}>
            <Image className={styles.imagem} src={portoImg} alt='' />
          </div>
          <h3>Agência Caixa - Porto Alegre/RS</h3>
          <p>
            Realocação de subestação de energia de 500kVA. Foi construída nova subestação interna e realocado
            posteriormente. Data de entrega 12/2021.
          </p>
        </div>

        <div className={styles.singleProject}>
          <div className={styles.projectImg}>
            <Image className={styles.imagem} src={videiraImg} alt='' />
          </div>
          <h3>Agência Caixa - Videira/SC</h3>
          <p>
            Adaptação de sala comercial, com área total de 600m2, para nova agência da Caixa. Foram executados todas as
            adequações elétricas e civis necessárias. Data de entrega 9/2021.
          </p>
        </div>

        <div className={styles.singleProject}>
          <div className={styles.projectImg}>
            <Image className={styles.imagem} src={xanxereImg} alt='' />
          </div>
          <h3>Agência Caixa - Xanxerê/SC</h3>
          <p>
            Execução de agência nova da Caixa, foram executados todas as adequações elétricas, civis e CFTV/Alarme
            necessárias. Data de entrega 7/2021.
          </p>
        </div>

        <div className={styles.singleProject}>
          <div className={styles.projectImg}>
            <Image className={styles.imagem} src={playgroundImg} alt='' />
          </div>
          <h3>Playground AMA - Criciúma/SC</h3>
          <p>Execução de playground infantil. Data de entrega 5/2021.</p>
        </div>
      </section>

      <PreFooter />
    </>
  );
}

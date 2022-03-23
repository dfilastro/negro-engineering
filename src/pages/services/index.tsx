import Head from 'next/head';
import styles from './styles.module.scss';

import Image from 'next/image';
import imageConsulting2 from '../../../public/images/consultoria2.jpg';
import imageElectricalProjects from '../../../public/images/projetos-eletricos3.jpg';
import imageConstruction from '../../../public/images/contrato-global2.jpg';
import { PreFooter } from '../../components/PreFooter';

export default function Services() {
  return (
    <>
      <Head>
        <title>Negro | Serviços</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.hero}>
          <h1>SERVIÇOS</h1>
          <p>
            Nossa equipe é composta por engenheiros e construtores altamente qualificados que trabalham em sinergia
            buscando sempre atender as expectativas do cliente.
          </p>
        </div>
      </main>

      <section className={styles.servicesContainer}>
        <div className={styles.cardContainer1}>
          <div className={styles.projectContainer}>
            <h4 className={styles.titleDecorated}>Projetos Elétricos</h4>
            <p className={styles.servicesTitle}>
              Precisando adequar sua edificação? Nossos profissionais oferecem vasta experiência, principalmente, em{' '}
              <span>Padrão de Entrada de Energia</span> e{' '}
              <span>Sistemas de Proteção Contra Descargas Atmosféricas (SPDA)</span>
            </p>
            <p className={styles.servicesDescription}>
              Ao longo dos anos, desenvolvemos grande expertise no correto dimensionamento de circuitos alimentadores,
              já desenvolvemos projetos para mais de 1.200MW instalados; entendemos que, independentemente do tramanho
              do projeto, é vital um circuito bem dimensionado, considerando tanto o cenário atual quanto um futuro,
              pois trás confiabilidade e, acima de tudo, segurança ao cliente.
            </p>
          </div>
          <Image className={styles.servicesImages} src={imageElectricalProjects} alt='Project Image' />
        </div>

        <div className={styles.cardContainer2}>
          <Image className={styles.servicesImages} src={imageConstruction} alt='Instalation image' />
          <div className={styles.projectContainer}>
            <h4 className={styles.titleDecorated}>Empreitada Global</h4>
            <p className={styles.servicesTitle}>
              Pra você que busca praticidade na hora de <span>reformar</span> ou <span>construir</span>, essa é a melhor
              opção, com o contrato global você sabe o quanto vai gastar antes mesmo de começar a construção
            </p>
            <p className={styles.servicesDescription}>
              Sabemos o quão estressante e complexa pode ser uma construção, pensando nisso sintetizamos o processo em
              quatro etapas: Desenvolvimento do projeto, Assinatura do Contrato, Construção e Entrega das Chaves. Na
              assinatura do contrato você já sabe o quanto vai desembolsar bem como recebe o cronograma de execução,
              evitando surpresas indesejáveis. Além disso, elaboramos simulações de financiamentos junto aos órgãos
              competentes. Se interessou? Entre em contato e saiba mais.
            </p>
          </div>
        </div>

        <div className={styles.cardContainer1}>
          <div className={styles.projectContainer}>
            <h4 className={styles.titleDecorated}>Consultoria</h4>
            <p className={styles.servicesTitle}>
              Somos obstinados por resolução de problemas, se você tiver algum relacionado as áreas de engenharia
              elétrica e/ou civil, conte conosco
            </p>
            <p className={styles.servicesDescription}>
              Situações como multa na fatura por excesso de energia reativa ou uma viga descentralizada podem tirar o
              sono de qualquer pessoal, na Negro você encontra profissionais capacitados na resolução desses e muitos
              outros problemas, além disso elaboramos laudos de regularização de instalações elétricas e preventivas
              contra incêndio.
            </p>
          </div>
          <Image className={styles.servicesImages} src={imageConsulting2} alt='Building Image' />
        </div>
      </section>

      <PreFooter />
    </>
  );
}

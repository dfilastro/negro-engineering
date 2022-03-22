import Head from 'next/head';
import styles from './styles.module.scss';

export default function Services() {
  return (
    <>
      <Head>
        <title>Negro | Serviços</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.hero}>
          <h1>NOSSOS SERVIÇOS</h1>
          <p>CONHEÇA UM POUCO MAIS A NOSSA HISTÓRIA</p>
        </div>
      </main>

      <section className={styles.servicesContainer}>
        <div className={styles.cardContainer1}>
          <div className={styles.projectContainer}>
            <h4 className={styles.titleDecorated}>Contrato Global</h4>
            <p className={styles.servicesTitle}>
              WE HAVE A LONG LIST OF PROFESSIONAL CONTRACTORS, WHOM OUR ENGINEERS AND ARCHITECTS ENJOY TO WORK WITH ON A
              MAJORITY OF OUR PROJECTS!
            </p>
            <p className={styles.servicesDescription}>
              Throughout our years in business, we've accumulated a strong expertise both in managing and completing any
              type of a construction, as well as in choosing the right vendors and sub-contractors... We understand how
              vital it is to coordinate the project in a timely, cost-efficient way. As of now we've alreeady dealt with
              numerous mid and large scale constructions, so we've mastered the art of minimizing the extra expenses,
              completing each project's stage on schedule and implementing a live project intact with both original
              engineering solutions and the client's initial vision...
            </p>
          </div>
          <img src='/images/service-1-652x491.jpg' alt='' />
        </div>

        <div className={styles.cardContainer2}>
          <img src='/images/service-1-652x491.jpg' alt='' />
          <div className={styles.projectContainer}>
            <h4 className={styles.titleDecorated}>Contrato Global</h4>
            <p className={styles.servicesTitle}>
              WE HAVE A LONG LIST OF PROFESSIONAL CONTRACTORS, WHOM OUR ENGINEERS AND ARCHITECTS ENJOY TO WORK WITH ON A
              MAJORITY OF OUR PROJECTS!
            </p>
            <p className={styles.servicesDescription}>
              Throughout our years in business, we've accumulated a strong expertise both in managing and completing any
              type of a construction, as well as in choosing the right vendors and sub-contractors... We understand how
              vital it is to coordinate the project in a timely, cost-efficient way. As of now we've alreeady dealt with
              numerous mid and large scale constructions, so we've mastered the art of minimizing the extra expenses,
              completing each project's stage on schedule and implementing a live project intact with both original
              engineering solutions and the client's initial vision...
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

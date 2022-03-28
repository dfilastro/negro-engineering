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
import { GetStaticProps } from 'next';
import { createClient } from '../../services/prismic';
import Link from 'next/link';

type Project = {
  slug: string;
  title: string;
  excerpt: string;
  updated_at: string;
  image: any;
};

interface ProjectsProps {
  projects: Project[];
}

export default function Projects({ projects }: ProjectsProps) {
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
        <div className={styles.projectsList}>
          {projects?.map((project: Project) => (
            <Link href={`/projects/${project.slug}`}>
              <a key={project.slug}>
                <img src={project.image} alt='' />
                <div>
                  {/* <time>{project.updated_at}</time> */}
                  <strong>{project.title}</strong>
                  <p>{project.excerpt}</p>
                </div>
              </a>
            </Link>
          ))}
        </div>
      </section>
      <div className={styles.preFooter}>
        <PreFooter />
      </div>
    </>
  );
}

export async function getServerSideProps({ previewData }) {
  const client = createClient({ previewData });

  const response = await client.getAllByType('project-id', {
    pageSize: 100,
  });

  const projects = response?.map((post: any) => {
    return {
      slug: post.uid,
      title: post.data.title[0].text,
      excerpt: post.data.content.find((content: any) => content.type === 'paragraph')?.text,
      updated_at: new Date(post.last_publication_date).toLocaleDateString('pt-PT', {
        year: 'numeric',
        month: 'long',
        day: '2-digit',
      }),
      image: post.data.img.url,
    };
  });

  // console.log(projects);

  return {
    props: { projects },
  };
}

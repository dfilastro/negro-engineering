import { GetServerSideProps, NextApiRequest, PreviewData } from 'next';
import Head from 'next/head';
import { createClient } from '../../services/prismic';
import { RichText } from 'prismic-dom';

import styles from './project.module.scss';
import { PrismicRichText } from '@prismicio/react';
import GoogleMaps from '../../components/LocationMap';

type Post = {
  slug: string;
  title: string;
  content: string;
  updated_at: string;
  image: any;
  image1: any;
  image2: any;
  image3: any;
  image4: any;
  image5: any;
  location: any;
};

export interface PostProps {
  post: Post;
}

interface ServerSideProps extends GetServerSideProps {
  previewData: PreviewData;
  req: NextApiRequest;
  params: {
    slug: string;
  };
}

export default function Post({ post }: PostProps) {
  return (
    <>
      <Head>
        <title>{post.title} | ig.news</title>
      </Head>
      <div className={styles.headerBackground}></div>

      <main className={styles.container}>
        <article className={styles.post}>
          <h1>{post.title}</h1>
          {/* <time>{post.updated_at}</time> */}
          <div
            className={styles.postContent}
            dangerouslySetInnerHTML={{
              __html: post.content,
            }}
          />
          <img src={post.image} alt='foto de capa do projeto' />
          <img src={post.image1} alt='foto do projeto' />
          <img src={post.image2} alt='foto do projeto' />
          <img src={post.image3} alt='foto do projeto' />
          <img src={post.image4} alt='foto do projeto' />

          <div className={styles.googleMap}>
            <GoogleMaps latitude={post.location.latitude} longitude={post.location.longitude} />
          </div>
        </article>
      </main>
    </>
  );
}

export const getServerSideProps = async ({ previewData, params, req }: ServerSideProps) => {
  const { slug } = params;
  const client = createClient({ previewData });

  const response = await client.getByUID('project-id', slug);

  const post = {
    slug: response.uid,
    title: response.data.title[0].text,
    content: RichText.asHtml(response.data.content),
    updated_at: new Date(response.last_publication_date).toLocaleDateString('pt-PT', {
      year: 'numeric',
      month: 'long',
      day: '2-digit',
    }),
    image: response.data.img.url,
    location: response.data.location,
    image1: response.data.img1.url || '',
    image2: response.data.img2.url || '',
    image3: response.data.img3.url || '',
    image4: response.data.img4.url || '',
  };

  return {
    props: { post },
  };
};

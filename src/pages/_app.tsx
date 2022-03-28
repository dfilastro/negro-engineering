import { AppProps } from 'next/app';
import { useEffect, useState } from 'react';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';

import '../styles/globals.scss';

function MyApp({ Component, pageProps }: AppProps) {
  const [active, setActive] = useState(false);

  useEffect(() => {
    function scrollPosition() {
      window.scrollY > 0.5 ? setActive(true) : setActive(false);
      // window.scrollY > 10 && setActive(true);
    }

    window.addEventListener('scroll', scrollPosition);
  }, []);

  return (
    <>
      <Header activation={active} />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;

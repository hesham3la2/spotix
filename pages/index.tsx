import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { en } from '../locales/en';
import { ar } from '../locales/ar';

const Home: NextPage = () => {
  const { locale } = useRouter();
  const t = locale === 'en-US' ? en : ar;
  return (
    <div>
      <Head>
        <title>Spotix</title>
        <meta
          name="description"
          content="Custom made items to your be loved .."
        />
        <link rel="icon" href="/favicon/favicon.ico" />
      </Head>
      <div className="flex justify-center items-center h-screen w-full">
        <h1 className="m-auto">{t.title}</h1>
      </div>
    </div>
  );
};

export default Home;

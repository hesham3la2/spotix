import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

const Home: NextPage = () => {
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
    </div>
  );
};

export default Home;

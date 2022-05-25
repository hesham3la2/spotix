import React, { ReactNode } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { en } from '../../locales/en';
import { ar } from '../../locales/ar';

type Props = {
  children: ReactNode;
};

const MainLayout = ({ children }: Props) => {
  const { locale } = useRouter();
  const isEng = locale === 'en-US' ? true : false;
  const t = locale === 'en-US' ? en : ar;

  const childrenWithProps = React.Children.map(children, (child) => {
    // Checking isValidElement is the safe way and avoids a typescript
    // error too.
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { lang: t, isEng });
    }
    return child;
  });
  return (
    <>
      <Head>
        <title>Spotix</title>
        <meta
          name="description"
          content="Custom made items to your be loved .."
        />
        <link key="4" rel="icon" href="/favicon/favicon.ico" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&family=Rakkas&family=Vibes&display=swap"
          rel="stylesheet"
        />
      </Head>
      {childrenWithProps}
    </>
  );
};

export default MainLayout;

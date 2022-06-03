import type { NextPage } from "next";
import Link from "next/link";
import Head from "next/head";
import useTranslation from "next-translate/useTranslation";

type Props = {};
const Home: NextPage<Props> = ({}) => {
  const { t } = useTranslation("common");
  return (
    <div>
      <Head>
        <title>Hello</title>
      </Head>
      <h1>{t("metaTitle")}</h1>
      <Link href="/" locale="en">
        <h2>{t("english")}</h2>
      </Link>
      <Link href="/" locale="ar">
        <h2>{t("arabic")}</h2>
      </Link>
    </div>
  );
};

export default Home;

import Head from 'next/head';

import Layout, { siteTitle } from '../components/layout';

export default function About(): JSX.Element {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
    </Layout>
  );
}

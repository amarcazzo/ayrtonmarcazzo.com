import Head from 'next/head';

import Layout from '../components/layout';

export default function TIL(): JSX.Element {
  return (
    <Layout>
      <Head>
        <title>Today I Learnt</title>
      </Head>
    </Layout>
  );
}

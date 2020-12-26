import Head from 'next/head';
import Link from 'next/link';

import Layout, { siteTitle } from '../components/layout';

const socials = [
  {
    id: 1,
    title: 'github',
    icon: 'ri-github-fill',
    url: 'https://github.com/amarcazzo',
  },
  {
    id: 2,
    title: 'linkedin',
    icon: 'ri-linkedin-line',
    url: 'https://linkedin.com/in/amarcazzo',
  },
  {
    id: 3,
    title: 'twitter',
    icon: 'ri-twitter-line',
    url: 'https://twitter.com/ayrtonmarcazzo',
  },
];

export default function Home(): JSX.Element {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className="hero is-fullheight-with-navbar">
        <div className="hero-body">
          <div className="container has-text-centered">
            <p className="title m-0 has-text-white">Hi, there!</p>
            <p className="mb-2">
              Welcome, my name is{' '}
              <strong className="has-text-white">Ayrton</strong>.
            </p>
            <p className="is-italic"> dev | SRE | musician | friend</p>
            {socials.map(({ id, url, icon }) => (
              <Link href={url} key={id} passHref>
                <a className="ml-2 is-size-5 no-decoration">
                  <i className={icon} />
                </a>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        .no-decoration {
          text-decoration: none;
        }
      `}</style>
    </Layout>
  );
}

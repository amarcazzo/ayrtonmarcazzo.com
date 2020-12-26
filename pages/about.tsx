import Head from 'next/head';

import Layout, { siteTitle } from '../components/layout';

export default function About(): JSX.Element {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className="hero">
        <div className="hero-body">
          <div className="container">
            <article className="media">
              <div className="media-content">
                <div className="content">
                  <h1 className="title has-text-white">Who am I?</h1>
                  <p>
                    I&apos;m a web developer from Buenos Aires, Argentina.
                    I&apos;m 25 years old and I&apos;ve been working in this
                    area for around three and a half years now.
                  </p>

                  <p>
                    I use and play,{' '}
                    <span className="is-italic">or at least try</span>, with
                    every JavaScript library slash framework available. Even
                    tough I&apos;m constantly changing, my focus right now is
                    Angular, NestJS, and Next.js{' '}
                    <small className="is-italic has-text-weight-semibold">
                      ** psst, this site for example **
                    </small>
                  </p>

                  <p>
                    One of my true passions is music. I started dancing{' '}
                    <span className="has-text-weight-semibold">
                      tradicional Argentinian folklore
                    </span>{' '}
                    when I was about six, and continued attached to some form of
                    art ever since. Nowadays I mostly play the guitar or bass in
                    my free time.
                  </p>
                </div>
              </div>

              <figure className="media-right">
                <p className="image is-128x128">
                  <img
                    className="is-rounded"
                    src="images/profile.jpg"
                    alt="Profile"
                  />
                </p>
              </figure>
            </article>
          </div>
        </div>
      </section>
    </Layout>
  );
}

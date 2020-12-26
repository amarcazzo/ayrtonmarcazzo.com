import Head from 'next/head';
import Link from 'next/link';

export const siteTitle = 'Ayrton Marcazzo';

const navLinks = [
  {
    id: 1,
    href: '/about',
    title: 'about',
  },
  {
    id: 2,
    href: '/today-i-learnt',
    title: 'TIL',
  },
  {
    id: 3,
    href: '/contact',
    title: 'contact',
  },
];

export default function Layout({
  children,
  home,
}: {
  children: React.ReactNode;
  home?: boolean;
}): JSX.Element {
  return (
    <div className="container">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle,
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header>
        <nav className="is-flex is-justify-content-space-between my-3">
          <i className="ri-sun-fill" />
          <div className="level">
            {navLinks.map(({ href, title, id }) => (
              <p className="level-item has-text-centered ml-5" key={id}>
                <Link href={href}>
                  <a className="link is-info">{title}</a>
                </Link>
              </p>
            ))}
          </div>
        </nav>
      </header>
      <main>{children}</main>
      {!home && (
        <div>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  );
}

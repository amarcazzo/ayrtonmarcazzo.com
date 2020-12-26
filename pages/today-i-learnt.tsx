import { GetStaticPropsContext, GetStaticPropsResult } from 'next';
import Head from 'next/head';
import { ParsedUrlQuery } from 'querystring';

import Layout from '../components/layout';
import request from '../lib/dato-cms';

const POSTS = `
  query getPosts($limit: IntType) {
    site: _site {
      favicon: faviconMetaTags {
        attributes
        content
        tag
      }
    }
    blog {
      seo: _seoMetaTags {
        attributes
        content
        tag
      }
    }
    allPosts(first: $limit) {
      id
      title
      excerpt
      content
      date
      author {
        name
      }
      cover {
        responsiveImage(
          imgixParams: { fit: crop, w: 300, h: 300, auto: format }
        ) {
          srcSet
          webpSrcSet
          sizes
          src
          width
          height
          aspectRatio
          alt
          title
          base64
        }
      }
    }
  }
`;

export async function getStaticProps(
  context: GetStaticPropsContext<ParsedUrlQuery>,
): Promise<GetStaticPropsResult<any>> {
  const { allPosts: posts } = await request({
    query: POSTS,
    variables: { limit: 10 },
    preview: context.preview,
  });

  posts.sort((a, b) => a.id - b.id);

  return {
    props: {
      posts,
    },
  };
}

interface Posts {
  posts: any[];
}

export default function TIL({ posts }: Posts): JSX.Element {
  return (
    <Layout>
      <Head>
        <title>Today I Learnt</title>
      </Head>
      {posts.length ? (
        posts.map((post) => (
          <article className="message is-small mb-3" key={post.id}>
            <div className="message-header">
              <p>{post.title}</p>
              <small className="has-text-weight-light">{post.date}</small>
            </div>
            <div className="message-body">{post.content}</div>
          </article>
        ))
      ) : (
        <div className="notification is-dark has-text-centered my-3">
          <span role="img" aria-label="empty-message">
            Nothing to see here... yet 👀
          </span>
        </div>
      )}
    </Layout>
  );
}

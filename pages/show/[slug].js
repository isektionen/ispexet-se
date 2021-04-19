import graphcms, { gql } from "../../lib/graphcms";

export default ({ show }) => (
  <>
    <h1>{show.title}</h1>
    <h2>{show.orTitle}</h2>
    <p>{show.venue.name}</p>
    <p>{show.description}</p>
  </>
);

export async function getStaticProps({ params }) {
  const { show } = await graphcms.request(
    gql`
      query GroupPageQuery($slug: String!) {
        show(where: { slug: $slug }) {
          title
          orTitle
          venue {
            name
          }
        }
      }
    `,
    {
      slug: params.slug,
    }
  );

  return {
    props: {
      show,
    },
  };
}

export async function getStaticPaths() {
  const { shows } = await graphcms.request(
    gql`
      {
        shows {
          slug
          title
          orTitle
        }
      }
    `
  );

  return {
    paths: shows.map((g) => ({
      params: {
        slug: g.slug,
      },
    })),
    fallback: false,
  };
}

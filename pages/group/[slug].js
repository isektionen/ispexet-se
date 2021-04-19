import graphcms, { gql } from "../../lib/graphcms";

export default ({ group }) => (
  <>
    <h1>{group.name}</h1>
    <h2>Medlemmar</h2>
    <ul>
      {group.members.map((m) => (
        <li key={m.name}>{m.name}</li>
      ))}
    </ul>
  </>
);

export async function getStaticProps({ params }) {
  const { group } = await graphcms.request(
    gql`
      query GroupPageQuery($slug: String!) {
        group(where: { slug: $slug }) {
          name
          members {
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
      group,
    },
  };
}

export async function getStaticPaths() {
  const { groups } = await graphcms.request(
    gql`
      {
        groups {
          slug
          name
        }
      }
    `
  );

  return {
    paths: groups.map((g) => ({
      params: {
        slug: g.slug,
      },
    })),
    fallback: false,
  };
}

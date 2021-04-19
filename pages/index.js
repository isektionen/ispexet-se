import Link from "next/link";
import graphcms, { gql } from "../lib/graphcms";

export default ({ shows, groups }) => (
  <>
    <h1>Shower</h1>
    <ul>
      {shows.map((s) => (
        <li>
          <Link key={s.slug} href={`/show/${s.slug}`}>
            <a>
              {s.title} eller {s.orTitle}
            </a>
          </Link>
        </li>
      ))}
    </ul>
    <h1>Grupper</h1>
    <ul>
      {groups.map((g) => (
        <li>
          <Link key={g.slug} href={`/group/${g.slug}`}>
            <a>{g.name}</a>
          </Link>
        </li>
      ))}
    </ul>
  </>
);

export async function getStaticProps() {
  const { shows, groups } = await graphcms.request(
    gql`
      {
        shows {
          slug
          title
          orTitle
        }
        groups {
          slug
          name
        }
      }
    `
  );

  return {
    props: {
      shows,
      groups,
    },
  };
}

import { db } from '~/utils/db-connection';

const POSTS_ID = process.env.NOTION_POSTS_DATABASE_ID;

function parsePostResponse(post) {
  const properties = post.properties;
  const id = post.id;
  const title = properties.name.title[0].plain_text;
  const link = properties.path.rich_text[0].plain_text;

  return {
    id,
    title,
    link,
  };
}

export async function latestPosts() {
  const params = {
    database_id: POSTS_ID,
    page_size: 2,
    filter: {
      property: 'name',
      title: {
        is_not_empty: true,
      },
    },
  };
  const getLatestPosts = await db().databases.query(params);
  const results = await getLatestPosts.results;

  return results.map(parsePostResponse);
}

import { db } from '~/utils/db-connection';

const POSTS_ID = process.env.NOTION_POSTS_DATABASE_ID;

function parseCategories(categories) {
  const normalizeCategories = categories.map((category) => category.name);
  return normalizeCategories.join(', ');
}

function parsePostResponse(post) {
  const properties = post.properties;
  const id = post.id;
  const title = properties.name.title[0].plain_text;
  const link = properties.path.rich_text[0].plain_text;
  const createdAt = properties.createdAt.date.start;
  const categories = parseCategories(properties.categories.multi_select);
  const thumbnail = properties.thumbnail.url;
  const excerpt = properties.excerpt.rich_text[0].plain_text;

  return {
    id,
    title,
    link,
    createdAt,
    categories,
    thumbnail,
    excerpt,
  };
}

export async function posts() {
  const params = {
    database_id: POSTS_ID,
    filter: {
      property: 'name',
      title: {
        is_not_empty: true,
      },
    },
  };
  const getPosts = await db().databases.query(params);
  const results = await getPosts.results;

  return results.map(parsePostResponse);
}

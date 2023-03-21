import { db } from "@/utils/db-connection";

const { NOTION_POSTS_DATABASE_ID } = process.env;

function parseCategories(categories) {
  const normalizeCategories = categories.map((category) => category.name);
  return normalizeCategories.join(", ");
}

function parsePostResponse(post) {
  const properties = post.properties;

  const id = post.id;
  const title = properties.title.title[0].plain_text;
  const slug = properties.slug.rich_text[0].plain_text;
  const categories = parseCategories(properties.categories.multi_select);
  const thumbnail = properties.thumbnail.url;
  const publishedAt = properties.publishedAt?.date?.start;
  const excerpt = properties.excerpt?.rich_text[0]?.plain_text;

  return {
    id,
    title,
    slug,
    categories,
    thumbnail,
    publishedAt,
    excerpt,
  };
}

export async function posts() {
  const params = {
    database_id: NOTION_POSTS_DATABASE_ID,
    filter: {
      and: [
        {
          property: "title",
          title: {
            is_not_empty: true,
          },
        },
        {
          property: "status",
          select: {
            equals: "Published",
          },
        },
      ],
    },
  };
  const getPosts = await db().databases.query(params);
  const results = await getPosts.results;

  return results.map(parsePostResponse);
}

export async function urls() {
  const data = await posts();

  return data.map((item) => {
    return {
      params: {
        slug: item.slug,
      },
    };
  });
}

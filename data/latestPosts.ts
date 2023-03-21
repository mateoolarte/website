// @ts-nocheck
import { db } from "@/utils/db-connection";

const { NOTION_POSTS_DATABASE_ID } = process.env;

function parsePostResponse(post) {
  const properties = post.properties;
  const id = post.id;
  const title = properties.title.title[0].plain_text;
  const slug = properties.slug.rich_text[0].plain_text;

  return {
    id,
    title,
    slug,
  };
}

export async function latestPosts() {
  const params = {
    database_id: NOTION_POSTS_DATABASE_ID,
    page_size: 2,
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
  const getLatestPosts = await db().databases.query(params);
  const results = await getLatestPosts.results;

  return results.map(parsePostResponse);
}

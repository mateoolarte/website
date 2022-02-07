import { NotionToMarkdown } from 'notion-to-md';
import { db } from '~/utils/db-connection';
import parseFrontMatter from 'front-matter';
import { marked } from 'marked';

const POSTS_ID = process.env.NOTION_POSTS_DATABASE_ID;

function parseCategories(categories) {
  const normalizeCategories = categories.map((category) => category.name);
  return normalizeCategories.join(', ');
}

function parsePostResponse(post) {
  const properties = post.properties;
  const title = properties.name.title[0].plain_text;
  const createdAt = properties.createdAt.date.start;
  const categories = parseCategories(properties.categories.multi_select);
  const thumbnail = properties.thumbnail.url;
  const copyright = properties.copyright.url;

  return {
    title,
    createdAt,
    categories,
    thumbnail,
    copyright,
  };
}

export async function post(slug) {
  const n2m = new NotionToMarkdown({ notionClient: db() });

  const params = {
    database_id: POSTS_ID,
    page_size: 1,
    filter: {
      property: 'path',
      rich_text: {
        equals: slug,
      },
    },
  };
  const getPage = await db().databases.query(params);
  const pageId = getPage.results[0].id;
  const metadata = parsePostResponse(getPage.results[0]);

  const mdblocks = await n2m.pageToMarkdown(pageId);
  const mdString = n2m.toMarkdownString(mdblocks);
  const { body } = parseFrontMatter(mdString);
  const parseToHtml = marked(body);

  return {
    ...metadata,
    content: parseToHtml,
  };
}

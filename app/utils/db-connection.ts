import { Client } from '@notionhq/client';

export function db() {
  const notion = new Client({
    auth: process.env.NOTION_TOKEN,
  });

  return notion;
}

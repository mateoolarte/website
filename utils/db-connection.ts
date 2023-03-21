import { Client } from "@notionhq/client";

const { NOTION_TOKEN } = process.env;

export function db() {
  const notion = new Client({
    auth: NOTION_TOKEN,
  });

  return notion;
}

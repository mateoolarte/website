import { HomePost } from "@/components/HomePost";

import { Heading, PostsWrapper, Btn } from "./styles";
import type { LatestPostsProps } from "./types";

export function LatestPosts({ data }: LatestPostsProps) {
  if (!data || data.length === 0) return null;

  return (
    <>
      <Heading>Latest posts</Heading>

      <PostsWrapper>
        {data.map(({ id, slug, title }) => (
          <HomePost key={id} link={`/blog/${slug}`} title={title} />
        ))}

        <Btn href="/blog">See more</Btn>
      </PostsWrapper>
    </>
  );
}

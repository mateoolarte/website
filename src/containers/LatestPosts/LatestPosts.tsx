import React from 'react';

import { HomePost } from '../../components/HomePost';

import { Heading, PostsWrapper, Btn } from './LatestPosts.styles';

interface LatestPostsProps {
  posts: any;
}

export function LatestPosts({ posts }: LatestPostsProps) {
  return (
    <>
      <Heading>Latest posts</Heading>

      <PostsWrapper>
        {posts.map((post) => {
          const node = post?.node;
          const frontmatter = node?.frontmatter;
          const id = frontmatter?.id || '';
          const path = frontmatter?.path || '';
          const title = frontmatter?.title || '';

          return <HomePost key={id} link={`/blog/${path}`} title={title} />;
        })}

        <Btn to="/blog">See more</Btn>
      </PostsWrapper>
    </>
  );
}

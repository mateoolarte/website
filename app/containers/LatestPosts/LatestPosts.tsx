import { HomePost } from '~/components/HomePost';

import { Heading, PostsWrapper, Btn } from './styles';

type Post = {
  id: string;
  link: string;
  title: string;
};

interface LatestPostsProps {
  posts: Post[];
}

export function LatestPosts({ posts }: LatestPostsProps) {
  if (!posts || posts.length === 0) return null;

  return (
    <>
      <Heading>Latest posts</Heading>

      <PostsWrapper>
        {posts.map(({ id, link, title }) => (
          <HomePost key={id} link={`/blog/${link}`} title={title} />
        ))}

        <Btn to="/blog">See more</Btn>
      </PostsWrapper>
    </>
  );
}

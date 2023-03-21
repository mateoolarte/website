interface LatestPost {
  id: number;
  slug: string;
  title: string;
}

export interface LatestPostsProps {
  data: LatestPost[];
}

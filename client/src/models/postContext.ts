export type Post = {
  title: string;
  description: string;
  image?: string;
};

export type PostProviderType = {
  posts: Post[];
  setPosts: (value: Post[]) => void;
};

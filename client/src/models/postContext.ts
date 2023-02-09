export type Post = {
  _id: string;
  title: string;
  description: string;
  image?: {
    public_id: string;
    url: string;
  };
};

export type PostProviderType = {
  posts: Post[];
  setPosts: (value: Post[]) => void;
};

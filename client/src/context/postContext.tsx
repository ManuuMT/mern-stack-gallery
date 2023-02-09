import { createContext, ReactNode, useContext, useState } from "react";
import { Post, PostProviderType } from "../models";

const context = createContext({});

export const usePosts = () => useContext(context) as PostProviderType;

interface Props {
  children: ReactNode;
}

export const PostProvider = ({ children }: Props) => {
  const [posts, setPosts] = useState<Post[]>([]);
  return (
    <context.Provider value={{ posts, setPosts }}>{children}</context.Provider>
  );
};

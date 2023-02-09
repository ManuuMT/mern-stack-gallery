import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { Post, PostProviderType } from "../models";
import { getPostsRequests } from "../services";

const context = createContext({});

export const usePosts = () => useContext(context) as PostProviderType;

interface Props {
  children: ReactNode;
}

export const PostProvider = ({ children }: Props) => {
  const [posts, setPosts] = useState<Post[]>([]);
  const getPosts = async () => {
    const res = await getPostsRequests();
    setPosts(res.data);
  };

  // * Life Cycle
  useEffect(() => {
    getPosts();
  });

  return (
    <context.Provider value={{ posts, setPosts }}>{children}</context.Provider>
  );
};

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { Post, PostProviderType } from "../models";
import {
  createPostRequest,
  getPostsRequest,
  deletePostRequest,
  getSinglePostsRequest,
} from "../services";

interface Props {
  children: ReactNode;
}

const context = createContext({});
export const usePosts = () => useContext(context) as PostProviderType;

export const PostProvider = ({ children }: Props) => {
  // * States
  const [posts, setPosts] = useState<Post[]>([]);

  // * Methods
  const createPost = async (post: Post) => {
    const res = await createPostRequest(post);
    setPosts([...posts, res.data]);
  };

  const deletePost = async (id: string) => {
    const res = await deletePostRequest(id);
    if (res.status === 204) {
      setPosts(posts.filter((post) => post._id !== id));
    }
  };

  const getSinglePost = async (id: string) => {
    const res = await getSinglePostsRequest(id);
    return res.data;
  };

  // * Life Cycle
  useEffect(() => {
    (async () => {
      const res = await getPostsRequest();
      setPosts(res.data);
    })();
  }, []);

  return (
    <context.Provider
      value={{ posts, setPosts, createPost, deletePost, getSinglePost }}
    >
      {children}
    </context.Provider>
  );
};

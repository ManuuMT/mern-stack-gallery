import axios from "axios";
import { Post } from "../models";

export const getPostsRequest = async () =>
  await axios.get("http://localhost:4000/posts");

export const deletePostRequest = async (id: string) =>
  await axios.delete(`http://localhost:4000/posts/${id}`);

export const createPostRequest = async (post: Post) =>
  await axios.post("http://localhost:4000/posts", post);

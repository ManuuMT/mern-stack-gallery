import Post from "../models/Post.js";
import { uploadImage, deleteImage } from "../libs/cloudinary.js";
import fs from "fs-extra";

export const getPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    return res.send(posts);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createPost = async (req, res) => {
  try {
    const { title, description } = req.body;
    let image;
    if (req.files.image) {
      const result = await uploadImage(req.files.image.tempFilePath);
      await fs.remove(req.files.image.tempFilePath);
      image = {
        url: result.secure_url,
        public_id: result.public_id,
      };
    }

    const newPost = new Post({ title, description, image });
    await newPost.save();
    return res.json(newPost);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
};

export const updatePost = async (req, res) => {
  try {
    const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    return res.send(updatedPost);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deletePost = async (req, res) => {
  try {
    const removedPost = await Post.findByIdAndDelete(req.params.id);
    if (!removedPost) return res.sendStatus(404);

    if (removedPost.image.public_id) {
      await deleteImage(removedPost.image.public_id);
    }
    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getSinglePost = async (req, res) => {
  try {
    const foundedPost = await Post.findById(req.params.id);
    if (!foundedPost) return res.sendStatus(404);
    return res.json(foundedPost);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

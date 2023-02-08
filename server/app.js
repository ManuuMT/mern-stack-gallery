import express from "express";
import postsRoutes from "./routes/posts.routes.js";
import fileupload from "express-fileupload";

const app = express();

// middlewares
app.use(express.json());
app.use(
  fileupload({
    useTempFiles: true,
    tempFileDir: "./upload",
  })
);

// routes
app.use(postsRoutes);

export default app;

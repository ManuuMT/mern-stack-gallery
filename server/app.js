import express from "express";
import postsRoutes from "./routes/posts.routes.js";
import fileupload from "express-fileupload";
import cors from "cors";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));

// middlewares
app.use(cors());
app.use(express.json());
app.use(
  fileupload({
    useTempFiles: true,
    tempFileDir: "./upload",
  })
);

// routes
app.use(postsRoutes);
app.use(express.static(join(__dirname, "../client/dist")));

export default app;

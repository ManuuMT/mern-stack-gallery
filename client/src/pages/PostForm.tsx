import { ErrorMessage, Field, Form, Formik } from "formik";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import * as Yup from "yup";
import { usePosts } from "../context/postContext";
import { Post } from "../models";
import { VscArrowLeft } from "react-icons/vsc";

const PostForm: React.FC = () => {
  const { createPost, getSinglePost, updatePost } = usePosts();
  const navigate = useNavigate();
  const params = useParams();
  const [post, setPost] = useState<Post>();

  useEffect(() => {
    (async () => {
      if (params.id) {
        const post = await getSinglePost(params.id);
        setPost(post);
      }
    })();
  }, []);

  return (
    <div className="flex items-center justify-center mt-4">
      <div className="bg-zinc-800 p-10 pt-4 shadow-md shadow-black">
        <header className="flex flex-col justify-between items-center  py-4 text-white">
          <div className="w-full flex justify-start mb-4">
            <Link
              to="/"
              className="text-gray-400 text-sm hover:text-gray-300 flex items-center"
            >
              <VscArrowLeft className="mx-1" /> Go Back
            </Link>
          </div>
          <h3 className="text-xl">{params?.id ? "Edit Post" : "New Post"}</h3>

          <Formik
            enableReinitialize
            validationSchema={Yup.object({
              title: Yup.string().required("Title is required"),
              description: Yup.string().required("Description  is required"),
            })}
            initialValues={post || { title: "", description: "" }}
            onSubmit={async (values: Post) => {
              if (params.id) {
                await updatePost(params.id, values);
              } else await createPost(values);
              navigate("/");
            }}
          >
            {({ handleSubmit, setFieldValue }) => (
              <Form onSubmit={handleSubmit} className="flex flex-col">
                <label
                  htmlFor="title"
                  className="text-sm block font-bold text-gray-400"
                >
                  Title
                </label>
                <Field
                  name="title"
                  placeholder="First post"
                  className="px-3 py-2 my-1 focus: outline-none rounded bg-gray-600 text-white w-full"
                />
                <ErrorMessage
                  component="p"
                  className=" text-red-400 text-sm"
                  name="title"
                />
                <label
                  htmlFor="description"
                  className="text-sm block font-bold text-gray-400"
                >
                  Description
                </label>
                <Field
                  component="textarea"
                  name="description"
                  placeholder="Some description..."
                  className="px-3 py-2 my-1 focus: outline-none rounded bg-gray-600 w-full"
                  rows={3}
                />
                <ErrorMessage
                  component="p"
                  className="text-red-400 text-sm"
                  name="description"
                />
                <label
                  htmlFor="Image"
                  className="text-sm block font-bold text-gray-400"
                >
                  Image
                </label>
                <input
                  type="file"
                  name="image"
                  className="px-3 py-2 focus: outline-none rounded"
                  onChange={(e) => setFieldValue("image", e.target.files?.[0])}
                />
                <button
                  type="submit"
                  className="bg-indigo-600 hover:bg-indigo-500 px-4 py-2 rounded mt-2 focus: outline-none disabled:bg-indigo-400"
                >
                  Save
                </button>
              </Form>
            )}
          </Formik>
        </header>
      </div>
    </div>
  );
};

export default PostForm;

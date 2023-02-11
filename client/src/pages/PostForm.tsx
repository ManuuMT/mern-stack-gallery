import { Field, Form, Formik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { usePosts } from "../context/postContext";
import { Post } from "../models";

const PostForm: React.FC = () => {
  const { createPost } = usePosts();
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-center">
      <div className="bg-zinc-800 p-10 shadow-md shadow-black">
        <header className="flex flex-col justify-between items-center  py-4 text-white">
          <h3 className="text-xl">New Post</h3>
          <Link to="/" className="text-gray-400 text-sm hover:text-gray-300">
            Go Back
          </Link>
          <Formik
            initialValues={{ title: "", description: "" }}
            onSubmit={async (values: Post) => {
              await createPost(values);
              navigate("/");
            }}
          >
            {({ handleSubmit }) => (
              <Form onSubmit={handleSubmit} className="flex flex-col">
                <Field name="title" placeholder="Title..." />
                <Field name="description" placeholder="Description..." />
                <button type="submit">Create new post</button>
              </Form>
            )}
          </Formik>
        </header>
      </div>
    </div>
  );
};

export default PostForm;

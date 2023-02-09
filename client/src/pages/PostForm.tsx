import { Link } from "react-router-dom";

const PostForm: React.FC = () => {
  return (
    <div className="w-screen min-h-screen flex flex-col items-center justify-center">
      <h1>Post Form</h1>
      <Link to="/" className="bg-slate-800">
        Home
      </Link>
    </div>
  );
};

export default PostForm;

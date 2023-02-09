import { useEffect } from "react";
import { usePosts } from "../context/postContext";
import { Link } from "react-router-dom";

const HomePage: React.FC = () => {
  const { posts } = usePosts();

  // useEffect(() => console.log(posts), [posts]);

  return (
    <div className="w-screen min-h-screen flex flex-col items-center justify-center">
      <h1>HomePage</h1>
      {posts.map((post) => (
        <div>{post.title}</div>
      ))}
      <Link to="/form" className="bg-slate-800">
        Blog
      </Link>
    </div>
  );
};

export default HomePage;

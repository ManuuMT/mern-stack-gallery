import { useEffect } from "react";
import { usePosts } from "../context/postContext";
import { Link } from "react-router-dom";

const HomePage: React.FC = () => {
  const { posts, setPosts } = usePosts();

  useEffect(() => console.log(posts), [posts]);

  return (
    <div className="w-screen min-h-screen flex flex-col items-center justify-center">
      <h1>HomePage</h1>
      <button
        className=" bg-red-600 p-2"
        onClick={() =>
          setPosts([{ title: "Holis", description: "Descripcion de holis" }])
        }
      >
        GO!
      </button>
      <Link to="/form" className="bg-slate-800">
        Blog
      </Link>
    </div>
  );
};

export default HomePage;

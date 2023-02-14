import toast from "react-hot-toast";
import { usePosts } from "../context/postContext";
import { useNavigate } from "react-router-dom";
import { Post } from "../models";

interface PostCardProps {
  post: Post;
}

const PostCard: React.FC<PostCardProps> = (props) => {
  // * States
  const { deletePost } = usePosts();
  const navigate = useNavigate();

  // * Methods
  const HandleDelete = (id: string) => {
    toast(
      (t) => (
        <div className="flex flex-col items-center gap-1">
          <p className="text-white">
            Do you want to delete <strong>{props.post.title}</strong>?
          </p>
          <div>
            <button
              className="bg-red-500 hover:bg-red-400 px-3 py-1 text-sm text-white rounded mx-2"
              onClick={() => {
                deletePost(id);
                toast.dismiss(t.id);
              }}
            >
              Delete
            </button>
            <button
              className="bg-slate-400 hover:bg-slate-500 px-3 py-1 text-white rounded mx-2"
              onClick={() => toast.dismiss(t.id)}
            >
              Cancel
            </button>
          </div>
        </div>
      ),
      {
        duration: 4000,
        style: {
          background: "#202020",
        },
      }
    );
  };

  return (
    <div
      className="bg-zinc-800 text-white rounded-md shadow-md shadow-black hover:bg-zinc-700 hover:cursor-pointer h-fit"
      onClick={() => navigate(`/posts/${props.post._id}`)}
    >
      <div className="px-4 py-7">
        <div className="flex justify-between items-center">
          <h3 className="text-md font-semibold">{props.post.title}</h3>
          <button
            className="bg-red-600 text-sm px-2 py-1 rounded"
            onClick={(e) => {
              e.stopPropagation();
              HandleDelete(props.post._id!);
            }}
          >
            Delete
          </button>
        </div>
        <p className="text-gray-400">{props.post.description}</p>
      </div>
      {props.post.image && (
        <img src={props.post.image.url} alt={props.post.title} />
      )}
    </div>
  );
};

export default PostCard;

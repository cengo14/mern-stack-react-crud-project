import React from "react";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { deletePostAction, updatePostAction } from "../../redux/actions/post";

const HomeCard = ({ post }) => {
  const dispatch = useDispatch();

  const deletePost = (id) => {
    dispatch(deletePostAction(id));
    // window.location.reload();
  };
  const updatePost = (id) => {
    dispatch({ type: "MODAL", payload: { open: true, updateId: id } });
  };
  return (
    <div className="relative md:w-1/4 border p-3 rounded-md bg-amber-600/30 shadow-md hover:shadow-md transition duration-300 cursor-pointer m-5">
      <h4 className="font-bold text-xl">{post?.title}</h4>
      <p className="text-sm text-gray-700">{post?.description}</p>
      <div className="flex justify-between items-center">
        <span className="text-xs text-gray-500">{post?.user}</span>
        <span className="text-xs text-gray-500">
          {post.date?.substring(0, 10)}
        </span>
      </div>
      <div className="absolute -top-3 -right-0 flex items-center space-x-2">
        <AiOutlineDelete
          onClick={() => deletePost(post._id)}
          size={32}
          className="text-white bg-red-500 rounded-full p-2 cursor-pointer hover:scale-110 transition duration-300"
        />

        <AiOutlineEdit
          onClick={() => updatePost(post._id)}
          size={32}
          className="text-white bg-gray-600 rounded-full p-2 cursor-pointer hover:scale-110 transition duration-300"
        />
      </div>
    </div>
  );
};

export default HomeCard;

import React, { useState } from "react";
import { BiCloset } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { MdClose } from "react-icons/md";
import { createPostAction, updatePostAction } from "../../redux/actions/post";
const PostModal = () => {
  const { modal } = useSelector((state) => state.modal);
  const dispatch = useDispatch();
  const [postData, setPostData] = useState({
    user: "",
    title: "",
    description: "",
  });
  const handleChange = (e) => {
    setPostData({ ...postData, [e.target.name]: e.target.value });
  };
  const handlePost = () => {
    if (modal?.updateId) {
      dispatch(updatePostAction(modal?.updateId, postData));
    } else {
      dispatch(createPostAction(postData));
    }
    dispatch({ type: "MODAL", payload: false });
  };
  return (
    <div className="w-fulll h-screen bg-opacity-50 bg-black fixed inset-0 z-50 flex items-center justify-center">
      <div className="bg-white md:w-1/3 p-2 rounded-md shadow">
        <div className="flex justify-between">
          <h1 className="text-3xl text-amber-500 my-4 text-center font-bold font-mono">
            {modal.updateId ? "Post Güncelle" : "Postala"}
          </h1>

          <MdClose
            size={40}
            className="text-xl font-bold  h-fit rounded-full p-2 cursor-pointer text-amber-500"
            onClick={() => dispatch({ type: "MODAL", payload: false })}
          />
        </div>

        <div className="flex flex-col gap-2 space-y-3">
          <input
            onChange={handleChange}
            value={postData.user}
            name="user"
            type="text"
            placeholder="Kullanıcı"
            className="placeholder-amber-500 input-style"
          />
          <input
            onChange={handleChange}
            value={postData.title}
            name="title"
            type="text"
            placeholder="Başlık"
            className="placeholder-amber-500 input-style"
          />

          <input
            onChange={handleChange}
            className=" placeholder-amber-500 input-style"
            value={postData.description}
            name="description"
            type="text"
            placeholder="Açıklama"
          />
        </div>
        <button
          onClick={handlePost}
          className="w-full bg-amber-500 hover:bg-amber-600 transition py-2 rounded-md text-white my-4"
        >
          {modal.updateId ? "Güncelle" : "Postala"}
        </button>
      </div>
    </div>
  );
};

export default PostModal;

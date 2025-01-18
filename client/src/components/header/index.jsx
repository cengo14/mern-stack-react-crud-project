import React from "react";
import { BiLogOut, BiSearch } from "react-icons/bi";
import useToken from "./../../hooks/useToken";
import { useDispatch } from "react-redux";

const Header = () => {
  const [token] = useToken();
  const dispacth = useDispatch();

  const logOutFunc = () => {
    localStorage.clear();
    window.location.href = "/auth";
  };
  const openModalFunc = () => {
    dispacth({ type: "MODAL", payload: true });
  };

  return (
    <div className="flex justify-between items-center px-2 py-4 gap-2 border-b-2 border-gray-500 ">
      <h1 className="text-2xl font-bold font-mono text-gray-500 drop-shadow-xl">
        POSTALA
      </h1>
      <div className="flex gap-5">
        <div className="flex items-center border border-gray-500 shadow-gray-100 shadow-sm rounded-full p-2 gap-2">
          <input
            type="text"
            placeholder="ara"
            className="outline-none placeholder-gray-500"
          />
          <BiSearch className="text-gray-500" />
        </div>
        <button
          onClick={openModalFunc}
          className="text-white bg-gray-500 hover:bg-gray-600 px-2 rounded-2xl"
        >
          Postala
        </button>
      </div>
      <div className="flex items-center gap-2">
        <img
          src="/user.png"
          alt="user"
          className="size-10 border border-gray-500 rounded-full"
        />
        <h1 className="text-xl text-gray-500 font-semibold">
          {token.newUser
            ? token.newUser.username
            : token.user
            ? token.user.username
            : "Yeni Kullanıcı"}
        </h1>
        <BiLogOut
          onClick={logOutFunc}
          size={30}
          className="cursor-pointer text-gray-500"
        />
      </div>
    </div>
  );
};

export default Header;

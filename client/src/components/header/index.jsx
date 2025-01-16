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
    <div className="flex justify-between items-center px-2 py-4 gap-2 border-b-2 border-amber-500">
      <h1 className="text-2xl font-bold font-mono text-amber-500 drop-shadow-xl">
        POSTALA
      </h1>
      <div className="flex gap-5">
        <div className="flex items-center border border-amber-500 shadow-amber-100 shadow-sm rounded-full p-2 gap-2">
          <input
            type="text"
            placeholder="ara"
            className="outline-none placeholder-amber-500"
          />
          <BiSearch className="text-amber-500" />
        </div>
        <button
          onClick={openModalFunc}
          className="text-white bg-amber-500 hover:bg-amber-600 px-2 rounded-2xl"
        >
          Postala
        </button>
      </div>
      <div className="flex items-center gap-2">
        <img
          src="/user.png"
          alt="user"
          className="size-10 border border-amber-500 rounded-full"
        />
        <h1 className="text-xl text-amber-500 font-semibold">
          {token.newUser
            ? token.newUser.username
            : token.user
            ? token.user.username
            : "Yeni Kullanıcı"}
        </h1>
        <BiLogOut
          onClick={logOutFunc}
          size={30}
          className="cursor-pointer text-amber-500"
        />
      </div>
    </div>
  );
};

export default Header;

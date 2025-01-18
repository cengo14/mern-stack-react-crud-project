import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginAction, registerAction } from "../redux/actions/auth";
import { useNavigate } from "react-router-dom";
const Auth = () => {
  const [signUp, setSignUp] = useState(true);
  const [authData, setAuthData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setAuthData({ ...authData, [e.target.name]: e.target.value });
    console.log("authData", authData);
  };

  const authFunc = () => {
    if (signUp) {
      dispatch(registerAction(authData));
    } else {
      dispatch(loginAction(authData));
    }
  };

  return (
    <div className="w-full h-screen bg-gray-100 flex items-center justify-center ">
      <div className="flex flex-col w-1/3">
        <h1 className="text-3xl text-gray-700 font-bold my-5">CIVILDAŞ</h1>
        <div className=" bg-white p-2 rounded-md shadow hover:shadow-lg">
          <h2 className="text-gray-600 text-xl font-semibold">
            {signUp ? "Üyelik Oluştur" : "Giriş Yapın"}
          </h2>
          <div className="flex flex-col space-y-3 my-5">
            {signUp && (
              <input
                onChange={handleChange}
                value={authData.username}
                name="username"
                type="text"
                placeholder="Kullanıcı Adı"
                className="input-style"
              />
            )}
            <input
              onChange={handleChange}
              value={authData.email}
              name="email"
              type="email"
              placeholder="Email"
              className="input-style"
            />
            <input
              onChange={handleChange}
              value={authData.password}
              name="password"
              type="password"
              placeholder="Şifre"
              className="input-style"
            />
          </div>
          <div className="text-red-500 text-xs cursor-pointer mb-4">
            {signUp ? (
              <span onClick={() => setSignUp(false)}>
                Daha önce kayıt oldunuz mu?
              </span>
            ) : (
              <span onClick={() => setSignUp(true)}>
                Hemen ücretsiz kayıt olun
              </span>
            )}
          </div>
          <div
            onClick={authFunc}
            className="w-full p-2 text-center bg-gray-600 text-white rounded-md cursor-pointer hover:bg-gray-700 "
          >
            {signUp ? "Kayıt Ol" : "Giriş Yap"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;

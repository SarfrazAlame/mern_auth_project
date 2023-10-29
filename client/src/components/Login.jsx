import React, { useState } from "react";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  signInSuccess,
  signInFailure,
  signInStart,
} from "../features/userSlice";

const Login = () => {
  const [visible, setVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const naviagte = useNavigate();
  const dispatch = useDispatch();

  const { loading, error } = useSelector((state) => state.user);

  const getAllData = async () => {
    try {
      dispatch(signInStart());
      const response = await fetch("http://localhost:4000/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if(data.token){
        localStorage.setItem("token",data.token)
      }
      if (data.success == false) {
        dispatch(signInFailure(data.message));
        return;
      }
      dispatch(signInSuccess(data));
      if (data.success === false) {
        naviagte("/login");
      } else {
        naviagte("/");
      }
    } catch (error) {
      dispatch(signInFailure(error));
    }
  };

  return (
    <div className="flex w-full  h-full justify-center items-center mt-12">
      <div>
        <h1 className="text-3xl font-medium text-gray-600 mx-20">
          Login to your account
        </h1>
        <div className="w-[34rem] h-[29rem] bg-white my-12 rounded-lg p-12 shadow-md">
          <div className="flex flex-col">
            <label className="font-medium text-gray-500">Email Address</label>
            <input
              type="text"
              name=""
              value={email}
              className="border border-gray-500 rounded p-2 w-full my-1"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col my-4 relative">
            <label className="font-medium text-gray-500">Password</label>
            <input
              type={visible ? "text" : "password"}
              name=""
              value={password}
              className="border border-gray-500 rounded p-2 w-full my-1"
              onChange={(e) => setPassword(e.target.value)}
            />
            {visible ? (
              <AiOutlineEye
                className="absolute right-2 top-10 text-2xl mx-3 cursor-pointer"
                onClick={() => setVisible(false)}
              />
            ) : (
              <AiOutlineEyeInvisible
                className="absolute right-2 top-10 text-2xl mx-3 cursor-pointer"
                onClick={() => setVisible(true)}
              />
            )}
          </div>
          <div className="flex justify-between">
            <div>
              <input type="checkbox" name="" className="mx-2" />
              <span className="text-gray-600">Remember me</span>
            </div>
            <p className="text-blue-500 cursor-pointer">Forgot your Password</p>
          </div>

          <div>
            <button
              onClick={getAllData}
              className="border w-full my-6 py-3 rounded border-gray-500 bg-blue-600 text-white"
            >
              Submit
            </button>
          </div>
          <div className="flex gap-2">
            <p>Not have any account?</p>
            <Link className="text-blue-500" to="/signup">
              SignUp
            </Link>
          </div>
        </div>
        <p>{error === true ? "something went wrong" : ""}</p>
      </div>
    </div>
  );
};

export default Login;

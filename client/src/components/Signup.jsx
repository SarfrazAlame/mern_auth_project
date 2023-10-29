import React, { useDebugValue, useState } from "react";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { signInStart, signInSuccess } from "../features/userSlice";

const SignUp = () => {
  const [visible, setVisible] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch()

  const handleSubmit = async () => {
    try {
      dispatch(signInStart());
      const response = await fetch("http://localhost:4000/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, password }),
      });
      const data = await response.json();
      dispatch(signInSuccess(data));
    
      setLoading(false);
      if (data.success === false) {
        setError(true);
      }
      navigate("/login");
    } catch (error) {
      setLoading(false);
      setError(true);
      console.log(error)
    }
  };

  return (
    <div className="flex w-full  h-full justify-center items-center mt-12">
      <div>
        <h1 className="text-3xl font-medium text-gray-600 mx-20">
          Register as a new user
        </h1>
        <div className="w-[34rem] h-[34rem] bg-white my-12 rounded-lg p-12 shadow-md">
          <div className="flex flex-col">
            <label className="font-medium text-gray-500">Full Name</label>
            <input
              type="text"
              name=""
              value={username}
              className="border border-gray-500 rounded p-2 w-full my-1"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="flex flex-col mt-2">
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

          <div>
            <button
              disabled={loading}
              className="border w-full my-6 py-3 rounded border-gray-500 bg-blue-600 text-white"
              onClick={handleSubmit}
            >
              {loading ? "Loading..." : "sign up"}
            </button>
          </div>
          <div className="flex gap-2">
            <p>Already have an account?</p>
            <Link className="text-blue-500" to="/login">
              Login
            </Link>
          </div>
        </div>
        <p className="text-red-500 -mt-4">{error && "something went wrong"}</p>
      </div>
    </div>
  );
};

export default SignUp;

import React from "react";
import { CgProfile } from "react-icons/cg";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { currentUser } = useSelector((state) => state.user);
  const token = localStorage.getItem('token')
  return (
    <div>
      <div className="h-16 bg-gray-300 flex justify-around text-gray-800 items-center">
        <div className="flex gap-5">
          <h1 className="text-2xl">MERN APP BASIC</h1>
        </div>
        <div className="flex text-xl gap-8">
          <div className="flex gap-3">
            <Link to={"/about"}>About</Link>
            <Link to={"/"}>Home</Link>
            {token ? (
              <>
                <Link to={"profile"}>
                  <CgProfile className="text-2xl mt-1 mx-3" />
                </Link>
              </>
            ) : (
              <Link to={"/login"}>Signin</Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

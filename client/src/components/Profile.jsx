import React from "react";
import { CgProfile } from "react-icons/cg";
import { useSelector } from "react-redux";

const Profile = () => {
  const { validUser } = useSelector((state) => state.user.currentUser);
  return (
    <div className="w-full flex justify-center">
      <div>
        <CgProfile className="h-56 w-72 text-gray-500" />
        <input
          type="text"
          defaultValue={validUser.username}
          className="w-80 text-center my-5 py-2 border border-gray-500 rounded"
        />
        <br />
        <input
          type="text"
          defaultValue={validUser.email}
          className="w-80 text-center my-5 py-2 border border-gray-500 rounded"
        />
        <br />
        <input
          type="text"
          className="w-80 text-center my-5 py-2 border border-gray-500 rounded"
        />
        <br />
        <button className="w-full border border-gray-500 py-2 rounded bg-gray-700 text-white">UPDATE</button>
        <div className="flex justify-between my-3 text-red-600">
           <button>Delete Account</button>
           <button>Sign Out</button>
        </div>
      </div>
    </div>
  );
};

export default Profile;

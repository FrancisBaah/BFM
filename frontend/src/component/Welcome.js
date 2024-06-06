import React from "react";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div className="w-full relative flex items-center justify-center bg-black text-white h-screen text-center">
      <div>Welcome</div>
      <div>
        <Link className="no-bg-btn absolute right-2 top-2" to={"/sign"}>
          sign in
        </Link>
      </div>
    </div>
  );
};

export default Welcome;

import { useState } from "react";
import { IoReorderThreeOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Sidebar = ({ children }) => {
  const [openSidebar, setOpenSidebar] = useState(false);

  const toggleSidebar = () => {
    setOpenSidebar(!openSidebar);
  };

  return (
    <div className="w-full h-full relative">
      <div className="flex items-center p-4 bg-gray-800 text-white">
        <IoReorderThreeOutline
          className="cursor-pointer absolute left-[200px]"
          size={30}
          onClick={toggleSidebar}
        />
        <h1 className="ml-4">My Application</h1>
      </div>
      {openSidebar && (
        <div className="w-[200px] h-full absolute top-0 left-0 bg-blue-500 flex flex-col items-center pt-10 text-white">
          <Link to="/dashboard" className="my-2 hover:underline">
            Dashboard
          </Link>
          <Link to="/deposit" className="my-2 hover:underline">
            Deposits
          </Link>
        </div>
      )}
      <div className="ml-[200px]">{children}</div>
    </div>
  );
};

export default Sidebar;

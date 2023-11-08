import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  RiHome5Line,
  RiHome5Fill,
  RiSearchLine,
  RiSearchFill,
  RiUser6Fill,
  RiUser6Line,
} from "react-icons/ri";
import { MdOutlineInsertPhoto, MdPhoto } from "react-icons/md";

const BottomNav: React.FC = () => {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <div className="bottom-nav flex justify-center items-center gap-x-32 fixed bottom-0 w-full h-14 bg-violet-700 dark:bg-violet-900 transition duration-500 p-5">
      <div>
        <Link className="text-white font-bold" to="/">
          {pathname == "/" ? (
            <RiHome5Fill fontSize={28} />
          ) : (
            <RiHome5Line fontSize={28} />
          )}
        </Link>
      </div>
      <div>
        <Link className="text-white font-bold" to="/photos">
          {pathname == "/photos" ? (
            <MdPhoto fontSize={28} />
          ) : (
            <MdOutlineInsertPhoto fontSize={28} />
          )}
        </Link>
      </div>
      {/* <div>
        <Link className="text-white font-bold" to="/search">
          {pathname == "/search" ? (
            <RiSearchFill fontSize={28} />
          ) : (
            <RiSearchLine fontSize={28} />
          )}
        </Link>
      </div>
      <div>
        <Link className="text-white font-bold" to="/profile">
          {pathname == "/profile" ? (
            <RiUser6Fill fontSize={28} />
          ) : (
            <RiUser6Line fontSize={28} />
          )}
        </Link>
      </div> */}
    </div>
  );
};

export default BottomNav;

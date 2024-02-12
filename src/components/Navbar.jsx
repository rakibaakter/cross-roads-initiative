import { useState } from "react";
import { MdClose, MdOutlineMenu } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  // for mobile navbar toggle statement
  const [isClose, setIsClose] = useState(true);

  const toggleMenu = () => {
    setIsClose(!isClose);
  };

  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-red-600 font-semibold" : "text-black font-semibold"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-red-600 font-semibold" : "text-black font-semibold"
          }
        >
          About Us
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/courses"
          className={({ isActive }) =>
            isActive ? "text-red-600 font-semibold" : "text-black font-semibold"
          }
        >
          Our Courses
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            isActive ? "text-red-600 font-semibold" : "text-black font-semibold"
          }
        >
          Dashboard
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/sign-in"
          className={({ isActive }) =>
            isActive ? "text-red-600 font-semibold" : "text-black font-semibold"
          }
        >
          Sign In
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 px-4 md:px-8 lg:px-20">
      <div className="navbar-start w-1/3">
        <Link>
          <h2 className="uppercase text-xs md:text-xl lg:text-2xl font-bold md:font-semibold">
            Cr
            <span className="text-red-600">o</span>
            ssRoads Initiative
          </h2>
        </Link>
      </div>
      <div className="navbar-end w-2/3">
        <ul className="menu menu-horizontal hidden md:flex ">{navLinks}</ul>

        {/* for mobile devices */}
        <div className="dropdown md:hidden">
          <button onClick={toggleMenu} className=" lg:hidden">
            {isClose ? (
              <MdOutlineMenu className="swap-off fill-current" size={24} />
            ) : (
              <MdClose className="swap-on fill-current" size={24} />
            )}
          </button>
          <ul
            tabIndex={0}
            className={`menu dropdown-content mt-3 z-[1] py-2 pl-4 w-32 shadow bg-base-100 right-0 ${
              isClose ? "hidden" : ""
            }`}
          >
            {navLinks}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

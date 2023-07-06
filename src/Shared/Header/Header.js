import React, { useContext } from "react";
import logo from "../../assets/logos/Group 1329.png";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider.js";

const Header = () => {
  const { user, logout } = useContext(AuthContext);
  // console.log(user);
const naviaget = useNavigate()
  const handleLogout = () => {
    const agree = window.confirm("Are u sure to log out?");
    if (agree) {
      
      logout()    
      .then(() => {
        naviaget('/')
      })
      .catch((err) => {
        console.log(err);
      });
    }
  };

  return (
    <div className="mb-10 mt-5 grid sm:grid-cols-1">
      <div className="navbar bg-base-100 font-bold   sm:grid-cols-2">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {user?.email === "admin@gmail.com" ? (
                <>
                 <li>
                    <Link to="addEvent">Dash Board</Link>
                  </li>
                  <li>
                    <Link to="addEvent">Add Event</Link>
                  </li>
                  <li>
                    <Link to="/addEvent/userList">User List</Link>
                  </li>
                  <li>
                    <Link className="text-emerald-500 text-xl ">
                      {user?.email}
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link>Home</Link>
                  </li>
                  <li>
                    <Link to="/events">Events</Link>
                  </li>
                  <li>
                    <Link>Donations</Link>
                  </li>
                  <li>
                    <Link>Blog</Link>
                  </li>
                  <li>
                    <Link className="text-emerald-500 text-xl ">
                      {user?.email}
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
          <Link>
            <img className="w-24" src={logo} alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {user?.email === "admin@gmail.com" ? (
              <>
              <li>
                    <Link to="addEvent">Dash Board</Link>
                  </li>
                <li>
                  <Link to="addEvent">Add Event</Link>
                </li>
                <li>
                  <Link to="/addEvent/userList">User List</Link>
                </li>
                <li>
                    <Link className="text-emerald-500 text-xl ">
                      {user?.email}
                    </Link>
                  </li>
              </>
            ) : (
              <>
                <li>
                  <Link>Home</Link>
                </li>
                <li>
                  <Link to="/events">Events</Link>
                </li>
                <li>
                  <Link>Donations</Link>
                </li>
                <li>
                  <Link>Blog</Link>
                </li>
                <li>
                  <Link className="text-emerald-500 text-xl">{user?.email}</Link>
                </li>
              </>
            )}
          </ul>
        </div>
        <div className="navbar-end">
          {user?.email ? (
            <button
              onClick={handleLogout}
              className="btn btn-primary font-bold ml-4 "
            >
              Logout
            </button>
          ) : (
            <>
              <Link to="/register">
                <button className="btn btn-primary font-bold ">Register</button>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;

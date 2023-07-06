import React from "react";
import { Link, Outlet } from "react-router-dom";
import logo from "../../assets/logos/Group 1329.png";
import { FaUsers } from "react-icons/fa";

const AddEvents = () => {
  return (
    <div className=" gap-8">
      <div className=" ">
        <div className="flex justify-center  ">
        <Link to="/">
          <img className="h-14   mt-10 " src={logo} alt="" />
        </Link>
        </div>
        <div className="mt-4">
          <p>
            {/* <p>
              <LuUsers></LuUsers>addEventForm
            </p> */}
            Volunteer register List
          </p>
          <div className="flex  justify-center gap-4">
          <Link to="addEventForm">
            <p className="text-xs text-blue-600 font-bold mt-2">
              <button className="btn text-xs text-blue-600 font-bold">
                + Add event
              </button>
            </p>
          </Link>
          <Link to="/addEvent/userList">
            <p className="text-xs text-blue-600 font-bold mt-2">
              <button className="btn text-xs text-blue-600 font-bold">
                <FaUsers></FaUsers>
                User List
              </button>
            </p>
          </Link>
          </div>
        </div>
      </div>
      <div className="mt-12">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default AddEvents;

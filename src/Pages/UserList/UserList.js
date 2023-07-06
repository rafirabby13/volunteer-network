import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider.js";
import UserListDetails from "./UserListDetails.js";

const UserList = () => {
  const { user } = useContext(AuthContext);
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/userList")
      .then((res) => res.json())
      .then((data) => setUserList(data));
  }, []);

  return (
    <div>
      <div className="overflow-x-auto ">
        <table className="table">
          <thead className='bg-gray-50 border-b-2 border-gray-200'>
            <tr>
              <th >ID</th>
              <th >Name</th>
              <th >email</th>
              <th >Service Name</th>
            </tr>
          </thead>
        </table>
      </div>

      {userList?.map((users) => (
        <UserListDetails key={users?._id} users={users}></UserListDetails>
      ))}
    </div>
  );
};

export default UserList;

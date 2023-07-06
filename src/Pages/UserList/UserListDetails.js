import React from "react";

const UserListDetails = ({users}) => {

    const {_id, name, address, serviceName, email}=users;

  return (
    <div>
      <div className="overflow-x-auto  ">
        <table className="table table-zebra-zebra">
          {/* head */}
          {/* <thead className='bg-gray-50 border-b-2 border-gray-200'>
            <tr>
              <th >ID</th>
              <th >Name</th>
              <th >email</th>
              <th >Service Name</th>
            </tr>
          </thead> */}

          <tbody >
            {/* row 1 */}
            <tr className="bg-gray-50">
               <td>{_id}</td>
               <td>{name}</td>
               <td>{email}</td>
               <td>{serviceName}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserListDetails;

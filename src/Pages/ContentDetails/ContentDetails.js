import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider.js";

const ContentDetails = ({ photos, handleDelete }) => {
  const { user } = useContext(AuthContext);
  //   console.log(photos);
  const { title, img, _id } = photos;
  // console.log(photos);

  // const handleDelete =id=>{
  //   console.log(id);
  //   fetch(`http://localhost:5000/volunteer/${id}`,{
  //     method:'DELETE'
  //   })
  //   .then(res=>res.json())
  //   .then(data=>{
  //     const remainingEvents= data.
  //   })
  // }

  return (
    <div >
      <div className="card card-compact w-66 bg-base-100 shadow-xl mb-4">
        <figure>
          <img className="w-64 h-32 rounded-lg" src={img} alt="" />
        </figure>
        <div className="card-body">
          {title.length > 20 ? <p>{title.slice(0, 20)}</p> : <b><p className="text-emerald-500 ">{title}</p></b>}
          {user?.email === "admin@gmail.com" ? (
            <Link>
              <button
                onClick={() => handleDelete(_id)}
                className="btn btn-error text-white-500 hover:text-white font-bold"
              >
                Delete this event
              </button>
            </Link>
          ) : (
            <Link to={`/checkout/${_id}`}>
              <button className="btn btn-primary">checkout</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContentDetails;

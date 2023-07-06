import React from "react";

const EventsDEtails = ({ events, handleDelete }) => {
  // console.log(events);
  const { img, serviceName, _id, email, address } = events;

  let date = new Date().toUTCString().slice(5, 16);
  return (
    <div>
      <div>
        <div className="card card-side bg-blue-50 shadow-xl h-60 ">
          <figure className="ml-8">
            <img className='h-32 rounded' src={img} alt="Movie" />
          </figure>
          <div className="card-body">
            <div className="text-start">
              <h2 className="card-title text-2xl">{serviceName}</h2>
              <h2>{date}</h2>
            </div>

            <button className="btn btn-error " onClick={() => handleDelete(_id)}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsDEtails;

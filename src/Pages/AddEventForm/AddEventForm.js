import React from "react";
import { Link } from "react-router-dom";

const AddEventForm = () => {
  const handleAddEvent = (e) => {
    e.preventDefault();
    const url = e.target.url.value;
    const des = e.target.des.value;
    const event = {
      url: url,
      des: des,
    };
    console.log(event);
    fetch("http://localhost:5000/addEvent", {
      method: "POST",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(event),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
      
      });
      e.target.reset();
  };
  return (
    <div>
      {/* <h2>Add Event</h2> */}
      <div className="hero mt-3 rounded-xl bg-base-200">
        <div className="hero-content flex-col ">
          <h2 className="text-3xl font-bold">Add Event!</h2>
          <form
            onSubmit={handleAddEvent}
            className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100"
          >
            <div className="card-body">

              <div className="form-control">
                <input
                  // onChange={handleChange}

                  type="text"
                  placeholder="Title"
                  name="des"
                  className="input input-bordered"
                />
                </div>
              <div className="form-control">
                <input
                  // onChange={handleChange}

                  type="url"
                  placeholder="image url"
                  name="url"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary" type="submit">
                  Add Event
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddEventForm;

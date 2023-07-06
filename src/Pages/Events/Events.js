import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider.js";
import EventsDEtails from "../EventDetails/EventsDEtails.js";

const Events = () => {
  const { user } = useContext(AuthContext);
  const [eventData, setEventData] = useState([]);
  // console.log(eventData);z

  useEffect(() => {
    fetch(`http://localhost:5000/checkout?email=${user?.email}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("geniusToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setEventData(data);
      });
  }, [user?.email]);

  const handleDelete = (id) => {
    const agree = window.confirm("Are u sure to delete?");
    if (agree) {
      fetch(`http://localhost:5000/checkout/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            const remainingData = eventData.filter(data=> data._id !== id)
            setEventData(remainingData)
          }
        })
      // console.log(id);
    }
  };

  return (
    <div>
      <h2 className="border-b-4 border-indigo-500 mb-4">
        Your Events: <b className="text-xl text-emerald-500">{user?.email}</b>
      </h2>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-16 h-48 mb-16 mt-16">
        {eventData?.map((events) => (
          <EventsDEtails
            key={events._id}
            events={events}
            handleDelete={handleDelete}
          ></EventsDEtails>
        ))}
      </div>
    </div>
  );
};

export default Events;

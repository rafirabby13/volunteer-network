import React from "react";
import ContentList from "../ContentList/ContentList.js";

const Home = () => {
  return (
    <div>
      {/* <h2>Home</h2> */}
      <h2 className="text-3xl font-bold "><span className="border-b-2 border-indigo-500">I grow by helping people in need.</span></h2>
      
      <div className=" mt-8">
        <label>
          <input
            type="text"
            placeholder="search"
            className="input input-bordered"
          />
          <button className="ml-1 btn btn-active btn-primary">Search</button>
        </label>
      </div>
      <ContentList></ContentList>
    </div>
  );
};

export default Home;

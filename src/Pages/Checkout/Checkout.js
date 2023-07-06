import React, { useContext, useState } from "react";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider.js";

const Checkout = () => {
const [formData, setFormData]=useState({})
const {user}=useContext(AuthContext)
  // console.log(checkoutData);
  const data = useLoaderData();
  // const {title}=data
  // console.log(title);
//   console.log(data);
const navigate = useNavigate()
  

  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(formData);
    e.target.reset();
    // const form = e.target;
    // const name = form.name.value;
    // const address = form.address.value;
    // const age = form.age.value;
    // console.log("data",name, age, address);
    const serviceName=data.title;
    const img=data.img;
    const checkoutData ={
        name: formData.name,
        address: formData.address,
        age: formData.age,
        serviceName:serviceName,
        img:img,
        email:user.email
    }
    console.log(checkoutData);
    fetch('http://localhost:5000/checkout',{
        method:'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(checkoutData)
    })
    .then(res=>res.json())
    .then(data=>console.log(data))
    navigate('/')
}

const handleChange=(e)=>{
    const field = e.target.name;
    const value = e.target.value;
    // console.log(field, value);
    const newValue = {...formData};
    newValue[field]=value;
    setFormData(newValue);
}


  return (
    <div >
      <h2 className="text-2xl uppercase  font-bold">Wants to give the service:-  {data.title}</h2>
      <div className="hero mt-3 rounded-xl bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
      <form onSubmit={handleSubmit} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 ">
            <div className="card-body">
              <div className="form-control">
                
                <input    
                onChange={handleChange}
                  type="text"
                  placeholder="Full Name"
                  name="name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                
                <input    
                onChange={handleChange}

                  type="number"
                  placeholder="Age"
                  name="age"
                  className="input input-bordered"
                  alt=""
                />
              </div>
              <div className="form-control">
                
                <input    
                onChange={handleChange}

                  type="text"
                  placeholder="Address"
                  name="address"
                  className="input input-bordered"
                />
              </div>
              
              
              <div className="form-control mt-6">
                <button className="btn btn-primary">Checkout</button>
              </div>
              
            </div>
            
          </form>
          </div>
            </div>
      
    </div>
  );
};

export default Checkout;

import React, { useContext, useState } from "react";
import logo from '../../assets/logos/Group 1329.png'
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider.js";

const Register = () => {
const [formData, setFormData]=useState({});
const {createUser}=useContext(AuthContext)

const location = useLocation();
const navigate = useNavigate()

let from = location.state?.from?.pathname || "/";

const handleSubmit=(e)=>{
    e.preventDefault();
    // console.log(formData);
    const email=e.target.email.value;
    const password=e.target.password.value;
    console.log(email, password);
    createUser(email, password)
    // .then(res=>res.json())
    .then(data=>console.log(data));
    navigate(from, {replace: true})

    e.target.reset();
}

const handleChange=(e)=>{
    // const field = e.target.name;
    // const value = e.target.value;
    // // console.log(field, value);
    // const newValue = {...formData};
    // newValue[field]=value;
    // setFormData(newValue);
}
  return (
    <div>
        <Link to='/'><img className="h-14 mx-auto mt-10" src={logo} alt="" /></Link>
      <div className="hero mt-3 rounded-xl bg-base-200">
        <div className="hero-content flex-col ">
          <h2 className="text-3xl font-bold">Register Now!</h2>
          <form onSubmit={handleSubmit} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                
                <input    
                // onChange={handleChange}
                  type="text"
                  placeholder="Full Name"
                  name="name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                
                <input    
                onChange={handleChange}

                  type="url"
                  placeholder="Image URL"
                  name="img"
                  className="input input-bordered"
                  alt=""
                />
              </div>
              <div className="form-control">
                
                <input    
                // onChange={handleChange}

                  type="email"
                  placeholder="Email"
                  name="email"
                  className="input input-bordered"
                />
              </div>
              
              <div className="form-control">
                
                <input    
                // onChange={handleChange}

                  type="password"
                  placeholder="Password"
                  name="password"
                  className="input input-bordered"
                />
                
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary" type="submit">Register</button>
              </div>
              <p>Already Have an account? <Link to='/login' className="text-orange-500 underline font-bold text-lg">Login</Link></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;

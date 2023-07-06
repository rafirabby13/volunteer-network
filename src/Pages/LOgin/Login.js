import React, { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import logo from "../../assets/logos/Group 1329.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider.js";
const Login = () => {
  const { googleLogin } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [error, setError]=useState()

  let from = location.state?.from?.pathname || "/";




  const handleLogin=()=>{
    googleLogin()
    .then(res=>{
      const user = res.user;
      console.log(user);
      navigate(from, {replace: true})
    })
    .catch(err=>{
      console.log(err);
      setError(error.message)
    })
  }
      
  
  return (
    
    <div>
      <Link to="/">
        <img className="h-14 mx-auto mt-10" src={logo} alt="" />
      </Link>
      <div className="border-solid border-2 border-indigo-600 my-60 gap-12 rounded-xl">
        <button onClick={handleLogin}>
        <div className="text-base ">
          {" "}
          <FcGoogle></FcGoogle>Continue with Google
        </div>
        </button>
       
      </div>
    </div>
  );
};

export default Login;

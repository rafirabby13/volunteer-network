import React, { useContext, useState } from "react";
import logo from "../../assets/logos/Group 1329.png";

import { AuthContext } from "../../AuthProvider/AuthProvider.js";
import { Link, useLocation, useNavigate } from "react-router-dom";

const LoginWithEmailPass = () => {
  // const [formData, setFormData]=useState({});
  const [error, setError] = useState("");

  const { loginEmailPass } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  let from = location.state?.from?.pathname || "/";

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(formData);
    const email = e.target.email.value;
    const password = e.target.password.value;
    // console.log(email, password);
    loginEmailPass(email, password).then((result) => {
      const user = result.user;
      const currentUser = {
        email: user.email,
      };
      console.log(currentUser);

      // get jwt token
      fetch("http://localhost:5000/jwt", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(currentUser),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("data ", data);
          localStorage.setItem("geniusToken", data.token);
        });
      navigate(from, { replace: true });

      // .catch(error=>{
      //   console.log(error);
      //   setError(error.message)})
    });
    // e.target.reset();
  };

  const handleChange = (e) => {
    // const field = e.target.name;
    // const value = e.target.value;
    // // console.log(field, value);
    // const newValue = {...formData};
    // newValue[field]=value;
    // setFormData(newValue);
  };
  return (
    <div>
      <div>
        <Link to="/">
          <img className="h-14 mx-auto mt-10" src={logo} alt="" />
        </Link>
        <div className=" mt-3 rounded-xl ">
          <div className="hero-content flex-col ">
            <h2 className="text-3xl font-bold">Login Now!</h2>
            <form
              onSubmit={handleSubmit}
              className="card flex-shrink-0 w-full sm:max-w-sm shadow-2xl bg-base-100"
            >
              <div className="card-body">
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
                  <button className="btn btn-primary underline" type="submit">
                    Login
                  </button>
                </div>

                <p>
                  Don't Have an account?{" "}
                  <Link to="/register" className="text-blue-500">
                    Register
                  </Link>
                </p>
                <p className="text-red-500">{error}</p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginWithEmailPass;

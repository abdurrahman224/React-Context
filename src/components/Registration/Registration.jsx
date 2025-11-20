import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";



const Registration = () => {

  const {createUset}  = useContext(AuthContext)

const hendleRegistration = (e) => {
  e.preventDefault()
  const name = e.target.name.value;    
  const email = e.target.email.value;   
  const password = e.target.password.value 
  console.log(name,email,password);

  createUset (email,password)
  .then((result)=>{

    console.log(result.user);
    
  }).catch(error=>{


    console.log("ERROR",error);
    
  })



};



  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={hendleRegistration} className="fieldset">
              <label className="label">Name</label>
              <input type="name" name="name" className="input" placeholder="naem" />
              <label className="label">Email</label>
              <input type="email" name="email" className="input" placeholder="Email" />
              <label className="label">Password</label>
              <input type="password" name="password" className="input" placeholder="Password" />

              <button className="btn btn-neutral mt-4">Registration</button>
              <Link to="/login">
                <div>
                 Login
                </div>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;

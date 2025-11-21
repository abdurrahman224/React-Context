import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Login = () => {
const Nevigate = useNavigate()
  const { sineInfo } = useContext(AuthContext);
  const hendleSinup = (e) => {
    
    e.preventDefault()
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log("Email : ",email ,"Password : ",password);
    
    sineInfo(email, password)
      .then(result => {
        console.log(result.user);
            e.target.reset();
        Nevigate('/');
      })
      .catch(error => {
        console.log('ERROR : ', error);
      });

  }




    return (
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <form onSubmit={hendleSinup} className="fieldset">
                <label className="label">Email</label>
                <input type="email" name='email' className="input" placeholder="Email" />
                <label className="label">Password</label>
                <input
                  type="password"
                  name='password'
                  className="input"
                  placeholder="Password"
                />
                <button className="btn btn-neutral mt-4">Login</button>
                <Link to="/registration">
                  {' '}
                  <div>
                    <a className="link link-hover">Registration</a>
                  </div>
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Login;
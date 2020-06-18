import React from 'react';
import { useForm } from 'react-hook-form';
import loginUser from './loginUser';
import { Redirect, Link } from 'react-router-dom';

function Signin() {
  const { register, handleSubmit } = useForm();

  async function onSubmit (data) {
    await loginUser({ "email": data.email, "password": data.password });
  };

  if (localStorage.getItem('token')) {
    return <Redirect to="/" />
  }

  return (
    <div className="App">
      <div className="line"></div>
      <header className="App-header">
        <h1>RS <span className="header-blue">Lang</span></h1>
      </header>

      <main className="App-main">
        <form onSubmit={handleSubmit(onSubmit)} className="form">
          <input type="email" placeholder = "Email" name = "email" ref = {register} className="input" />
          <input type="password" placeholder = "Password" name = "password" ref = {register}  className="input" />
          <br />
            <button type="submit" className="button" id="button-create">signin</button>
            <Link className="form-link" to="/login">Create account</Link>
        </form>
      </main> 
      
    </div>
  );
}

export default Signin;

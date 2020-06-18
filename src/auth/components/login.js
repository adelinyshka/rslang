import React from 'react';
import { useForm } from 'react-hook-form';
import createUser from './createUser';
import loginUser from './loginUser';
import { Redirect, Link } from 'react-router-dom';

function Login() {
  const { register, handleSubmit, errors } = useForm();

  async function onSubmit (data) {
    await createUser({ "email": data.email, "password": data.password });

    if (localStorage.getItem('id')) {
      await loginUser({ "email": data.email, "password": data.password });
    }
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
          <input type="text" placeholder = "Name" name = "name" ref = { register ({pattern: /(?=.*[a-z])(?=.*[A-Z])[a-zA-Z]{4,}/ }) } className="input" />
          {errors.name && <p className="errors">Min length 4 symbol.</p>}
          <input type="email" placeholder = "Email" name = "email" ref = {register} className="input" />
          <input type="password" placeholder = "Password" name = "password" ref={register({ pattern: /(?=.*[0-9])(?=.*[+-_@$!%*?&#.,;:[\]{}])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z+-_@$!%*?&#.,;:[\]{}]{8,}/ })}  className="input" />
          {errors.password && <p className="errors">Password incorrect.</p>}
          <br />
            <button type="submit" className="button" id="button-create">create account</button>
            <Link className="form-link" to="/signin">Already have an account?</Link>
        </form>
      </main> 
      
    </div>
  );
}

export default Login;

import React, { useState } from 'react';
import { loginUser, createUser } from './loginUser';
import { Redirect, Link } from 'react-router-dom';
import { useDispatch, useStore } from 'react-redux';
import logger from '../actions/logger';

function Signin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = (event) => {
    const user = {
      email,
      password,
    };
  }

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
        <form onSubmit={handleSubmit} className="form">
          <input type="email" placeholder="Email" value={email}
            onChange={(event) => setEmail(event.target.value)} className="input" />
          <input type="password" placeholder="Password" value={password}
            onChange={(event) => setPassword(event.target.value)} className="input" />
          <br />
          <button type="submit" className="button" id="button-create">Войти</button>
          <Link className="form-link" to="/login">Создать аккаунт</Link>
        </form>
      </main>

    </div>
  );
}

export default Signin;

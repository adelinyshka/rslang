import React, { useState } from 'react';
import { loginUser, createUser } from './loginUser';
import { Redirect, Link } from 'react-router-dom';
import { useDispatch, useStore } from 'react-redux';
import logger from '../actions/logger';

function Login() {
  const store = useStore();
  const user = store.getState();
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();
    await createUser({ "email": email, "password": password });

    if (localStorage.getItem('id')) {
      const userData = await loginUser({ "email": email, "password": password });
      dispatch(logger.login(email, userData.token, userData.id));
      console.dir(store.getState());
    }
    // console.dir(user);
  }
  // Почему не выходит из handleSubmit после отправки формы? 
  console.log('123');
  if (user.logged === true) {
    return <Redirect to="/" />
  }

  return (
    <div className="App">
      <div className="line"></div>
      <header className="Auth-header">
        <h1>RS <span className="header-blue">Lang</span></h1>
      </header>

      <main className="Auth-main">
        <form onSubmit={handleSubmit} className="form">
          <input type="text" placeholder="Name" value={name} pattern="[a-zA-Z]{4,}"
            onChange={(event) => setName(event.target.value)} className="input" />
          <input type="email" placeholder="Email" value={email}
            onChange={(event) => setEmail(event.target.value)} className="input" />
          <input type="password" placeholder="Password" value={password}
            pattern="(?=.*[0-9])(?=.*[+-_@$!%*?&#.,;:[\]{}])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z+-_@$!%*?&#.,;:[\]{}]{8,}"
            onChange={(event) => setPassword(event.target.value)} className="input" />
          <button type="submit" className="button" id="button-create">Создать аккаунт</button>
          <Link className="form-link" to="/signin">У меня есть аккаунт</Link>
        </form>
      </main>

    </div>
  );
}

export default Login;

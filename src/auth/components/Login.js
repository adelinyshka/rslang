import React, { useState } from 'react';
import {
  Redirect,
  Link,
} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loggedSelector } from '../redux/selectors';
import { login } from '../redux';
import loginUser from '../utils';
import styles from './Auth.module.css';

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const isLogged = useSelector(loggedSelector);

  const submitHandler = (event) => {
    event.preventDefault();
    loginUser({ 'email': email, 'password': password })
      .then(({ userId, token }) => {
        dispatch(login({ email, token, userId }));
      })
      .catch((er) => console.log(er));
  };

  return (
    <div className={styles.Auth}>
      {isLogged && <Redirect to="/" />}
      <form onSubmit={submitHandler} className={styles.Form}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className={styles.input}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          className={styles.input}
        />
        <button type="submit" className={styles.Button} id="button-create">
          Войти
        </button>
        <Link className={styles.Form_link} to="/signup">Создать аккаунт</Link>
      </form>
    </div>
  );
};

export default Login;

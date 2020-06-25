import React, { useState, useCallback } from 'react';
import {
  Redirect,
  Link,
} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { isAuthenticatedSelector } from '../redux/selectors';
import { login } from '../redux';
import loginUser from '../utils';
import styles from './Auth.module.css';

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const isLogged = useSelector(isAuthenticatedSelector);

  const submitHandler = useCallback((event) => {
    event.preventDefault();
    loginUser({ 'email': email, 'password': password })
      .then(({ userId, token }) => {
        dispatch(login({ email, token, userId }));
      })
      .catch((er) => console.log(er));
  }, [email, password, dispatch]);

  if (isLogged) return <Redirect to="/" />;

  return (
    <div className={styles.Auth}>
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

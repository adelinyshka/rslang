import React, { useState } from 'react';
import {
  Redirect,
  Link,
} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loggedSelector } from '../../redux/selectors';
import { signIn } from '../../redux';
import loginUser from '../../utils';
import styles from './Signin.module.css';

const SignIn = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const isLogged = useSelector(loggedSelector);

  const submitHandler = (event) => {
    event.preventDefault();
    loginUser({ 'email': email, 'password': password })
      .then(({ userId, token }) => {
        dispatch(signIn({ email, token, userId }));
      })
      .catch((er) => console.log(er));
  };

  return (
    <>
      {isLogged && <Redirect to="/" />}
      <form onSubmit={submitHandler} className={styles.form}>
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
        <button type="submit" className={styles.button} id="button-create">
          Войти
        </button>
        <Link className={styles.form_link} to="/signup">Создать аккаунт</Link>
      </form>
    </>
  );
};

export default SignIn;

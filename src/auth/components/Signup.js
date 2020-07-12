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

const createUser = async (user) => {
  const url = 'https://afternoon-falls-25894.herokuapp.com/users';
  const rawResponse = await fetch(url, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  });

  if (rawResponse.status !== 200) {
    throw new Error('Incorrect e-mail or password');
  }

  return true;
};

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const isLogged = useSelector(isAuthenticatedSelector);
  const dispatch = useDispatch();

  const submitHandler = useCallback((event) => {
    event.preventDefault();

    createUser({ 'email': email, 'password': password })
      .then(() => loginUser({ 'email': email, 'password': password }))
      .then(({ userId, token }) => {
        dispatch(login({ email, token, userId }));
      })
      .catch((er) => console.log(er));
  }, [email, password, dispatch]);

  if (isLogged) return <Redirect to="/main" />;

  return (
    <div className={styles.Auth}>
      <form onSubmit={submitHandler} className={styles.Form}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          pattern="[A-Za-z]{1,}"
          onChange={(event) => setName(event.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          // eslint-disable-next-line max-len
          pattern="(?=.*\d)(?=.*[a-z])(?=.*[+\-_@$!%*?&#.,;:[\]{}])(?=.*[A-Z]).{8,}"
          onChange={(event) => setPassword(event.target.value)}
          autoComplete="new-password"
          required
        />
        <p className={styles.PasswordInfo}>
          Пароль должен содержать не менее 8 символов, как минимум одну
          прописную букву,одну заглавную букву, одну цифру и один спецсимвол из
          {'+-_@$!%*?&#.,;:[]{}'}
        </p>
        <button type="submit" className={styles.Button} id="button-create">
          Создать аккаунт
        </button>
        <Link
          className={styles.Link}
          to="/login"
        >
          У меня есть аккаунт
        </Link>
      </form>
    </div>
  );
};

export default Signup;

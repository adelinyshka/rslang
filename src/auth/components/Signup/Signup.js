import React, { useState } from 'react';
import {
  Redirect,
  Link,
} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loggedSelector } from '../../redux/selectors';
import { signIn } from '../../redux';
import loginUser from '../../utils';
import styles from './Signup.module.css';

async function createUser(user) {
  const url = 'https://afternoon-falls-25894.herokuapp.com/users';
  const rawResponse = await fetch(url, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  });

  const { id } = await rawResponse.json();

  if (rawResponse.status === 200) {
    return id;
  }

  throw new Error('Incorrect e-mail or password');
}

function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const isLogged = useSelector(loggedSelector);
  const dispatch = useDispatch();

  const submitHandler = (event) => {
    event.preventDefault();

    createUser({ 'email': email, 'password': password })
      .then(() => loginUser({ 'email': email, 'password': password }))
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
          type="text"
          placeholder="Name"
          value={name}
          pattern="[a-zA-Z]{4,}"
          onChange={(event) => setName(event.target.value)}
          className={styles.input}
        />
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
          pattern="(?=.*[0-9])(?=.*[+-_@$!%*?&#.,;:[\]{}])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z+-_@$!%*?&#.,;:[\]{}]{8,}"
          onChange={(event) => setPassword(event.target.value)}
          className={styles.input}
        />
        <button type="submit" className={styles.button} id="button-create">
        Создать аккаунт
        </button>
        <Link
          className={styles.form_link}
          to="/signin"
        >
          У меня есть аккаунт
        </Link>
      </form>
    </>
  );
}

export default Signup;

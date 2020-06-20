import React, { useState } from 'react';
import {
  Redirect,
  Link,
} from 'react-router-dom';
import styles from './Signin.module.css';

async function loginUser(user) {
  try {
    const url = 'https://afternoon-falls-25894.herokuapp.com/signin';
    const rawResponse = await fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });

    const {
      token,
      userId,
    } = await rawResponse.json();

    if (rawResponse.status === 200) {
      localStorage.setItem('id', userId);
      localStorage.setItem('token', token);

      return { token, id: userId };
    }

    return true;
  } catch (e) {
    return e;
  }
}

function Signin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function submitHandler(event) {
    event.preventDefault();

    await loginUser({ 'email': email, 'password': password });

    if (localStorage.getItem('token')) {
      return <Redirect to="/" />;
    }

    if (localStorage.getItem('token')) {
      setEmail('');
      setPassword('');
    }

    return true;
  }

  if (localStorage.getItem('token')) {
    return <Redirect to="/" />;
  }

  return (
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
        pattern="(?=.*[0-9])(?=.*[+-_@$!%*?&#.,;:[\]{}])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z+-_@$!%*?&#.,;:[\]{}]{8,}"
        onChange={(event) => setPassword(event.target.value)}
        className={styles.input}
      />
      <button type="submit" className={styles.button} id="button-create">
        Войти
      </button>
      <Link className={styles.form_link} to="/signup">Создать аккаунт</Link>
    </form>
  );
}

export { Signin, loginUser };

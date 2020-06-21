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
      return { token, id: userId };
    }
    throw new Error();
  } catch (e) {
    return e;
  }
}

function Signin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogged, setIsLogged] = useState(!!localStorage.getItem('token'));

  const submitHandler = (event) => {
    event.preventDefault();
    loginUser({ 'email': email, 'password': password })
      .then(({ userId, token }) => {
        localStorage.setItem('id', userId);
        localStorage.setItem('token', token);
        setEmail('');
        setPassword('');
        setIsLogged(true);
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
}

export default Signin;

import React, { useState } from 'react';
import {
  Redirect,
  Link,
} from 'react-router-dom';
import { loginUser } from '../Signin/Signin';
import styles from './Signup.module.css';

async function createUser(user) {
  try {
    const url = 'https://afternoon-falls-25894.herokuapp.com/users';
    const rawResponse = await fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });

    const content = await rawResponse.json();

    if (rawResponse.status === 200) {
      localStorage.setItem('email', content.email);
      localStorage.setItem('id', content.id);
    }

    return true;
  } catch (e) {
    return e;
  }
}

function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function submitHandler(event) {
    event.preventDefault();

    await createUser({ 'email': email, 'password': password });

    if (localStorage.getItem('id')) {
      await loginUser({
        'email': email,
        'password': password,
      });
    }

    if (localStorage.getItem('token')) {
      setName('');
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
      <Link className={styles.form_link} to="/signin">У меня есть аккаунт</Link>
    </form>
  );
}

export default Signup;

// import React from 'react';
// import { Redirect } from 'react-router-dom';

const createUser = async (user) => {
  try {
    const rawResponse = await fetch('https://afternoon-falls-25894.herokuapp.com/users', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });
    console.log(rawResponse.status);
    const content = await rawResponse.json();

    if (rawResponse.status === 200) {
      alert('Вы успешно зарегистрировались');
      localStorage.setItem('email', content.email);
      localStorage.setItem('id', content.id);
    }
  } catch (e) {
    alert ('Incorrect!');
    return e;
  }
}

export default createUser;

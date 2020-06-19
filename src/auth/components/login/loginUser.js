const loginUser = async (user) => {
  try {
    const rawResponse = await fetch('https://afternoon-falls-25894.herokuapp.com/signin', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });

    const {
      // email,
      token,
      userId,
    } = await rawResponse.json();

    if (rawResponse.status === 200) {
      localStorage.setItem('id', userId);
      localStorage.setItem('token', token);

      return { token: token, id: userId };
    }
  } catch (e) {
    console.log('problem with sign in');
    alert(e.message);
  }
};

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
      localStorage.setItem('email', content.email);
      localStorage.setItem('id', content.id);
    }
  } catch (e) {
    alert(e.message);
    return e;
  }
}

export { loginUser, createUser };

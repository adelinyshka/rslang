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
      email,
      token,
      userId,
    } = await rawResponse.json();

    if (rawResponse.status === 200) {
      localStorage.setItem('email', email);
      localStorage.setItem('id', userId);
      localStorage.setItem('token', token);
    }
  } catch (e) {
    console.log('problem with sign in');
    alert ('Incorrect!');
  }
};

export default loginUser;

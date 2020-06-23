const loginUser = async (user) => {
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
    return { token, userId };
  }
  throw new Error('Incorrect e-mail or password');
};

export default loginUser;

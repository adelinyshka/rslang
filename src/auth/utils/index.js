const loginUser = async (user) => {
  const url = 'https://afternoon-falls-25894.herokuapp.com/signin';
  const rawResponse = await fetch(url, {
    'method': 'POST',
    'headers': {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    'body': JSON.stringify(user),
  });

  if (rawResponse.status !== 200) {
    throw new Error('Incorrect e-mail or password');
  }
  const {
    token,
    userId,
  } = await rawResponse.json();

  return { token, userId };
};

export default loginUser;

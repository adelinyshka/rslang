// export const createUserWord = async ({
//   userId, wordId, word, token,
// }) => {
//   const rawResponse = await fetch(`https://afternoon-falls-25894.herokuapp.com/users/${userId}/words/${wordId}`, {
//     method: 'POST',
//     withCredentials: true,
//     headers: {
//       'Authorization': `Bearer ${token}`,
//       'Accept': 'application/json',
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(word),
//   });
//   const content = await rawResponse.json();

//   console.log(content);
// };

// export const getUserWords = async ({ userId, token }) => {
//   const rawResponse = await fetch(`https://afternoon-falls-25894.herokuapp.com/users/${userId}/words/`, {
//     method: 'GET',
//     withCredentials: true,
//     headers: {
//       'Authorization': `Bearer ${token}`,
//       'Accept': 'application/json',
//     },
//   });
//   const content = await rawResponse.json();

//   console.log(content);
// };


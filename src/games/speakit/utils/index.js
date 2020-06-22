export const getWords = (level) => {
  const pagesCount = 30;
  const page = Math.ceil(pagesCount * Math.random());
  const url = `https://afternoon-falls-25894.herokuapp.com/words?page=${page}&group=${level}`;
  return fetch(url).then((res) => res.json());
};

export default getWords;

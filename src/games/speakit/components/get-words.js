const getWords = async (level) => {
  const pagesCount = 30;
  const page = Math.ceil(pagesCount * Math.random());
  const url = `https://afternoon-falls-25894.herokuapp.com/words?page=${page}&group=${level}`;
  const res = await fetch(url);
  const json = await res.json();

  return json;
};

export default getWords;

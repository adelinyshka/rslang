export const getWords = (level) => {
  const pagesCount = 30;
  const page = Math.ceil(pagesCount * Math.random());
  const url = 'https://afternoon-falls-25894.herokuapp.com/'
  + `words?page=${page}&group=${level}`;
  return fetch(url)
    .then((res) => res.json())
    .then((words) => (Math.random() > 0.5
      ? words.splice(0, 10)
      : words.splice(10, 19)));
};

export const translater = (text) => {
  const urlTranslate = 'https://translate.yandex.net/api/v1.5/tr.json/'
  + 'translate?key=trnsl.1.1.20200322T155651Z.de98a60e6a99185e.089aea42'
  + `37b51c6db082c966f27a7895cd1e8b44&text= ${text} &lang=en-ru`;
  return fetch(urlTranslate).then((res) => res.json());
};

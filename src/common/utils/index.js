const fetchData = async ({
  method, headers, body, url,
}) => {
  const rawResponse = await fetch(
    `https://afternoon-falls-25894.herokuapp.com/${url}`, {
      method,
      withCredentials: true,
      headers,
      body,
    },
  );
  const content = await rawResponse.json();
  console.log(content);
};

export default fetchData;

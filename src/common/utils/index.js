import { useState, useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const useFetch = (url, options) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    const finalUrl = `https://afternoon-falls-25894.herokuapp.com/${url}`;
    const finalOptions = {
      ...options,
      headers: {
        ...options.headers,
        'withCredentials': true,
        'Accept': 'application/json',
      },
    };
    const fetchData = async () => {
      try {
        const res = await fetch(finalUrl, finalOptions);
        const json = await res.json();
        setResponse(json);
      } catch (er) {
        setError(er);
      }
    };
    fetchData();
  }, [url, options]);
  return { response, error };
};

export default useFetch;

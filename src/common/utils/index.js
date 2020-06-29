import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { userSelector } from '../../auth/redux/selectors';

const useAPI = (url, options = {}, action) => {
  const dispatch = useDispatch();
  const { token } = useSelector(userSelector);
  const [result, setResult] = useState();
  const [error, setError] = useState();
  useEffect(() => {
    const finalUrl = `https://afternoon-falls-25894.herokuapp.com/${url}`;
    const finalOptions = {
      ...options,
      'withCredentials': true,
      'headers': {
        ...options.headers,
        'Accept': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    };

    const fetchData = async () => {
      try {
        const data = await fetch(finalUrl, finalOptions);
        const json = await data.json();
        if (data.status !== 200) throw new Error(data.status);
        action(json);
        setResult(json);
      } catch (er) {
        setError(er);
      }
    };

    fetchData();
  }, [url, options, token, action, dispatch]);
  if (error) console.log(error);
  return result;
};

export default useAPI;

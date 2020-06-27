import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { userSelector } from '../../auth/redux/selectors';

const useFetch = (url, options, action) => {
  const dispatch = useDispatch();
  const { token } = useSelector(userSelector);
  useEffect(() => {
    const finalUrl = `https://afternoon-falls-25894.herokuapp.com/${url}`;
    const finalOptions = {
      ...options,
      headers: {
        ...options.headers,
        'Accept': 'application/json',
        'Authorization': `Bearer ${token}`,
        'withCredentials': true,
      },
    };
    const fetchData = async () => {
      try {
        const data = await fetch(finalUrl, finalOptions);
        const json = await data.json();
        dispatch(action(json));
      } catch (er) {
        console.log(er);
      }
    };
    fetchData();
  }, [url, options, token, action, dispatch]);
};

export default useFetch;

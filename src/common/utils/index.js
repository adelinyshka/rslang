import { useEffect, useState, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { userSelector } from '../../auth/redux/selectors';

export const fetchJSON = async (endpoint, fetchOptions) => {
  const url = `https://afternoon-falls-25894.herokuapp.com/${endpoint}`;
  const data = await fetch(url, fetchOptions);
  const json = await data.json();
  console.log(json);
  if (data.status !== 200) throw new Error(data.status);
  return json;
};

const useAPI = (endpoint, fetchOptions = {}, action, shouldFetch = true) => {
  const dispatch = useDispatch();
  const { token } = useSelector(userSelector);
  const [result, setResult] = useState();
  const [error, setError] = useState();
  const finalOptions = useMemo(() => ({
    'method': 'GET',
    'withCredentials': true,
    'headers': {
      ...fetchOptions.headers,
      'Accept': 'application/json',
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    ...fetchOptions,
  }), [fetchOptions, token]);

  useEffect(() => {
    if (shouldFetch) {
      fetchJSON(endpoint, finalOptions)
        .then((data) => {
          setResult(data);
          if (action) action(data);
        })
        .catch((er) => setError(er));
    }
  }, [endpoint, finalOptions, action, dispatch, shouldFetch]);

  if (error) console.log(error);

  return result;
};

export default useAPI;

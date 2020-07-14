import { useEffect, useState, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { userSelector } from '../../auth/redux/selectors';
import { setShowSpinner, setErrorInfo } from '../redux';

export const fetchJSON = async (endpoint, fetchOptions) => {
  const url = `https://afternoon-falls-25894.herokuapp.com/${endpoint}`;
  const data = await fetch(url, fetchOptions);
  const json = await data.json();
  if (data.status !== 200) throw new Error(data);
  return json;
};

const useAPI = (endpoint, fetchOptions = {}, action, shouldFetch = true) => {
  const dispatch = useDispatch();
  const { token } = useSelector(userSelector);
  const [result, setResult] = useState();

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
      dispatch(setShowSpinner(true));
      fetchJSON(endpoint, finalOptions)
        .then((data) => {
          setResult(data);
          if (action) action(data);
        })
        .catch(() => {
          dispatch(setErrorInfo('Ошибка при сетевом запросе'));
        })
        .finally(() => dispatch(setShowSpinner(false)));
    }
  }, [endpoint, finalOptions, action, dispatch, shouldFetch]);

  return result;
};

export default useAPI;

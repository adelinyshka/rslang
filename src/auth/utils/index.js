import { fetchJSON } from '../../common/utils';

const loginUser = async (user) => {
  const endpoint = 'signin';
  const fetchOptions = {
    'method': 'POST',
    'headers': {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    'body': JSON.stringify(user),
  };
  const result = await fetchJSON(endpoint, fetchOptions);

  return result;
};

export default loginUser;

import React, {
  useState, useCallback, useMemo,
} from 'react';
import PropTypes from 'prop-types';
import useAPI from '../../../../common/utils';

const fetchOptions = {
  method: 'GET',
};

const fetchOptionsUpdate = {
  method: 'PUT',
};

function Statistics({
  setIsStatisticsSend,
  statistics,
}) {
  const [req, setReq] = useState(null);
  const userStatistics = useMemo(
    () => 'users/5f0b3b6a086fce0017f35ea4/statistics', [],
  );

  const action = useCallback((statist) => setReq(statist), []);
  const getStatistics = useAPI(userStatistics, fetchOptions, action);
  const response = fetchOptionsUpdate;

  if (getStatistics) {
    const date = new Date();
    const day = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;

    if (getStatistics.optional.memory[day]) {
      getStatistics.optional.memory[day].timesPlayed += 1;
      getStatistics.optional.memory[day].result += statistics.correct.length;
    } else {
      getStatistics.optional.memory[day] = {};
      getStatistics.optional.memory[day].timesPlayed = 1;
      getStatistics.optional.memory[day].result = statistics.correct.length;
    }

    response.body = JSON.stringify(getStatistics);
  }

  const result = useAPI(userStatistics, response, action);

  if (result) {
    setIsStatisticsSend(true);
  }

  return '';
}

Statistics.propTypes = {
  setIsStatisticsSend: PropTypes.func,
};

Statistics.defaultProps = {
  statistics: () => {},
};

export default Statistics;

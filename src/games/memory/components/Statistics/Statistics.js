import React, {
  useState, useCallback, useMemo,
} from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { fetchJSON } from '../../../../common/utils/index';

import {
  userIdSelector,
  tokenSelector,
} from '../../../../auth/redux/selectors';

const baseStatistic = {
  'learnedWords': 0,
  'optional': {
    'cards': {
    },
    'speakit': {
    },
    'audiocall': {
    },
    'memory': {
    },
    'savannah': {
    },
    'sprint': {
    },
    'puzzle': {
    },
  },
};

const fetchOptionsGet = {
  method: 'GET',
};

function Statistics({
  setIsStatisticsSend,
  statistics,
}) {
  const [req, setReq] = useState(null);
  const userId = useSelector(userIdSelector);
  const token = useSelector(tokenSelector);

  const completeGame = useCallback(() => {
    // setModalResult(true);
    const link = `users/${userId}/statistics`;
    const date = new Date(Date.now());
    const dateString = date.toLocaleDateString('en-Us');
    const getFetchOptions = {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    };

    const promise = fetchJSON(link, getFetchOptions);
    promise
      .then(({ id, ...stats }) => {
        let gameStatistics = {};
        const optionals = stats.optional;

        if (stats.optional.memory) {
          gameStatistics = { ...stats.optional.memory };
        }

        if (gameStatistics[dateString]) {
          gameStatistics[dateString] = {
            'timesPlayed': gameStatistics[dateString].timesPlayed + 1,
            'result': gameStatistics[dateString].result + 10,
          };
        } else {
          gameStatistics[dateString] = {
            'timesPlayed': 1,
            'result': 10,
          };
        }

        const currentStatistics = {
          ...stats,
          optional: {
            ...optionals,
            memory: {
              ...gameStatistics,
            },
          },
        };

        return currentStatistics;
      })
      .then((currentStatistics) => {
        const sendOptions = {
          ...getFetchOptions,
          method: 'PUT',
          body: JSON.stringify(currentStatistics),
        };
        fetchJSON(link, sendOptions);
      })
      .catch(() => {
        const currentStatistics = {
          ...baseStatistic,
        };

        currentStatistics.optional.memory[dateString] = {
          'timesPlayed': 1,
          'result': 10,
        };

        const sendOptions = {
          ...getFetchOptions,
          method: 'PUT',
          body: JSON.stringify(currentStatistics),
        };

        fetchJSON(link, sendOptions);
      });
  }, [token, userId]);

  return (
    <div>Hello</div>
  );
}

Statistics.propTypes = {
  setIsStatisticsSend: PropTypes.func,
};

Statistics.defaultProps = {
  statistics: () => {},
};

export default Statistics;

import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

import ProgressBar from '../ProgressBar/ProgressBar';

const dateToString = (inputDate) => {
  const date = new Date(inputDate);
  return date.toLocaleDateString({}, {
    day: '2-digit', month: '2-digit',
  });
};

const LearningSection = ({
  userWord,
}) => {
  const {
    progressStatus, prevDate, nextDate, repeated,
  } = useMemo(() => userWord.optional, [userWord]);

  return (
    <>
      <div>
        {dateToString(prevDate)}
      </div>
      <div>
        {dateToString(nextDate)}
      </div>
      <div>
        {repeated}
      </div>
      <ProgressBar progressStatus={progressStatus} />
    </>
  );
};

LearningSection.propTypes = {
  userWord: PropTypes.object.isRequired,
};

export default LearningSection;

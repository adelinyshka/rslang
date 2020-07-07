import React from 'react';
import PropTypes from 'prop-types';

import ProgressBar from '../ProgressBar/ProgressBar';

const LearningSection = ({ progressStatus }) => (
  <>
    <div>
        01.09
    </div>
    <div>
        16.09
    </div>
    <div>
        5
    </div>
    <ProgressBar progressStatus={progressStatus} />
  </>
);

LearningSection.propTypes = {
  progressStatus: PropTypes.number.isRequired,
};

export default LearningSection;

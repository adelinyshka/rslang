import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';

const SoundSwitcher = ({ onClick }) => {
  const [soundOn, setSoundOn] = useState(true);

  const onMuteClickHandler = useCallback((mute) => {
    setSoundOn(!mute);
    onClick(!mute);
  }, [onClick]);

  const mutedIcon = (muted) => (
    muted
      ? '/assets/images/common/notification_on.svg'
      : '/assets/images/common/notification_off.svg'
  );

  return (
    <div
      onClick={() => onMuteClickHandler(soundOn)}
    >
      <img
        className="sound"
        src={mutedIcon(soundOn)}
        alt="sound"
      />
    </div>
  );
};

const propTypes = PropTypes;
SoundSwitcher.propTypes = {
  onClick: propTypes.func.isRequired,
};

export default SoundSwitcher;

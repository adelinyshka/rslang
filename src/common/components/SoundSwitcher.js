import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';

const audioRight = new Audio('/assets/audio/right.mp3');
const audioWrong = new Audio('/assets/audio/wrong.mp3');

const SoundSwitcher = ({ onClick }) => {
  const [isMuted, setIsMuted] = useState(true);

  const onMuteClickHandler = useCallback((mute) => {
    setIsMuted(!mute);
    onClick(!mute);
  }, [onClick]);

  return (
    <>
      {
        isMuted
          ? (
            <div
              onClick={() => onMuteClickHandler(isMuted)}
            >
              <img
                className="sound"
                src="/assets/images/common/notification_on.svg"
                alt="sound"
              />
            </div>
          )
          : (
            <div
              onClick={() => onMuteClickHandler(isMuted)}
            >
              <img
                className="sound"
                src="/assets/images/common/notification_off.svg"
                alt="sound"
              />
            </div>
          )
      }

    </>
  );
};

const propTypes = PropTypes;
SoundSwitcher.propTypes = {
  onClick: propTypes.func.isRequired,
};

export {
  SoundSwitcher, audioRight, audioWrong,
};

import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';

const SoundSwitcher = ({ onClick }) => {
  const [isMuted, setIsMuted] = useState(true);

  const onMuteClickHandler = useCallback((mute) => {
    setIsMuted(!mute);
    onClick(!mute);
  }, []);

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
                src="/assets/images/savannah/notification_on.svg"
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
                src="/assets/images/savannah/notification_off.svg"
                alt="sound"
              />
            </div>
          )
      }

    </>
  );
};

SoundSwitcher.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default SoundSwitcher;

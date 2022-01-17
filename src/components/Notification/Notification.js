import React, { useEffect, useState } from 'react';

import './Notification.css';

const Notification = ({ id, message, type, dropMessage }) => {
  const [exit, setExit] = useState(false);
  const [width, setWidth] = useState(0);
  const [intervalID, setIntervalID] = useState(null);

  const handleStartTimer = () => {
    const id = setInterval(() => {
      setWidth(prev => {
        if (prev < 100) {
          return prev + 0.5;
        }

        clearInterval(id);
        return prev;
      });
    }, 20);

    setIntervalID(id);
  };

  const handlePauseTimer = () => {
    clearInterval(intervalID);
  };

  const handleCloseNotification = () => {
    handlePauseTimer();
    setExit(true);
    setTimeout(() => {
      //dropMessage(id);
    }, 400);
  };

  useEffect(() => {
    if (width === 100) {
      // Close notification
      handleCloseNotification();
    }
  }, [width]);

  useEffect(() => {
    handleStartTimer();
  }, []);

  return (
    <div
      onMouseEnter={handlePauseTimer}
      onMouseLeave={handleStartTimer}
      className={`notification-item ${type === 'SUCCESS' ? 'success' : 'error'} ${
        exit ? 'exit' : ''
      }`}
    >
      <p>{message}</p>
      <div className={'bar'} style={{ width: `${width}%` }} />
    </div>
  );
};

export default Notification;

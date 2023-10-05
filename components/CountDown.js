import React, { useState, useEffect } from 'react';

function CountdownTimer({ endTime }) {
  const [timeRemaining, setTimeRemaining] = useState(endTime - Math.floor(Date.now() / 1000));

  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentTime = Math.floor(Date.now() / 1000);
      const remaining = endTime - currentTime;
      
      if (remaining <= 0) {
        clearInterval(intervalId);
        setTimeRemaining(0);
      } else {
        setTimeRemaining(remaining);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [endTime]);

  const seconds = timeRemaining % 60;
  const minutes = Math.floor(timeRemaining / 60) % 60;
  const hours = Math.floor(timeRemaining / 3600);

  return (
    <div>
      <p>Time Remaining: {hours}h {minutes}m {seconds}s</p>
    </div>
  );
}

export default CountdownTimer;

import { useState, useEffect } from 'react';

function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({});
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    if (isRunning) {
      const targetTime = new Date();
      targetTime.setHours(targetTime.getHours() + 12); // Set target time 12 hours from now
      targetTime.setMinutes(0);
      targetTime.setSeconds(0);
      localStorage.setItem('targetTime', targetTime);
      setTimeLeft(calculateTimeLeft(targetTime));

      const timer = setInterval(() => {
        const difference = new Date(targetTime) - new Date();
        if (difference > 0) {
          setTimeLeft(calculateTimeLeft(targetTime));
        } else {
          clearInterval(timer);
          setTimeLeft({});
          setIsRunning(false);
          localStorage.removeItem('targetTime');
        }
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [isRunning]);

  function calculateTimeLeft(targetTime) {
    const now = new Date();
    const difference = targetTime - now;
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        hours: Math.floor(difference / (1000 * 60 * 60)),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }

    return timeLeft;
  }

  return (
    <div>
      <div>
        <p className='text-xl text-center'>{timeLeft.hours} hours {timeLeft.minutes} minutes {timeLeft.seconds} seconds</p>
      </div>
    </div>
  );
}

export default CountdownTimer;

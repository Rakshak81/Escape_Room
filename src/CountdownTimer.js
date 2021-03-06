import React from 'react';
import { useCountdown } from './hooks/useCountdown';
import DateTimeDisplay from './DateTimeDisplay';
import "./components/room.css";


const ExpiredNotice = () => {
  
  function refreshPage() {
    window.location.reload(false);
  }
  return (
    <>
      <div className="endgame-popup"> </div>    

      <div className="expired-notice">
        <span>Time's Up!</span>
        <button className="button button1" onClick={refreshPage}>Try Again?</button>
      </div>
    </>
  );
};

const ShowCounter = ({ minutes, seconds }) => {
  return (
    <div className="show-counter">
        <DateTimeDisplay value={minutes} type={'Mins'} isDanger={minutes <= 0.5} />
        <p>:</p>
        <DateTimeDisplay value={seconds} type={'Seconds'} isDanger={minutes <= 0.5} />
    </div>
  );
};

const CountdownTimer = ({ targetDate }) => {
  const [minutes, seconds] = useCountdown(targetDate);

  if (minutes + seconds <= 0) {
    return <ExpiredNotice />;
  } else {
    return (
      <ShowCounter
        minutes={minutes}
        seconds={seconds}
      />
    );
  }
};

export default CountdownTimer;

import '../common/cards.css'; 
import React, { useEffect, useState } from "react";


const TimerCmp = () => {
 
     const weddingDate = new Date("2024-02-17T17:30:00");
      const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

      function calculateTimeRemaining() {
        const now = new Date();
        const difference = weddingDate - now;
    
        if (difference > 0) {
          const days = Math.floor(difference / (1000 * 60 * 60 * 24));
          const hours = Math.floor(
            (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          );
          const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
          const seconds = Math.floor((difference % (1000 * 60)) / 1000);
    
          return { days, hours, minutes, seconds };
        } else {
          return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }
      }
    
      useEffect(() => {
        const interval = setInterval(() => {
          setTimeRemaining(calculateTimeRemaining());
        }, 1000);
    
        return () => clearInterval(interval);
      }, []);

      return (
        <div className="counter" >
          <h3 className='counter-head'>आतुरता लग्नाची..।।</h3>
          <div className="timer">
            <div>
              <button className="button-40" role="button">
                <span className="text">{timeRemaining.days}</span>
              </button>
              <p>दिवस</p>
            </div>
            <div>
              <button className="button-40" role="button">
                <span className="text">{timeRemaining.hours}</span>
              </button>
              <p>तास</p>
            </div>
            <div>
              <button className="button-40" role="button">
                <span className="text">{timeRemaining.minutes}</span>
              </button>
              <p>मिनटं</p>
            </div>
            <div>
              <button className="button-40" role="button">
                <span className="text">{timeRemaining.seconds}</span>
              </button>
              <p>सेकंद</p>
            </div>
          </div>
        </div>
      );


};
export default TimerCmp;


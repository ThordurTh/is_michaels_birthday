"use client";
import { countDownDateAndTime } from "countdown-date-time";
import { useEffect, useState, useRef } from "react";

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({});
  const timerRef = useRef(null);

  const currentYear = new Date().getFullYear();
  const conduct_date = `${currentYear + 1}-04-19 00:00:00`;

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setTimeLeft(countDownDateAndTime(conduct_date));
    }, 1000);
    return () => clearInterval(timerRef.current);
  });

  return (
    <div id="countdown">
      <ul>
        <li>
          <span>{timeLeft.days}</span>
          <span>days</span>
        </li>
        <li>
          <span>{timeLeft.hours}</span>
          <span>hours</span>
        </li>
        <li>
          <span>{timeLeft.minutes}</span>
          <span>minutes</span>
        </li>
        <li>
          <span>{timeLeft.seconds}</span>
          <span>seconds</span>
        </li>
      </ul>
    </div>
  );
}

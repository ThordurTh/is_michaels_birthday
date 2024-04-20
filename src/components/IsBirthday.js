"use client";
import Confetti from "@/components/Confetti";
import CountdownComponent from "@/components/Countdown";

export default function IsBirthday() {
  function isApril19() {
    let currentDate = new Date();
    return currentDate.getMonth() === 3 && currentDate.getDate() === 19;
  }

  return (
    <>
      {isApril19() ? (
        <>
          <h1>Happy birthday!</h1>
          <div class="emoji">
            <span>🥳</span>
            <span>🎉</span>
            <span>🎂</span>
          </div>
          <Confetti />
        </>
      ) : (
        <>
          <h1>Birthday in:</h1>
          <CountdownComponent />
        </>
      )}
    </>
  );
}

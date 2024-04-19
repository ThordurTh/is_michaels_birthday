import Confetti from "@/components/Confetti";
import Countdown from "@/components/Countdown";
import Image from "next/image";

export default function Home() {
  function isApril19() {
    let currentDate = new Date();
    return currentDate.getMonth() === 3 && currentDate.getDate() === 19;
  }
  function daysUntilApril19() {
    var currentDate = new Date();
    var targetDate = new Date(currentDate.getFullYear(), 3, 19); // April is 3 because months are zero-based

    // If the target date has passed this year, set it to next year
    if (currentDate > targetDate) {
      targetDate.setFullYear(targetDate.getFullYear() + 1);
    }

    var timeDifference = targetDate.getTime() - currentDate.getTime();
    var daysDifference = Math.ceil(timeDifference / (1000 * 3600 * 24));

    return daysDifference;
  }
  daysUntilApril19();

  return (
    <main>
      {/* <h1>Is it Michael&apos;s Birthday?</h1> */}
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
          <Countdown />
        </>
      )}
    </main>
  );
}

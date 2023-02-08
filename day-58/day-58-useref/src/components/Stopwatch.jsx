import { useRef, useState } from "react";

export default function StopWatch() {
  const [now, setNow] = useState(0);
  const [startTime, setStartTime] = useState(0);
  const timerRef = useRef(0);

  const handleStart = () => {
    setStartTime(Date.now());
    timerRef.current = setInterval(() => {
      setNow(Date.now());
    }, 1000);
  };

  const handleStop = () => {
    clearInterval(timerRef.current);
  };

  const timer = Math.floor(now - startTime < 0 ? 0 : (now - startTime) / 1000);

  return (
    <div>
      <h1>{timer}</h1>
      <button onClick={() => handleStart()}>Start</button>
      <button onClick={() => handleStop()}>Stop</button>
    </div>
  );
}

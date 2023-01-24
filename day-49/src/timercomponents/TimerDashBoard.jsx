import timerData from "../data/data";
import Timer from "./Timer";
import { useState } from "react";
import { useEffect } from "react";
import TimerForm from "./TimerForm";

export default function TimerDashboard() {
  console.log(timerData);
  const [timers, setTimers] = useState([]);
  const [runningTime, setRunningTime] = useState(0);

  useEffect(() => {
    setTimers(timerData);
  }, [timers]);

  return (
    <div>
      <h1>Timers</h1>
      {timers &&
        timers.map((data, index) => {
          return (
            <Timer
              key={index}
              project={data.project}
              title={data.title}
              elapsed={data.elapsed}
              runningSince={data.runningSince}
              runningTime={runningTime}
            />
          );
        })}
      <TimerForm title={"Title"} project={"Project"} />;
    </div>
  );
}

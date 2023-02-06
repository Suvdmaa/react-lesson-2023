import { useEffect, useState } from "react";
import { newTimer } from "./Helpers";
import EditableTimerList from "./EditableTimerList";
import ToggleableTimerForm from "./ToggleableTimerForm.jsx";
import projects from "../data/data.js";

export default function TimersDashboard() {
  const [timers, setTimers] = useState({ timers: [] });

  const URL = "http://localhost:8080/timers";

  useEffect(() => {
    fetchTimersData();
  }, []);

  // useEffect(() => {
  //   setInterval(() => setTimers({ timers: projects }), 1000);
  // }, []);

  async function fetchTimersData() {
    const FETCHED_DATA = await fetch(URL);
    const FETCHED_JSON = await FETCHED_DATA.json();
    console.log(FETCHED_JSON);
    setTimers({ timers: FETCHED_JSON.data });
  }

  async function handleCreateFormSubmit(timer) {
    createTimer(timer);
    const postData = {
      id: timer.target.id.value,
      project: timer.target.project.value,
      title: timer.target.title.value,
    };
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    };
    const FETCHED_DATA = await fetch(URL, options);
    const FETCHED_JSON = await FETCHED_DATA.json();
    setTimers(FETCHED_JSON.data);
  }

  async function handleEditFormSubmit(attrs) {
    updateTimer(attrs);
  }

  async function handleTrashClick(timerId) {
    deleteTimer(timerId);
    const options = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        timerId: timerId,
      }),
    };
    const FETCHED_DATA = await fetch(URL, options);
    const FETCHED_JSON = await FETCHED_DATA.json();
    setTimers({ timers: FETCHED_JSON.data });
  }

  function handleStartClick(timerId) {
    startTimer(timerId);
  }

  function handleStopClick(timerId) {
    stopTimer(timerId);
  }

  async function createTimer(timer) {
    const t = newTimer(timer);
    // setTimers({ timers: timers.timers.concat(t) });
    console.log(t.id);
    console.log(t.title);
    const postData = {
      id: t.id,
      project: t.project,
      title: t.title,
      elapsed: t.elapsed,
    };
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    };
    const FETCHED_DATA = await fetch(URL, options);
    const FETCHED_JSON = await FETCHED_DATA.json();
    setTimers(FETCHED_JSON.data);
  }

  function startTimer(timerId) {
    const now = Date.now();
    setTimers({
      timers: timers.timers.map((timer) => {
        if (timer.id === timerId) {
          console.log(timer);
          timer.runningSince = now;
          return timer;
        } else {
          return timer;
        }
      }),
    });
  }

  function stopTimer(timerId) {
    const now = Date.now();

    setTimers({
      timers: timers.timers.map((timer) => {
        if (timer.id === timerId) {
          const lastElapsed = now - timer.runningSince;
          timer.elapsed = timer.elapsed + lastElapsed;
          timer.runningSince = null;
        }
        return timer;
      }),
    });
  }

  async function updateTimer(attrs) {
    const putData = {
      id: attrs.id,
      project: attrs.project,
      title: attrs.title,
      elapsed: attrs.elapsed,
    };
    const options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(putData),
    };
    const FETCHED_DATA = await fetch(URL, options);
    const FETCHED_JSON = await FETCHED_DATA.json();
    console.log(FETCHED_JSON);
    setTimers({ timers: FETCHED_JSON.data });
  }

  function deleteTimer(timerId) {
    setTimers({
      timers: timers.timers.filter((t) => t.id !== timerId),
    });
  }

  return (
    <div>
      <h1>Timers</h1>
      {timers.timers && (
        <div>
          <EditableTimerList
            timers={timers.timers}
            onFormSubmit={handleEditFormSubmit}
            onTrashClick={handleTrashClick}
            onStartClick={handleStartClick}
            onStopClick={handleStopClick}
          />
          <ToggleableTimerForm onFormSubmit={handleCreateFormSubmit} />
        </div>
      )}
    </div>
  );
}

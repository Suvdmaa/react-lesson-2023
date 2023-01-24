import { Container, Card, Typography, Box } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
import TimerActionButton from "./TimerActionButton";
import { useState } from "react";
import { renderElapsedString } from "./Helpers";
import { useEffect } from "react";

export default function Timer({
  title,
  project,
  elapsed,
  runningSince,
  runningTime,
}) {
  const [timerIsRunning, setTimerIsRunning] = useState(false);
  const timer = renderElapsedString(elapsed, runningSince);
  const [runningInterval, setRunningInterval] = useState(null);
  const [now, setNow] = useState(null);

  //   setInterval(() => {setRunningInterval(runningInterval + 1)}, 1000);

  function handleStart() {
    setRunningInterval(Date.now());
    setNow(Date.now());

    let interval = null;

    if (!timerIsRunning) {
      interval = setInterval(() => {
        setNow(Date.now());
      }, 10);
    } else {
      clearInterval(interval);
    }
  }

  let secondsPassed = 0;
  if (runningInterval != null && now != null) {
    secondsPassed = (now - runningInterval) / 1000;
  }

  return (
    <Container maxWidth="sm">
      <Card sx={{ maxWidth: 345, marginBottom: 5 }}>
        <Typography sx={{ fontSize: 28 }} color="text.secondary">
          {title}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {project}
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1>{secondsPassed.toFixed(3)}</h1>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1>{timer}</h1>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <DeleteIcon />
          <AutoFixHighIcon />
        </Box>
        <TimerActionButton
          isTimerRunning={timerIsRunning}
          onStartClick={() => {
            setTimerIsRunning(true);
            handleStart();
          }}
          onStopClick={() => {
            setTimerIsRunning(false);
            handleStart();
          }}
        />
      </Card>
    </Container>
  );
}

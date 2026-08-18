import { formatDuration, type TimerState } from "../../hooks/useTimer";
import "./Timer.css";

type TimerProps = {
  timer: TimerState;
};

export function Timer({ timer }: TimerProps) {
  const isCountdown = timer.remainingSeconds !== null;
  const display = isCountdown ? formatDuration(timer.remainingSeconds!) : formatDuration(timer.elapsedSeconds);

  return (
    <div className={`timer${timer.expired ? " timer--expired" : ""}`}>
      <span className="timer__label">{isCountdown ? "Time Remaining" : "Time Elapsed"}</span>
      <span className="timer__value">{display}</span>
    </div>
  );
}

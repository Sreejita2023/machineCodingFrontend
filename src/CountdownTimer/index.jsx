import React, { useState, useRef, useEffect } from "react";
import "./index.css";

function Index() {
  const [hours, setHours] = useState("");
  const [minutes, setMinutes] = useState("");
  const [seconds, setSeconds] = useState("");
  const [isRunning, setIsRunning] = useState(false);
  const [paused, setPaused] = useState(false);
  const intervalRef = useRef(null);

  // 🔁 Refs to store latest time values
  const hRef = useRef(0);
  const mRef = useRef(0);
  const sRef = useRef(0);

  useEffect(() => {
    hRef.current = parseInt(hours) || 0;
    mRef.current = parseInt(minutes) || 0;
    sRef.current = parseInt(seconds) || 0;
  }, [hours, minutes, seconds]);

  const formatTime = () => {
    let h = hRef.current;
    let m = mRef.current;
    let s = sRef.current;

    if (s > 60) {
      m += Math.floor(s / 60);
      s = s % 60;
    }
    if (m > 60) {
      h += Math.floor(m / 60);
      m = m % 60;
    }

    setHours(h);
    setMinutes(m);
    setSeconds(s);
    hRef.current = h;
    mRef.current = m;
    sRef.current = s;
  };

  const handleStart = () => {
    if ((+hours === 0 && +minutes === 0 && +seconds === 0) || isRunning) return;

    formatTime();
    setIsRunning(true);
    setPaused(false);

    intervalRef.current = setInterval(() => {
      updateTimer();
    }, 1000);
  };

  const updateTimer = () => {
    let h = hRef.current;
    let m = mRef.current;
    let s = sRef.current;

    if (h === 0 && m === 0 && s === 0) {
      clearInterval(intervalRef.current);
      setIsRunning(false);
      return;
    }

    if (s > 0) {
      s--;
    } else if (m > 0) {
      m--;
      s = 59;
    } else if (h > 0) {
      h--;
      m = 59;
      s = 59;
    }

    hRef.current = h;
    mRef.current = m;
    sRef.current = s;

    setHours(h);
    setMinutes(m);
    setSeconds(s);
  };

  const handlePause = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
    setPaused(true);
  };

  const handleReset = () => {
    clearInterval(intervalRef.current);
    setHours("");
    setMinutes("");
    setSeconds("");
    setIsRunning(false);
    setPaused(false);
  };

  const pad = (num) => String(num).padStart(2, "0");

  return (
    <div className="container">
      <h2>Countdown Timer</h2>

      <div className="inputs">
        <input
          type="number"
          placeholder="00"
          maxLength="2"
          value={hours}
          onChange={(e) => setHours(e.target.value.slice(0, 2))}
        />
        <span>:</span>
        <input
          type="number"
          placeholder="00"
          maxLength="2"
          value={minutes}
          onChange={(e) => setMinutes(e.target.value.slice(0, 2))}
        />
        <span>:</span>
        <input
          type="number"
          placeholder="00"
          maxLength="2"
          value={seconds}
          onChange={(e) => setSeconds(e.target.value.slice(0, 2))}
        />
      </div>

      <div className="btns">
        {!isRunning ? (
          <button onClick={handleStart}>{paused ? "Continue" : "Start"}</button>
        ) : (
          <button onClick={handlePause}>Pause</button>
        )}
        <button onClick={handleReset}>Reset</button>
      </div>

      {(isRunning || paused) && (
        <div className="countdown">
          ⏳ {pad(hours)}:{pad(minutes)}:{pad(seconds)}
        </div>
      )}
    </div>
  );
}

export default Index;

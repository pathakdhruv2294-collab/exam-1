import { useEffect, useState } from "react";

function App() {
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);
  const [target, setTarget] = useState(10);

  useEffect(() => {
    if (!running) {
      return;
    }

    const timer = setInterval(() => {
      setSeconds((oldSeconds) => {
        if (oldSeconds + 1 >= target) {
          playSound();
          setRunning(false);
          return oldSeconds + 1;
        }

        return oldSeconds + 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [running, target]);

  function playSound() {
    const audio = new Audio(
      "https://www.soundjay.com/buttons/sounds/button-3.mp3"
    );

    audio.play();
  }

  function startStop() {
    setRunning(!running);
  }

  function reset() {
    setRunning(false);
    setSeconds(0);
  }

  return (
    <div>
      <h1>React Stopwatch</h1>

      <h2>{seconds} seconds</h2>

      <label>Target Time: </label>
      <input
        type="number"
        value={target}
        onChange={(e) => setTarget(Number(e.target.value))}
      />

      <br /><br />

      <button onClick={startStop}>
        {running ? "Stop" : "Start"}
      </button>

      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default App;
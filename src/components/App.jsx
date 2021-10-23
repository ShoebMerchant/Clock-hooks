import React, { useState } from "react";

let time = new Date().toLocaleTimeString();

function App() {
  const [timeToDisplay, setTime] = useState(time);

  function updateTime() {
    const newTime = new Date().toLocaleTimeString();
    setTime(newTime);
  }
  setInterval(updateTime, 1000);

  return (
    <div className="container">
      <h1>{timeToDisplay}</h1>
      <button onClick={updateTime}>Get Time</button>
    </div>
  );
}

export default App;

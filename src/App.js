import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [pushups, setPushups] = useState(0);
  const [dailyPushups, setDailyPushups] = useState(0);

  const handlePushupChange = (e) => {
    setDailyPushups(Number(e.target.value));
  };

  const handlePushupSubmit = () => {
    setPushups((prevPushups) => prevPushups + dailyPushups);
    setDailyPushups(0);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Pushup Tracker</h1>
        <p>Total Pushups: {pushups}</p>
        <div className="pushup-form">
          <input
            type="number"
            value={dailyPushups}
            onChange={handlePushupChange}
            min="0"
            placeholder="Enter your daily pushup count"
          />
          <button onClick={handlePushupSubmit}>Log Pushups Nitro</button>
          
          <br />
          <input
            type="number"
            value={dailyPushups}
            onChange={handlePushupChange}
            min="0"
            placeholder="Enter your daily pushup count"
          />
          <button onClick={handlePushupSubmit}>Log Pushups Neca</button>
        </div>
      </header>
    </div>
  );
};

export default App;

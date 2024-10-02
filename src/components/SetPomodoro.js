import React, { useContext, useState } from "react";
import { SettingsContext } from "../context/SettingsContext";

const SetPomodoro = () => {
  const [newTimer, setNewTimer] = useState({
    work: 0.2,
    short: 0.1,
    long: 0.5,
    active: "work",
  });

  const { updateExecute } = useContext(SettingsContext);

  const handleChange = (input) => {
    const { name, value } = input.target;
    const validatedValue = Math.max(0, parseInt(value));

    switch (name) {
      case "work":
        setNewTimer({
          ...newTimer,
          work: validatedValue,
        });
        break;
      case "shortBreak":
        setNewTimer({
          ...newTimer,
          short: validatedValue,
        });
        break;
      case "longBreak":
        setNewTimer({
          ...newTimer,
          long: validatedValue,
        });
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateExecute(newTimer);
  };

  return (
    <div className="form-container">
      <form noValidate onSubmit={handleSubmit}>
        <div className="input-wrapper">
          <input
            className="input"
            type="number"
            name="work"
            onChange={handleChange}
            value={newTimer.work}
            min="0"
          />
          <input
            className="input"
            type="number"
            name="shortBreak"
            onChange={handleChange}
            value={newTimer.short}
            min="0"
          />
          <input
            className="input"
            type="number"
            name="longBreak"
            onChange={handleChange}
            value={newTimer.long}
            min="0"
          />
        </div>
        <button type="submit">Set Timer</button>
      </form>
    </div>
  );
};

export default SetPomodoro;

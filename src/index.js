import React, { useState } from "react";
import ReactDOM from "react-dom";

function App() {
  const initialSubscribe = true;

  return (
    <Toggle
      render={(toggle, on) => <Subscribe toggleCheck={toggle} checked={on} />}
    />
  );
}

function Subscribe({ toggleCheck, checked }) {
  const [subscribe, setSubscribe] = useState(true);

  function handleChange(toggleCheck) {
    toggleCheck();
    console.log(checked);
  }

  return (
    <>
      <input type="checkbox" onChange={() => handleChange(toggleCheck)} />{" "}
      Subscribe to newsletter
    </>
  );
}

function Toggle({ render, initialValue = false }) {
  const [on, setOn] = useState(initialValue);

  return <>{render(() => setOn(!on), on)}</>;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

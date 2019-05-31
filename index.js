import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

function App() {
  const [subscribe, setSubscribe] = useState(false);

  function changeSubscription(on) {
    setSubscribe(on);
  }

  function save(event) {
    event.preventDefault();
    console.log(`Let's save subscribe: ${subscribe}`);
  }

  function renderCheckbox(toggle, on) {
    return (
      <>
        <input type="checkbox" onChange={toggle} />
        Subscribe to newsletter
      </>
    );
  }

  return (
    <form onSubmit={save}>
      <Toggle render={renderCheckbox} onToggle={changeSubscription} />
      <br />
      <button type="submit">Save</button>
    </form>
  );
}

function Toggle({ render, onToggle }) {
  const [on, setOn] = useState(false);

  useEffect(
    () => {
      if (onToggle) onToggle(on);
    },
    [on]
  );

  return <>{render(() => setOn(on => !on), on)}</>;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

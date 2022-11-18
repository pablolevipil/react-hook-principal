import { useState } from "react";

function useActive(initialState = false) {
  const [active, setActive] = useState(initialState);
  const handleToggle = () => setActive(!active);
  const handleFalse = () => setActive(false);
  const handleTrue = () => setActive(true);

  return [
    active,
    {
      handleToggle,
      handleFalse,
      handleTrue,
    },
  ];
}

function App() {
  const [active, { handleToggle, handleFalse, handleTrue }] = useActive();

  return (
    <div>
      <button onClick={ () => handleToggle() }>Toggle</button>
      <button onClick={ () => handleTrue() }>true</button>
      <button onClick={ () => handleFalse() }>false</button>
      {active.toString()}
      <ShowInfo />
    </div>
  );
}

function ShowInfo() {
  const [active, { handleToggle }] = useActive(false);

  return (
    <div style={{ background: "#000", color: "white", marginTop: "10px" }}>
      <button onClick={() => handleToggle()}>show / hide</button>

      {active && (
        <div>
          <h1>User Info</h1>
        </div>
      )}
    </div>
  );
}

export default App

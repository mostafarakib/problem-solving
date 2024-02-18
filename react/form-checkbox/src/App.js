import "./App.css";
import { useState } from "react";

function App() {
  const [status, setStatus] = useState({
    check1: false,
    check2: false,
    check3: false,
    check4: false,
  });
  console.log(status);
  return (
    <div className="App">
      <input
        type="checkbox"
        id="all"
        checked={
          status.check1 && status.check2 && status.check3 && status.check4
        }
        onChange={() => {
          if (
            !status.check1 ||
            !status.check2 ||
            !status.check3 ||
            !status.check4
          ) {
            setStatus({
              check1: true,
              check2: true,
              check3: true,
              check4: true,
            });
          } else {
            setStatus({
              check1: !status.check1,
              check2: !status.check2,
              check3: !status.check3,
              check4: !status.check4,
            });
          }
        }}
      />
      <label htmlFor="all">Select All</label>
      <br />
      <input
        type="checkbox"
        id="check1"
        checked={status.check1}
        onChange={() => {
          setStatus({ ...status, check1: !status.check1 });
        }}
      />
      <label htmlFor="check1">1</label>
      <br />
      <input
        type="checkbox"
        id="check2"
        checked={status.check2}
        onChange={() => {
          setStatus({ ...status, check2: !status.check2 });
        }}
      />
      <label htmlFor="check2">2</label>
      <br />
      <input
        type="checkbox"
        id="check3"
        checked={status.check3}
        onChange={() => {
          setStatus({ ...status, check3: !status.check3 });
        }}
      />
      <label htmlFor="check3">3</label>
      <br />
      <input
        type="checkbox"
        id="check4"
        checked={status.check4}
        onChange={() => {
          setStatus({ ...status, check4: !status.check4 });
        }}
      />
      <label htmlFor="check4">4</label>
    </div>
  );
}

export default App;

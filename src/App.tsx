import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [colour, setColour] = useState("");

  const onclick = async () => {
    let [tab] = await chrome.tabs.query({ active: true });
    chrome.scripting.executeScript<string[], void>({
      target: { tabId: tab.id! },
      func: (colour) => {
        document.body.style.backgroundColor = colour;
      },
      args: [colour],
    });
  };

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Page Color Changer</h1>
      <div>
        <p>Change your page background colour</p>
      </div>
      <div className="card">
        <input
          type="color"
          onChange={(e) => setColour(e.currentTarget.value)}
          value={colour}
        />
        <button onClick={onclick}>Change</button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;

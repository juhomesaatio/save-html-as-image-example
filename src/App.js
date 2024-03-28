import logo from "./logo.svg";
import "./App.css";
import { exportAsImage } from "./export";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button
          style={{
            margin: "2rem",
            padding: "2rem",
            cursor: "pointer",
            background: "tomato",
            fontSize: "1.5rem",
            color: "white",
            border: 0,
            borderRadius: "6px",
          }}
          onClick={() => {
            exportAsImage(document.body);
          }}
        >
          Export html body as an image
        </button>
      </header>
    </div>
  );
}

export default App;

import logo from "./logo.png";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <footer className="App-footer">
          <small>Coded by SheCodes</small>
        </footer>
      </div>
    </div>
  );
}

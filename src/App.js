import logo from "./logo.svg";
import "./App.css";
import Facebook from "./components/Facebook";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Facebook auth example</h1>
      </header>
      <p className="App-intro">To get started,Authentication with Facebook</p>
      <Facebook />
    </div>
  );
}

export default App;

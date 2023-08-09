import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [value, setValue] = useState(0);
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
        <p>Zahl = <span>{value}</span></p>
       <div> <button onClick={() => setValue(value + 1)}>+</button></div>
       <div> <button onClick={() => setValue(value - 1)}>-</button></div>
       <div> <button onClick={() => setValue(value + 1)}>+</button></div>
       <div> <button onClick={() => setValue(value - 1)}>-</button></div>
      </header>
    </div>
  );
}

export default App;

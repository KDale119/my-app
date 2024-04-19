import React from 'react';
import logo from './logo.svg';
import './App.css';
import tslogo from './typescriptlogo.png'
import HelloMessage from "./HelloMessage";



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HelloMessage name={'Helloooooo'}/>
        <img src={logo} className="App-logo" alt="logo" />
        <img src ={tslogo} className="App-logo"/>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

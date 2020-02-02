import React from 'react';
import { useUserStore } from '@expo-yarn-workspaces-demo/core/stores/UserStore';
import logo from './logo.svg';
import './App.scss';

function App() {
  const [userStore] = useUserStore();

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
        <p>
          Our hero: {userStore.name}
        </p>
      </header>
    </div>
  );
}

export default App;

import React from 'react';
import logo from './logo.svg';
import Instructor from "./app/components/Instructor/Instructor";
import Terminal from "./app/components/Terminal/Terminal";
import './App.css';

function App() {
  return (
      <div className="container">
        <main>
          <Terminal/>
          <Instructor />
        </main>
        <footer>
        </footer>
      </div>
  );
}

export default App;

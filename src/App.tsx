import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { AppRouter } from './Components/AppRouter';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <AppRouter />
      </div>
    </BrowserRouter>
  );
}

export default App;

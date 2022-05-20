import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { AppRouter } from './Components/AppRouter';
import { Navbar } from './Components/Navbar';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <AppRouter />
      </div>
    </BrowserRouter>
  );
}

export default App;

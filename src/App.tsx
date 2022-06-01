import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import 'antd/dist/antd.css';
import { Main } from './Components/Main';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Main />
      </div>
    </BrowserRouter>
  );
}

export default App;

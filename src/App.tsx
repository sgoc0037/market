import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import 'antd/dist/antd.css';
import { Main } from './Components/Main';
import { Goback } from './Components/goBack';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Main />
        <Goback/>
      </div>
    </BrowserRouter>
  );
}

export default App;

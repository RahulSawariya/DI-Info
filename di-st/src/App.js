import './App.css';
import React from 'react';
import {Routes,Route, BrowserRouter as Router} from 'react-router-dom';

// components
import Home from './components/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;

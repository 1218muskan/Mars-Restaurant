import React from 'react';
import {Route, Routes} from 'react-router-dom';
import './App.css';
import Landing from './pages/landing';
import Home from './pages/home';
import Login from './pages/login';
import Signup from './pages/signup';
import DineIn from './pages/DineIn';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/home' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/dinein' element={<DineIn />} />

        </Routes>
    </div>
  );
}

export default App;

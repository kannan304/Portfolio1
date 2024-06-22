import React from 'react';
import Nav from './component/Nav';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './component/Home';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Nav />
          <Routes>
            <Route element={<Home />} path="/" />
          </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
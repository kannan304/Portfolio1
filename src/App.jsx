import React from 'react';
import Nav from './component/Nav';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './component/Home';
import Aboutme from './component/Aboutme';
import Skills from './component/Skills';
import Project from './component/Project';
import Contact from './component/Contact';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Nav />
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<Aboutme/>} path='/about'></Route>
            <Route element={<Skills/>} path='/skill'></Route>
            <Route element={<Project/>} path='/project'></Route>
            <Route element={<Contact/>} path='/contact'></Route>
          </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
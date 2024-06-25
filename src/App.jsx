// import React from 'react';
// import Nav from './component/Nav';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Home from './component/Home';
// import Aboutme from './component/Aboutme';
// import Skills from './component/Skills';
// import Project from './component/Project';
// import Contact from './component/Contact';

// const App = () => {
//   return (
//     <div>
//       <BrowserRouter>
//         <Nav/>
//         <Home></Home>
//         <Aboutme></Aboutme>
//         <Skills></Skills>
//         <Project></Project>
//         <Contact></Contact>

//           <Routes>
//             <Route element={<Home />} path="/home" />
//             <Route element={<Aboutme/>} path='/about'></Route>
//             <Route element={<Skills/>} path='/skill'></Route>
//             <Route element={<Project/>} path='/project'></Route>
//             <Route element={<Contact/>} path='/contact'></Route>
//           </Routes>
//       </BrowserRouter>
//     </div>
//   );
// };

// export default App;



import React from 'react';
import Nav from './component/Nav';

import Home from './component/Home';
import Aboutme from './component/Aboutme';
import Skills from './component/Skills';
import Project from './component/Project';
import Contact from './component/Contact';
import Footer from './component/Footer';


const App = () => {
  return (
    <div>
      
        <Nav/>
        <div id="home"></div>
        <Home></Home>
        <div id="about"></div>
        <Aboutme></Aboutme>
        <div id="skills"></div>
        <Skills></Skills>
        <div id="project"></div>
        <Project></Project>
        <div id="contact"></div>
        <Contact></Contact>
        <Footer></Footer>
    </div>
  );
};

export default App;

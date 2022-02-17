import React from 'react';
import './App.css';
import LatestTut from './Component/card/LatestTut';
import TutorialCourse from './Component/card/TutorialCourse';

import Navbar from './Component/navbar/Navbar';


import Footer from './Component/Footer/Footer';
import About from './Component/about/About';
import Exp from './Component/about/Exp';
import Contact from './Component/about/Contact';

function App() {
  return (
    <>
  
    <Navbar />
    <TutorialCourse/>
    <LatestTut/>
    <About/>
    <Exp/>
    <Contact/>
    <Footer/>
    {/* <NewCard/> */}
    </>
  );
}

export default App;

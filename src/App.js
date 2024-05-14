import { useState } from 'react';
import './App.css';
import { Banner } from './Components/Banner';
import { Cards } from './Components/Cards';
import { Carousel } from './Components/Carousel';
import { Purpose } from './Components/Purpose';
import LocomotiveScroll from 'locomotive-scroll';


function App() {
  
  const locomotiveScroll = new LocomotiveScroll();

  const isMobileOrTablet = () => {
    return window.innerWidth < 768;
  };

  return (
   <>
     <Banner/>
     {isMobileOrTablet() ? <Carousel/> : <Cards/>}    
     <Purpose/>
   </>
  );
}

export default App;

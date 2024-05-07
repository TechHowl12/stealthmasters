import './App.css';
import { Banner } from './Components/Banner';
import { Cards } from './Components/Cards';
import { Carousel } from './Components/Carousel';
import { Purpose } from './Components/Purpose';


function App() {
  
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

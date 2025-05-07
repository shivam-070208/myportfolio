import React, { useEffect, useRef } from 'react'
import { Navbar } from './Components'
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import { Home,Portfolio } from './Pages';

const Frame = () => {
  const currentRoute = useRef([]);
  const [currentPage, setCurrentPage] = React.useState(0);
  useEffect(()=>{
    if (currentRoute.current[currentPage]) {
      currentRoute.current[currentPage].scrollIntoView({ behavior: 'smooth' });
    }
  },[currentPage])
  return (
    
      <div>
        <div className='fixed'>
        <Navbar setCurrentPage={setCurrentPage} />
        </div>
        <div>
          <div />
          <div ref={(el)=>currentRoute.current.push(el)}></div>
          <Home  />
          <div ref={(el)=>currentRoute.current.push(el)}></div>
          <Portfolio  />
          

        </div>
        
      </div>
  
  )
}

export default Frame

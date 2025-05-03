import React, { useRef } from 'react'
import { Navbar } from './Components'
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import { Home,Portfolio } from './Pages';

const Frame = () => {
  const currentRoute = useRef([]);
  const [currentPage, setCurrentPage] = React.useState(0);
  return (
    
      <div>
        <div className='fixed'>
        <Navbar />
        </div>
        <div>
          <div />
          <Home  />
          <Portfolio  />
          

        </div>
        
      </div>
  
  )
}

export default Frame

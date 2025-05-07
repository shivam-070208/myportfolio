import { useEffect,useState } from 'react';
import Frame from './Frame'
import Loader from './loaderwindow/Loader';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {

 // Run only once after the component mounts
 const [loading, setloading] = useState()
 useEffect(()=>{
    setloading(true)
    setTimeout(()=>{
        setloading(false)
    },6000)
 },[])

    return (
        <BrowserRouter>
        <div className='w-screen h-screen fixed z-[-2] flex justify-center items-center opacity-[0.5] pointer-events-none'>
            <div className='w-[25vw] h-[25vw] translate-x-[50%] bg-red-300 blur-lg rounded-full animate-pulse' />            
            <div className='w-[25vw] h-[25vw] bg-green-300 translate-y-[50%] blur-lg rounded-full animate-bounce' /> 
            <div className='w-[25vw] h-[25vw] bg-blue-300 translate-x-[-50%] blur-lg rounded-full animate-pulse' /> 
            </div>

            <div className=" w-screen overflow-hidden backdrop-blur-xl">
                {loading ? <Loader /> : (
                    <Routes>
                        <Route path="/" element={<Frame  index={0}/>} />
                        <Route path="/portfolio"  element={<Frame index={1} />} />
                    </Routes>
                )}
      

            </div>
        </BrowserRouter>
    );
}

export default App;

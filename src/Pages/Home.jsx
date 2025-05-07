import React, { useEffect } from 'react';
import { Greet } from '../Homeconfig/Greeting';


const Home = () => {
  
  useEffect(()=>{
    Greet()
  },[])
  return (
    <div className='w-screen flex  min-h-screen max-[440px]:flex-col-reverse pt-10    mb-10 pl-2'>
     <div className="intro w-1/2 min-[600px]:ml-10 min-[440px]:mt-30 min-w-[300px] m-auto">
      <h1 className='block m-auto text-sm  text-white'>Hi,</h1>
      <h1 className='introtext min-[600px]:text-xl'>  I'm Shivam Gupta</h1>
      <p className='w-2/3 leading-tighter min-[600px]:text-lg text-white text-justify text-[0.8rem] min-w-[270px]'>A Developer with a passion for creating innovative digital solutions. With a keen eye for detail and a love for learning, I craft unique experiences that blend creativity and functionality. Explore my work to see how I bring ideas to life through design, development, and collaboration.</p>
      <button className='mr-4 mt-6 bg-blue-600 px-2 rounded text-white py-1 cursor-pointer'>Explore!</button>
      <button className='mt-6 bg-green-600 px-2 rounded text-white py-1 cursor-pointer'>Hire Me</button>
     </div>
     <div className="spline w-1/2 flex justify-center m-auto   max-[440px]:scale-[0.7] min-[440px]:w-[100vw] relative">
     <canvas className='w-full'></canvas>
     </div>
        
    </div>
  )
}

export default Home

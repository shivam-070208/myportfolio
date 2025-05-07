import React, { useState } from 'react';
import { Project } from '../Components';

const CurrentPortfolio=(e)=>{
  if(e==0){
  return(
  < Project/>
  )
}
}

const Portfolio = () => {
  const [checked, setchecked] = useState(0);

  return (
    <div className='w-screen h-screen flex flex-col items-center'>
      <h1 className='text-4xl bg-gradient-to-l from-purple-500 min-[320px]:text-3xl to-blue-500 bg-clip-text text-transparent '>Portfolio Showcase</h1>
      <div className='flex gap-2  justify-between border-1 mt-3 min-w-[300px] border-[#2e505fd2] w-[50%] rounded backdrop-blur-sm'>
        {["Projects","Certificate","TechStack"].map((item,index)=>(
          <p onClick={()=>setchecked(index)} className='text-white text-sm px-2 py-4 text-center w-1/3  cursor-pointer hover:bg-[#423e6fb4]'>{item}</p>
     
        ))}
     
      </div>
      {CurrentPortfolio(checked)}
    </div>
  )
}

export default Portfolio

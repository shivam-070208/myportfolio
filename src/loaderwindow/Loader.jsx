import React, { useEffect, useRef } from 'react'
import { LoaderWindow } from './index';

const Loader = () => {
    const canref = useRef(null);
    
    useEffect(() => {
        if (canref.current) {
            LoaderWindow(canref.current);
        }
      }, []);
return (
    <div className="w-screen loader h-screen  relative text-center">
    `  <canvas ref={canref} className="min-w-screen grid place-items-center h-screen absolute"></canvas>
    </div >
)
}

export default Loader

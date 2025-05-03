
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = ({setCurrentPage}) => {
  const currentNavRef = React.useRef(null);
  const navContainerRef = React.useRef(null);
  const linkRefs = React.useRef([]);
  useEffect(() => {
    if (linkRefs.current[0]) {
      linkRefs.current[0].click();
    }
  }, []);
  
  const handleClick = (e) => {
    
    const rect = navContainerRef.current.getBoundingClientRect();
    const x = e.target.closest('a').getBoundingClientRect().x - rect.x + e.target.closest('a').offsetWidth / 2 - 16;
    currentNavRef.current.style.cssText = `left: ${x}px`;

    linkRefs.current.forEach((link) => {
      link.classList.remove("checkedroute");
    });
    e.target.closest('a').classList.add("checkedroute");
  };

  return (
    <div className="w-screen p-2 flex pt-4 fixed justify-between items-end backdrop-blur-lg">
      <div className="text-white  "><i class="fa fa-briefcase mr-1" aria-hidden="true"></i>
      Shivam</div>
      <div
        ref={navContainerRef}
        className="bg-white py-1 rounded-full flex px-4 gap-4 mt-3 relative"
      >
        <div
          ref={currentNavRef}
          className="bg-green-600 h-8 w-8 rounded-full absolute z-[0] translate-y-[-50%] border-[#090B1B] border-2 transition-all duration-300"
        />
        <Link
          to="/"
          ref={(el) => (linkRefs.current[0] = el)}
          className="z-1 checkedroute"
          onClick={handleClick}
        >
          <i className="fas fa-home text-blue-600"></i>
          <p className="text-[0.3rem] mt-[4px] text-[rgb(2, 9, 80)] font-bold absolute translate-x-[2px]">Home</p>

        </Link>
      
        <Link
          to="/portfolio"
          ref={(el) => (linkRefs.current[2] = el)}
          onClick={handleClick}
          className="text-center"
          
        >
          <i className="fas fa-project-diagram text-blue-600"></i>
          <p className="text-[0.3rem] mt-[4px] text-[rgb(2, 9, 80)] font-extrabold absolute">Portfolio</p>
        </Link>
        <Link
          href="#"
          ref={(el) => (linkRefs.current[3] = el)}
          
          onClick={handleClick}
          className="text-center"
        >
          <i className="fas fa-graduation-cap text-blue-600"></i>
                    <p className="text-[0.3rem] mt-[4px] text-[rgb(2, 9, 80)] font-bold absolute">Education</p>

        </Link>
        <Link
          href="#"
          ref={(el) => (linkRefs.current[4] = el)}
          
          onClick={handleClick}
        >
          <i class="fas fa-certificate text-blue-600"></i>
        <p className="text-[0.3rem] mt-[4px] text-[rgb(2, 9, 80)] font-bold absolute translate-x-[-4px]">Milestones</p>

        </Link>
        <Link
          href="#"
          ref={(el) => (linkRefs.current[5] = el)}
          className=""
          onClick={handleClick}
        >
          <i className="fas fa-envelope text-blue-600"></i>
          <p className="text-[0.3rem] mt-[4px] text-[rgb(2, 9, 80)] font-bold absolute translate-x-[-2px]">Contact</p>
        </Link>
      </div>
      <div className="links max-[500px]:hidden text-white flex gap-2">
        <a
          href="https://www.linkedin.com/in/shivam-gupta-b79965333/"
          className="bg-blue-800 rounded-xs px-[2px]"
        >
          in
        </a>
        <a
          href="https://github.com/shivam-070208"
          className="bg-gray-800 text-white px-0.5 rounded"
        >
          <i className="fab fa-github"></i>
        </a>
        <a href="/assets/shivamcv.docx" download={true}>
          <i className="far fa-file-word"></i>
        </a>
      </div>
    </div>
  );
};

export default Navbar;

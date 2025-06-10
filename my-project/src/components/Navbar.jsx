import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBarsStaggered } from 'react-icons/fa6';
import { AiOutlineClose } from 'react-icons/ai';
import Logo from './Logo';

const NavBar = () => {
  const location = useLocation();
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNavHandler = () => {
    setIsNavOpen(!isNavOpen);
  };

  const closeNavHandler = () => {
    setIsNavOpen(false);
  };

  // Helper function to apply active class
  const getNavLinkClass = (path) => (
    location.pathname === path 
      ? 'text-blue-900 border-b-2 border-blue-900 transform transition-300' 
      : 'text-gray-900'
  );

  

  return (
    <div className=' '>
    <nav className="text-slate-500 w-screen h-14 grid place-items-center fixed top-0 left-0 z-20 border-b-4 ">
      <div className="container  mx-auto flex justify-between items-center h-full px-4 cursor-pointer">
        <div className="block w-[100px]">
          <p className='text-xs text-slate-500'><Logo/></p>
        </div>
        
        <button
          className="text-xl md:hidden"
          onClick={toggleNavHandler}
        >
          {isNavOpen ? <AiOutlineClose /> : <FaBarsStaggered />}
        </button>
        
        <ul
          className={`${
            isNavOpen ? 'flex' : 'hidden'
          } flex-col md:flex md:flex-row items-center text-xs gap-6 absolute md:static top-20 left-0 w-full md:w-auto bg-white md:bg-transparent p-4 md:p-0 shadow-md md:shadow-none z-50`}
        >
          <li><Link to="/" className={getNavLinkClass('/home')} onClick={closeNavHandler}>HOME</Link></li>
          <li><Link to="/products" className={getNavLinkClass('/products')} onClick={closeNavHandler}>PRODUCTS</Link></li>
          <li><Link to="/services" className={getNavLinkClass('/services')} onClick={closeNavHandler}>SERVICES</Link></li>
          <li><Link to="/about" className={getNavLinkClass('/about')} onClick={closeNavHandler}>ABOUT</Link></li>
          <li><Link to="/benefits" className={getNavLinkClass('/benefits')} onClick={closeNavHandler}>BENEFITS</Link></li>
          <li><Link to="/freetips" className={getNavLinkClass('/freetips')} onClick={closeNavHandler}>FREE-TIPS</Link></li>
        </ul>
      </div>
    </nav>
  
    </div>
    
  );
};

export default NavBar;
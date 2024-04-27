import React from 'react';
import Logo from '../assets/logo.png'

const Header = () => {
  return <div className='py-8'>
    <div className='container mx-auto'>
      <div className='flex items-center justify-between'>
        {/* {logo} */}
      <a href='#' >
        <button className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300'>
        <img src={Logo} className='w-[65px]'/>
        </button>
      </a>
      <a href='#contact'>
        <button className='btn btn-sm'>work with me</button>
      </a>
      </div>
    </div>
  </div>;
};

export default Header;

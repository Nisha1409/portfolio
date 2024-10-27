import React, { useState } from 'react'
import {  GiHamburgerMenu } from 'react-icons/gi';
import { IoMdClose } from 'react-icons/io';

const Navbar = () => {
  const [menu, openMenu]=useState(false);
  const [showMenu, setShowMenu]=useState(true);
  return (
    <nav className='flex flex-wrap justify-between md:items-center text-white px-10 pt-6 md:px-20'>
    <span className='text-xl font-bold tracking-wide'>Portfolio</span>
    <ul 
    className={`${menu ? 'block':'hidden'} mx-24 p-y2 mt-4 font-semibold md:mt-5 bg-black rounded-xl px-2 bg-opacity-30 
    md:border-none text-center md:bg-transparent md:static md:mx-0 md:flex gap-6`}>
      <a href='#About'>
        <li className="text-md transition-all duration-300 p-1 md:p-0">About</li>
      </a>
      <a href='#Education'>
        <li className="text-md transition-all duration-300 p-1 md:p-0">Education</li>
        </a>
        <a href='#Experience'>
        <li className="text-md transition-all duration-300 p-1 md:p-0">Experience</li>
        </a>
      <a href='#Projects'>
        <li className="text-md transition-all duration-300 p-1 md:p-0">Projects</li>
      </a>
      <a href='#Contact'>
        <li className="text-md transition-all duration-300 p-1 md:p-0">Contact Me</li>
      </a>
    </ul>
    {showMenu ? (
        <GiHamburgerMenu
          size={30}
          className="md:hidden absolute right-10 top-6 transition-all duration-300"
          onClick={() => {
            openMenu(!menu);
            setShowMenu(!showMenu);
          }}
        />
      ) : (
        <IoMdClose
          size={30}
          className="md:hidden absolute right-10 top-6 transition-all duration-300"
          onClick={() => {
            openMenu(!menu);
            setShowMenu(!showMenu);
          }}

        />
      )}
    </nav>
  )
}

export default Navbar
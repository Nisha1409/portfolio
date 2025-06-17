import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoMdClose } from 'react-icons/io';

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  return (
    <nav className="bg-black text-white flex flex-col md:flex-row md:justify-end px-6 md:px-20 pt-4 md:pt-16 relative z-50">
      {/* Navbar Links */}
      <ul
        className={`absolute top-16 right-6 w-auto bg-black rounded-md text-right md:static md:flex md:gap-6 md:pr-6 transition-all duration-500 ${menu ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 md:opacity-100'
          }`}
      >
        {["About", "Education", "Skills", "Experience", "Projects", "Contact Me"].map((item) => (
          <a href={`#${item.replace(" ", "")}`} key={item} onClick={() => setMenu(false)}>
            <li className="text-md p-3 md:p-0 transition-all duration-300 whitespace-nowrap">{item}</li>
          </a>
        ))}
      </ul>


      {/* Menu Toggle Buttons */}
      <div className="absolute right-6 top-6 cursor-pointer md:hidden z-50">
        {menu ? (
          <IoMdClose size={30} onClick={() => setMenu(false)} />
        ) : (
          <GiHamburgerMenu size={30} onClick={() => setMenu(true)} />
        )}
      </div>
    </nav>
  );
};

export default Navbar;

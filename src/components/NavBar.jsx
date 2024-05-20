import { useState } from 'react';
import { MdClear } from 'react-icons/md';
import { arrowRight, logo } from '../assets';
import { RxHamburgerMenu } from 'react-icons/rx';

import { navLinks } from '../constants';

function NavBar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const openNav = () => {
    setIsNavOpen(open => !open);
  };

  return (
    <>
      <header className='container pt-10 px-10 mb-24 overflow-hidden'>
        <div className='flex justify-between items-center'>
          <a href='/'>
            <img
              src={logo}
              alt='logo'
            />
          </a>

          <nav className='max-lg:hidden'>
            <ul className='flex gap-10'>
              {navLinks.map(navLink => (
                <li key={navLink.name}>
                  <a
                    href={navLink.href}
                    className='text-2xl text-dark-gray hover:text-white duration-200 max-lg:text-white max-lg:hover:text-dark-gray'>
                    {navLink.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className='flex items-center gap-4 max-lg:hidden'>
            <button className='btn'>Sign in</button>
            <button className='btn-white'>
              Get Started
              <img
                src={arrowRight}
                alt=''
              />
            </button>
          </div>

          <div className='lg:hidden'>
            <button onClick={openNav}>{isNavOpen ? <MdClear size={30} /> : <RxHamburgerMenu size={30} />}</button>
          </div>
        </div>

        {/* dropdown */}
        <div
          className={` lg:hidden transition-all duration-500 overflow-hidden
             absolute inset-0 top-[10%] z-20 w-[40%] max-sm:w-full  backdrop-blur-md ease-in-out  bg-dark-gray/10 flex flex-col pt-20  h-screen ${
               isNavOpen ? 'translate-x-0' : 'max-lg:translate-x-[-200%]'
             }`}>
          <ul className='flex flex-col ml-24 gap-10'>
            {navLinks.map(navLink => (
              <li key={navLink.name}>
                <a
                  href={navLink.href}
                  className='text-2xl text-dark-gray hover:text-white duration-200 max-lg:text-white max-lg:hover:text-dark-gray'>
                  {navLink.name}
                </a>
              </li>
            ))}
          </ul>

          <div className='flex flex-col self-start ml-16 mt-8 gap-4 '>
            <button className='btn'>Sign in</button>
            <button className='btn-white'>
              Get Started
              <img
                src={arrowRight}
                alt=''
              />
            </button>
          </div>
        </div>
      </header>
    </>
  );
}

export default NavBar;

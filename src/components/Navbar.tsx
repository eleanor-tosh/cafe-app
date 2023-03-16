import React from 'react'
import { Link } from 'react-scroll'

function Navbar() {
  return (
    
    <div className='container md:flex flex-wrap items-center justify-center md:mx-auto bg-grey-ish border-b-2 border-text-grey py-3 sticky top-0'>
      <button id='hamburger-button' className='text-3xl md:hidden cursor-pointer'>&#9776;</button>
      <nav>
        <ul className='hidden md:flex md:flex-row items-center'>
          <li className='p-8 font-bold text-text-grey font-serif active:text-bean hover:text-bean hover:cursor-default'>
            <Link 
              activeClass="active" 
              to="about-section" 
              spy={true}
              offset={-150} 
              smooth={true} 
              duration={500}>About
            </Link>
          </li>

          <li className='p-8 font-bold text-text-grey font-serif active:text-bean hover:text-bean hover:cursor-default'>
            <Link 
              activeClass="active" 
              to="menu-section" 
              spy={true} 
              offset={-150}
              smooth={true} 
              duration={500}>Menu
            </Link>
          </li>

          <li>
            <Link 
              activeClass="active" 
              to="home-section" 
              spy={true} 
              offset={-300}
              smooth={true} 
              duration={500}>
                <img
                  src="/images/Brokologo.jpg"
                  className="h-44 mr-3"
                  alt="Broko Bean Logo"/>
              </Link>
            </li>

            <li className='p-8 font-bold text-text-grey font-serif active:text-bean hover:text-bean hover:cursor-default'>
              <Link 
                activeClass="active" 
                to="location-section" 
                spy={true} 
                offset={-150}
                smooth={true} 
                duration={500}>Location
              </Link>
            </li>

            <li className='p-8 font-bold text-text-grey font-serif active:text-bean hover:text-bean hover:cursor-default'>
              <Link 
                activeClass="active" 
                to="contact-section" 
                spy={true} 
                offset={-150}
                smooth={true} 
                duration={500}>Contact
              </Link>
            </li>
        </ul>
      </nav>
      
    </div>
  )
}

export default Navbar
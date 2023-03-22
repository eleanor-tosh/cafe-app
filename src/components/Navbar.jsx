import React from 'react'
import { Link } from 'react-scroll'
import { FiMenu } from 'react-icons/fi'
import { useState } from 'react'

function Navbar() {
  const [open, setOpen] = useState(true)

  return (
    <div className=" md:flex flex-wrap items-center justify-center md:mx-auto bg-grey-ish border-b-2 border-coffee-brown sticky top-0">
      <div className="flex flex-row justify-between">
        <Link
          activeClass="active"
          to="home-section"
          spy={true}
          offset={-300}
          smooth={true}
          duration={500}
        >
          <img
            src="/images/Brokologo.jpg"
            className="h-20 mr-3 md:hidden inline"
            alt="Broko Bean Logo"
          />
        </Link>
        <FiMenu
          className="md:hidden text-2xl m-5 cursor-pointer"
          onClick={() => setOpen(!open)}
        ></FiMenu>
      </div>
      <div></div>

      <nav className={`${open ? 'block' : 'hidden'}`}>
        <ul className="md:flex md:flex-row md:items-center text-center">
          <li className="p-4 md:p-8 font-bold text-coffee-brown font-serif active:text-bean hover:text-bean hover:cursor-default text-center">
            <Link
              className="px-20 md:px-4"
              activeClass="active"
              to="about-section"
              spy={true}
              offset={-50}
              smooth={true}
              duration={500}
            >
              About
            </Link>
          </li>

          <li className="p-4 md:p-8 font-bold text-coffee-brown font-serif active:text-bean hover:text-bean hover:cursor-default text-center">
            <Link
              className="px-20 md:px-4"
              activeClass="active"
              to="menu-section"
              spy={true}
              offset={-50}
              smooth={true}
              duration={500}
            >
              Menu
            </Link>
          </li>

          <li className="hidden md:block">
            <Link
              activeClass="active"
              to="home-section"
              spy={true}
              offset={-300}
              smooth={true}
              duration={500}
            >
              <img
                src="/images/Brokologo.jpg"
                className="h-44"
                alt="Broko Bean Logo"
              />
            </Link>
          </li>

          <li className="p-4 md:p-8 font-bold text-coffee-brown font-serif active:text-bean hover:text-bean hover:cursor-default text-center">
            <Link
              className="px-20 md:px-4"
              activeClass="active"
              to="location-section"
              spy={true}
              offset={-50}
              smooth={true}
              duration={500}
            >
              Location
            </Link>
          </li>

          <li className="p-4 md:p-8 font-bold text-coffee-brown font-serif active:text-bean hover:text-bean hover:cursor-default text-center">
            <Link
              className="px-20 md:px-4"
              activeClass="active"
              to="contact-section"
              spy={true}
              offset={-50}
              smooth={true}
              duration={500}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar

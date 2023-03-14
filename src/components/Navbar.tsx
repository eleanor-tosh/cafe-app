import React from 'react'


function Navbar() {
  return (
<div className='container flex flex-wrap items-center justify-center mx-auto bg-grey-ish'>

<ul className='flex flex-row items-center'>
  <li className='p-8 font-bold text-text-grey'><a href='/'>About</a></li>
  <li className='p-8 font-bold text-text-grey'><a href='/'>Menu</a></li>
  <li><a href="/">
            <img
              src="/images/Brokologo.jpg"
              className="h-44 mr-3"
              alt="Broko Bean Logo"
            />
          </a></li>
  <li className='p-8 font-bold text-text-grey'><a href='/'>Quiz</a></li>
  <li className='p-8 font-bold text-text-grey'><a href='/'>Contact</a></li>
</ul>
</div>
)
}

export default Navbar
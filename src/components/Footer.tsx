import React from 'react'


function Footer() {
  return (
    <div className='container px-10 flex flex-row justify-center items-center mx-auto bg-grey-ish border-t-2 border-coffee-brown py-14'>
      <a href='/'><i className="fa-brands fa-facebook p-5 font-bold text-coffee-brown text-4xl"></i></a>
      <a href='/'><i className="fa-brands fa-instagram p-5 font-bold text-coffee-brown text-4xl"></i></a>
      <a href='/'><i className="fa-brands fa-twitter p-5 font-bold text-coffee-brown text-4xl"></i></a>
    </div>
  )
}

export default Footer
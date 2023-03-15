import React from 'react'


function Home() {
  return (
<div className="container mx-auto" id="home-section" >

    <div className="relative">
      <div className='absolute pb-40 pt-12 px-20'>
      <h1 className="font-bold text-white font-serif text-7xl leading-relaxed w-5/6">For the best coffee in Dunedin, visit Broko Bean.</h1>
        <p className="font-bold text-white font-serif text-2xl p-10 leading-relaxed">
       
        <h2 className="font-bold text-white font-serif text-2xl underline leading-relaxed pt-96">
        Opening Hours:</h2>
        <ul>
          <li>Weekdays: 7am-6pm</li>
          <li>Saturday: 7am-10pm</li>
          <li>Sunday: 8am-3pm</li>
        </ul>
     
        </p></div>
        <img src='/images/beans-and-press-trimmed.jpg' alt="Coffee beans, ground coffee, press and coffee on wooden boards" className="w-full"></img>
    </div>

  

</div>
)
}

export default Home
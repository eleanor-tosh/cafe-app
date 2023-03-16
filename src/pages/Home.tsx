import React from 'react'


function Home() {
  return (
    <div className="container mx-auto" id="home-section" >
        <div className="bg-hero bg-cover bg-center">
          <div className='flex items-center justify-left w-full py-12'>
            <div className="text-left">
              <h1 className="font-bold text-white font-serif text-3xl md:text-7xl leading-relaxed w-5/6 px-12">For the best coffee in Dunedin, visit Broko Bean.</h1>
                  <h2 className="font-bold text-white font-serif text-2xl underline leading-relaxed px-10 pt-48 md:pt-96">
                    Opening Hours:</h2>
                  <ul className="font-bold text-white font-serif text-2xl px-10 pb-10 leading-relaxed">
                    <li>Weekdays: 7am-6pm</li>
                    <li>Saturday: 7am-10pm</li>
                    <li>Sunday: 8am-3pm</li>
                  </ul>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Home
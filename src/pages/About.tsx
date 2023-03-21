import React from 'react'


function About() {
  return (
<div className="container mx-auto md:py-20"> 
      <div className="pt-20 md:pt-40 md:px-20" id="about-section">
        <h1 className="font-bold text-coffee-brown text-center font-serif text-3xl leading-relaxed">About</h1>
          <p className="font-medium text-text-grey font-serif text-xl p-10 leading-relaxed">
            Broko Bean was named the Best Cafe at the inaugural 2022 Otago Hospitality Awards, which we were ecstatic to accept along with our award for outstanding barista. 
            <br></br>
            <br></br>
            We pride ourselves on bringing the best coffee to the heart of Dunedin. We offer a daily assortment of fresh baked goods and our Award Winning Chocolate Caramel Brownie.
            <br></br>
            <br></br>
            Our dog-friendly outdoor seating area means you can bring along your best friend to enjoy a puppuccino and choose from a selection of dog-friendly treats (including grain-free options).
          </p>
      </div>

      <div className='md:grid grid-cols-2'>
        <div>
          <img src='/images/lights2.jpg' alt="Lights in the cafe" className="p-5"></img>
        </div>
        <div className="md:grid grid-rows-2 p-5 content-between">
          <img src='/images/pour2.jpg' alt="The best coffee pour" className="mb-10 md:mb-2"></img>
          <img src='/images/cups2.jpg' alt="A group of cups of coffee" className="mb-0 mt-auto"></img>
        </div>
      </div>
    </div>
  )
}

export default About
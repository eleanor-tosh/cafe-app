import React from 'react'


function About() {
  return (
<div className="container mx-auto"> 

      <div className="py-32 px-60" id="about-section">
        <h1 className="font-bold text-bean font-serif text-3xl leading-relaxed">About</h1>
          <p className="font-bold text-text-grey font-serif text-xl p-10 leading-relaxed">
            Broko Bean was named the Best Cafe at the inaugural 2022 Otago Hospitality Awards, which we were ecstatic to accept along with our award for outstanding barista. 
            <br></br>
            <br></br>
            We pride ourselves on bringing the best coffee to the heart of Dunedin. We offer a daily assortment of fresh baked goods and our Award Winning Chocolate Caramel Brownie.
          <br></br>
          <br></br>
          Our dog-friendly outdoor seating area means you can bring along your best friend to enjoy a puppuccino and choose from a selection of dog-friendly treats (including grain-free options).</p>
      </div>

<div className='grid grid-cols-2'>
  <div>
    <img src='/images/lights2.jpg' alt="Lights in the cafe" className="p-5"></img>
  </div>
  <div className="grid grid-rows-2 p-5 content-between">
  <img src='/images/pour2.jpg' alt="The best coffee pour" className="j"></img>
  <img src='/images/cups2.jpg' alt="Coffee beans, ground coffee, press and coffee on wooden boards" className="mb-0 mt-auto"></img>
  </div>
</div>
  


</div>
)
}

export default About
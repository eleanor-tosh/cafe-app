import React from 'react'


function Home() {
  return (
<div className="container mx-auto" id="home-section"> 

    <div className="py-32 px-60" >
      <h1 className="font-bold text-bean font-serif text-3xl leading-relaxed">Broko Bean is an independent and locally owned cafe that opened in 2022.</h1>
        <p className="font-bold text-text-grey font-serif text-xl p-10 leading-relaxed">We pride ourselves on bringing the best coffee to the heart of Dunedin. We offer a daily assortment of fresh baked goods and our Award Winning Chocolate Caramel Brownie.
        <br></br>
        <br></br>
        Our dog-friendly outdoor seating area means you can bring along your best friend to enjoy a puppuccino and choose from a selection of dog-friendly treats (including grain-free options).</p>
    </div>

  <img src='/images/beans-and-press-trimmed.jpg' alt="Coffee beans, ground coffee, press and coffee on wooden boards" className="w-full"></img>

</div>
)
}

export default Home
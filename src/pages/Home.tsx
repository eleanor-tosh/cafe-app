import React from 'react'


function Home() {
  return (
<div className="container mx-auto" id="home-section" >

    <div className="py-32 px-60">
      <h1 className="font-bold text-bean font-serif text-3xl leading-relaxed">Broko Bean, a little cafe with a big heart. Come and visit us for the best coffee you will experience in Dunedin.</h1>
        <p className="font-bold text-text-grey font-serif text-xl p-10 leading-relaxed">We welcome all and can cater to most food allergies/intolerances. Dog friendly. No smoking. Wheelchair accessable. Outdoor seating area with cover and heating for those colder days.
        <br></br>
        <br></br>
        Opening Hours:
        <ul>
          <li>Weekdays: 7am-6pm</li>
          <li>Saturday: 7am-10pm</li>
          <li>Sunday: 8am-3pm</li>
        </ul>
        <br></br>
        Live music Saturdays from 5pm.
        </p>
    </div>

  <img src='/images/beans-and-press-trimmed.jpg' alt="Coffee beans, ground coffee, press and coffee on wooden boards" className="w-full"></img>

</div>
)
}

export default Home
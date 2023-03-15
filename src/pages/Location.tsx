import React from 'react'


function Location() {
  return (
<div className="container mx-auto py-20"> 

      <div className="py-40 px-20" id="location-section">
        <h1 className="font-bold text-bean font-serif text-3xl leading-relaxed">Location</h1>
          <p className="font-bold text-text-grey font-serif text-xl p-10 leading-relaxed">Conveniently located near of of Dunedins amazing beaches. Bring the entire family (dog included) for an afternoon out.
          </p>
      <div className='grid grid-cols-2'>
        <div className='p-10'><p className="font-bold text-text-grey font-serif text-xl leading-relaxed">We have plenty of offstreet parking in our private carpark. Dog friendly. No smoking. Wheelchair accessable. Outdoor seating area with cover and heating for those colder days.
          </p>
          <h1 className="font-bold text-bean font-serif text-xl pt-5 leading-relaxed">Physical Address:</h1>
          <p className="font-bold text-text-grey font-serif text-xl leading-relaxed">123 Fake Street, <br></br>St Kilda, <br></br>Dunedin <br></br>New Zealand</p> 
        </div>


  <iframe className='w-full h-96 border-2 border-bean rounded'
  src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d1962.926109346874!2d170.49036039953103!3d-45.91137528816644!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snz!4v1678849185068!5m2!1sen!2snz"></iframe>
</div>
</div>
</div>
)
}

export default Location

import React from 'react'


function Location() {
  return (
    <div className="container mx-auto md:pt-36"> 
        <div className="pt-20 md:pt-40 md:px-20" id="location-section">
          <h1 className="font-bold text-coffee-brown text-center font-serif text-3xl leading-relaxed">Location</h1>
            <p className="font-medium text-text-grey font-serif text-xl p-10 leading-relaxed">Conveniently located near one of Dunedins amazing beaches. Bring the entire family (dog included) for an afternoon out.
            </p>
          <div className='md:grid grid-cols-2'>
            <div className='p-10'><p className="font-medium text-text-grey font-serif text-xl leading-relaxed">We have plenty of offstreet parking in our private carpark. Dog friendly. No smoking. Wheelchair accessable. Outdoor seating area with cover and heating for those colder days.
              </p>
              <h1 className="font-bold text-coffee-brown font-serif text-xl pt-5 leading-relaxed">Physical Address:</h1>
              <p className="font-medium text-text-grey font-serif text-xl leading-relaxed">123 Fake Street, <br></br>St Kilda, <br></br>Dunedin <br></br>New Zealand</p> 
            </div>
              <iframe title='map' className='w-full h-96 border-2 border-bean rounded'
              src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d1962.926109346874!2d170.49036039953103!3d-45.91137528816644!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snz!4v1678849185068!5m2!1sen!2snz"></iframe>
          </div>
        </div>
    </div>
  )
}

export default Location

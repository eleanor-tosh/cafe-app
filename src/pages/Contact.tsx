import React from 'react'


function Contact() {
  return (
<div className="container mx-auto"> 

    <div className="pt-32 pb-10 px-60" id="contact-section">
      <h1 className="font-bold text-bean font-serif text-3xl leading-relaxed">Contact</h1>
    </div>

    <div className='grid grid-cols-2'>
      <div>
        <img src='/images/end.jpg' alt="Coffee beans, ground coffee, press and coffee" className="w-full"></img>
      </div>

      <div>
        <p className="font-bold text-text-grey font-serif text-xl p-10 mb-10 leading-relaxed">Call us on +64 03 452 7885, email brokobean@cafe.com, or fill in the form below. 
        <br></br>
        We will get back to you as soon as we can during our business hours.</p>
        
        <form className='px-24'>
          <div>
            <label className='font-bold text-bean font-serif text-xl p-10 leading-relaxed '>Name:
            <input id='name' type='name' placeholder='name' className='border rounded p-2 m-5 w-full'></input></label>
          </div>

          <div>
            <label className='font-bold text-bean font-serif text-xl p-10 leading-relaxed'>Email:
            <input id='email' type='email' placeholder='email' className='border rounded p-2 m-5 w-full'></input></label>
          </div>

          <div>
            <label className='font-bold text-bean font-serif text-xl p-10 leading-relaxed'>Phone:
            <input id='phone' type='phone' placeholder='phone' className='border rounded p-2 m-5 w-full'></input></label>
          </div>

          <div>
            <label className='font-bold text-bean font-serif text-xl p-10 leading-relaxed'>Subject:
            <input id='subject' type='text' placeholder='subject' className='border rounded p-2 m-5 w-full'></input></label>
          </div>

          <div>
            <label className='font-bold text-bean font-serif text-xl p-10 leading-relaxed'>Message:
            <textarea id='message' placeholder='message' className='border rounded p-2 m-5 w-full'/></label>
          </div>
          
          <button className='bg-bean hover:bg-text-grey text-white font-bold py-2 px-10 rounded my-5 mx-10'>Submit</button>
          </form>
      </div>
    </div>
        
</div>
)
}

export default Contact
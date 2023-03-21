import React from 'react'


function Menu() {
  return (
    <div>
      <div className="container mx-auto md:py-20"> 
        <div className="pt-20 md:pt-20 md:px-20" id="menu-section">
          <h1 className="font-bold text-coffee-brown text-center font-serif text-3xl leading-relaxed">Menu</h1>
            <p className="font-medium text-text-grey font-serif text-xl p-10 leading-relaxed"> We source most of our ingredients locally and also use our neighbours at the Otago Farmers Market, Evansdale Cheese, Cairnmuir Central Otago olive oil & fresh fruit & vegetables throughout our changing seasons.
            <br></br>
            <br></br>
            Our cabinet is always stocked with a full range of sweet and savouury treats. Don't miss our Award Winning Chocolate Caramel Brownie, dog-safe treats and puppuccino available on request. We welcome all and can cater to most food allergies/intolerances.</p>
        </div>

        <div className="pb-10 md:px-20">
          <h2 className="font-bold text-coffee-brown font-serif text-xl p-5 leading-relaxed underline">All Day Menu:</h2>
          <div className="md:grid grid-cols-2">
            <div>
              <h2 className='font-medium text-bean font-serif text-lg px-10 pt-5 leading-relaxed'>Free Range Eggs on Toast</h2><p className="font-medium text-text-grey font-serif text-lg pb-5 px-10 leading-relaxed"> - Any style on toasted ciabatta.</p>
              <h2 className='font-medium text-bean font-serif text-lg px-10 pt-5 leading-relaxed'>Raw Fruity Natural Muesli</h2><p className="font-medium text-text-grey font-serif text-lg pb-5 px-10 leading-relaxed"> - Natural muesli, berry coulis, natural yoghurt & a jug of full creamy milk.</p>
              <h2 className='font-medium text-bean font-serif text-lg px-10 pt-5 leading-relaxed'>Buttermilk Pancakes</h2><p className="font-medium text-text-grey font-serif text-lg pb-5 px-10 leading-relaxed"> - Fluffy buttermilk pancakes served with crispy bacon, sliced fresh banana & maple
  syrup or berry coulis & yoghurt.</p>
              <h2 className='font-medium text-bean font-serif text-lg px-10 pt-5 leading-relaxed'>French Toast</h2><p className="font-medium text-text-grey font-serif text-lg pb-5 px-10 leading-relaxed"> - Aretzel bread, fresh fruit, maple syrup or berry coulis & yoghurt.</p>
            </div>

            <div>
              <h2 className='font-medium text-bean font-serif text-lg px-10 pt-5 leading-relaxed'>Beef or Chicken & Bacon Burge</h2><p className="font-medium text-text-grey font-serif text-lg pb-5 px-10 leading-relaxed"> - Angus prime beef burger or fried chicken, bacon, grilled smoked cheese, tomato mild chilli jam, gherkin, & served with fries.</p>
              <h2 className='font-medium text-bean font-serif text-lg px-10 pt-5 leading-relaxed'>Pork Sliders</h2><p className="font-medium text-text-grey font-serif text-lg pb-5 px-10 leading-relaxed"> - Slow cooked pork shoulder rubbed with tex mex spices, pulled and mixed in sauce, served with fries.</p>
              <h2 className='font-medium text-bean font-serif text-lg px-10 pt-5 leading-relaxed'>Dukkah Crumbed Camembert</h2><p className="font-medium text-text-grey font-serif text-lg pb-5 px-10 leading-relaxed"> - Cilli plum sauce, hazelnut and apple salad, pickled beetroot.</p>
              <h2 className='font-medium text-bean font-serif text-lg px-10 pt-5 leading-relaxed'>Blue Cod</h2><p className="font-medium text-text-grey font-serif text-lg pb-5 px-10 leading-relaxed"> - Locally caught blue cod in a Speights beer batter served with fries, slaw & tartare.</p>
            </div>
          </div>

          <div>
            <h2 className='font-medium text-bean font-serif text-lg px-10 py-5 leading-relaxed text-center italic'>A range of 2-3 seasonal menu items will be added depending on locally sources produce, call or visit to find out more.</h2></div>
          </div>
        </div>
      <img src='/images/stabbed.jpg' alt="Burger with a knife stuck in it" className="w-full"></img>
    </div>
  )
}

export default Menu
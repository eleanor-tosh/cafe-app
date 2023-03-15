import React from 'react'


function Menu() {
  return (
    <div className="container mx-auto py-20"> 
      <div className="pt-40 px-20" id="menu-section">
        <h1 className="font-bold text-bean font-serif text-3xl leading-relaxed">Menu</h1>
          <p className="font-bold text-text-grey font-serif text-xl p-10 leading-relaxed"> We source most of our ingredients locally and also use our neighbours at the Otago Farmers Market, Evansdale Cheese, Cairnmuir Central Otago olive oil & fresh fruit & vegetables throughout our changing seasons.
          <br></br>
          <br></br>
          Our cabinet is always stocked with a full range of sweet and savouury treats. Don't miss our Award Winning Chocolate Caramel Brownie, dog-safe treats and puppuccino available on request. We welcome all and can cater to most food allergies/intolerances.</p>
      </div>

    <div className="pb-32 px-20">
      <p className="font-bold text-text-grey font-serif text-xl p-5 leading-relaxed underline">All Day Menu:</p>
        <div className="grid grid-cols-2">
          <div>
            <p className="font-medium text-text-grey font-serif text-lg px-10 py-5 leading-relaxed"><h2 className='text-bean'>Free Range Eggs on Toast</h2> - Any style on toasted ciabatta.</p>
            <p className="font-medium text-text-grey font-serif text-lg px-10 py-5 leading-relaxed"><h2 className='text-bean'>Raw Fruity Natural Muesli</h2> - Natural muesli, berry coulis, natural yoghurt & a jug of full creamy milk</p>
            <p className="font-medium text-text-grey font-serif text-lg px-10 py-5 leading-relaxed"><h2 className='text-bean'>Buttermilk Pancakes</h2> - Fluffy buttermilk pancakes served with crispy bacon, sliced fresh banana & maple
syrup or berry coulis & yoghurt.</p>
            <p className="font-mediuum text-text-grey font-serif text-lg px-10 py-5 leading-relaxed"><h2 className='text-bean'>French Toast</h2> - Aretzel bread, fresh fruit, maple syrup or berry coulis & yoghurt.</p>
          </div>

          <div>
            <p className="font-medium text-text-grey font-serif text-lg px-10 py-5 leading-relaxed"><h2 className='text-bean'>Beef or Chicken & Bacon Burger</h2> - Angus prime beef burger or fried chicken, bacon, grilled
  smoked cheese, tomato mild chilli jam, gherkin, & served with fries.</p>
            <p className="font-medium text-text-grey font-serif text-lg px-10 py-5 leading-relaxed"><h2 className='text-bean'>Pork Sliders</h2> - Slow cooked pork shoulder rubbed with tex mex spices, pulled and mixed in sauce, served with fries</p>
            <p className="font-medium text-text-grey font-serif text-lg px-10 py-5 leading-relaxed"><h2 className='text-bean'>Dukkah Crumbed Camembert</h2> - Cilli plum sauce, hazelnut and apple salad, pickled beetroot.</p>
            <p className="font-mediuum text-text-grey font-serif text-lg px-10 py-5 leading-relaxed"><h2 className='text-bean'>Blue Cod</h2> - Locally caught blue cod in a Speights beer batter served with fries, slaw & tartare.</p>
          </div>
        </div>

        <div>
          <h2 className='font-medium text-bean font-serif text-lg px-10 py-5 leading-relaxed text-center italic'>A range of 2-3 seasonal menu items will be added depending on locally sources produce, call or visit to find out more.</h2></div>
        </div>
      <img src='/images/stabbed.jpg' alt="Burger with a knife stuck in it" className="w-full"></img>
    </div>
  )
}

export default Menu
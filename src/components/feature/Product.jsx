"use client"

import Link from "next/link"
import { Fuggles } from "next/font/google"
import Image from "next/image"
import  Button  from "../ui/button"
import { useState } from "react"

const fuggles = Fuggles({
  subsets: ['latin'],
  weight: ['400']
})

const productDataDish = [
  {
    id: 1,
    title: 'Pasta',
    description: 'Indulge in the flavors of Italy with our exquisite pasta dishes. From classic favorites to innovative creations, each plate is a celebration of authentic Italian cuisine. Join us and savor the taste of Italy, one forkful at a time.',
    image: '/pastamenu.jpg',
    price: '$ 10.00'
  },
  {
    id: 2,
    title: 'Pasta',
    description: 'Indulge in the flavors of Italy with our exquisite pasta dishes. From classic favorites to innovative creations, each plate is a celebration of authentic Italian cuisine. Join us and savor the taste of Italy, one forkful at a time.',
    image: '/pastamenu.jpg',
    price: '$ 10.00'
  },
  {
    id: 3,
    title: 'Pasta',
    description: 'Indulge in the flavors of Italy with our exquisite pasta dishes. From classic favorites to innovative creations, each plate is a celebration of authentic Italian cuisine. Join us and savor the taste of Italy, one forkful at a time.',
    image: '/pastamenu.jpg',
    price: '$ 10.00'
  },
]

const productDataDrink = [
  {
    id: 1,
    title: 'ice water',
    description: 'Discover the delightful world of Italian drinks at our restaurant. From traditional espresso and cappuccino to iconic Italian sodas and aperitifs, our beverage selection complements your meal with authentic Italian flavors. Sip, savor, and enjoy the essence of Italy in every glass.',
    image: '/drinksmenu.jpg',
    price: '$ 5.00'
  },
  {
    id: 2,
    title: 'ice water',
    description: 'Discover the delightful world of Italian drinks at our restaurant. From traditional espresso and cappuccino to iconic Italian sodas and aperitifs, our beverage selection complements your meal with authentic Italian flavors. Sip, savor, and enjoy the essence of Italy in every glass.',
    image: '/drinksmenu.jpg',
    price: '$ 5.00'
  },
  {
    id: 3,
    title: 'ice water',
    description: 'Discover the delightful world of Italian drinks at our restaurant. From traditional espresso and cappuccino to iconic Italian sodas and aperitifs, our beverage selection complements your meal with authentic Italian flavors. Sip, savor, and enjoy the essence of Italy in every glass.',
    image: '/drinksmenu.jpg',
    price: '$ 5.00'
  },
]

const productDataDesserts = [
  {
    id: 1,
    title: 'ice cream',
    description: "Treat yourself to the decadence of Italian desserts. Our menu is a journey through a world of sweet delights, from classic tiramisu to indulgent cannoli. Each dessert is a taste of Italy's rich culinary heritage. End your meal on a sweet note with our delectable creations.",
    image: '/dessertsmenu.jpg',
    price: '$ 5.00'
  },
  {
    id: 2,
    title: 'ice cream',
    description: "Treat yourself to the decadence of Italian desserts. Our menu is a journey through a world of sweet delights, from classic tiramisu to indulgent cannoli. Each dessert is a taste of Italy's rich culinary heritage. End your meal on a sweet note with our delectable creations.",
    image: '/dessertsmenu.jpg',
    price: '$ 5.00'
  },
  {
    id: 3,
    title: 'ice cream',
    description: "Treat yourself to the decadence of Italian desserts. Our menu is a journey through a world of sweet delights, from classic tiramisu to indulgent cannoli. Each dessert is a taste of Italy's rich culinary heritage. End your meal on a sweet note with our delectable creations.",
    image: '/dessertsmenu.jpg',
    price: '$ 5.00'
  },
]

const Product = () => {

  // PRODUCT SECTION STATE
  const [section, setSection] = useState(productDataDish)

  return (
    <section>
      <div className='flex flex-col items-center justify-center border-b py-[90px] text-white bg-gradient-to-b from-white via-pink-300 to-pink-500 opacity-90'>

        {/* Product CONTENT */}
        <div className="flex flex-col items-center justify-center p-[30px] lg:p-[40px] max-w-[500px] md:max-w-[600px] lg:items-center text-black py-[130px]">
          <h1 className="items-center mb-5 text-2xl font-bold leading-none uppercase lg:text-4xl md:text-3xl">
            <span className={`${fuggles.className} text-6xl capitalize`}>discover</span><br />Our Flavours
          </h1>

          {/* Product DESCRIPTION */}
          {/* <div className="flex flex-col text-sm font-normal text-white/70">
            <p>
              Discover the essence of Italy through our mouthwatering dishes. Our menu is a journey through classic Italian 
              flavors, crafted with care and served with passion. Join us at Casa Di Pasta to savor the taste of Italy. Buon 
              appetito!
            </p>
          </div> */}
        </div>
        
        <div className="flex flex-col items-center justify-center text-center">

          {/* CONFIGURING PRODUCT BUTTON */}
          {/* <div className="flex gap-4 py-[50px]">
            <button  onClick={() => setSection(productDataDish)}>
              <Button 
                text={"Main Dish"}
                bgcolor={"bg-black"}
                textcolor={"text-white"}
              />
            </button>
            <button  onClick={() => setSection(productDataDrink)}>
              <Button 
                text={"Drinks"}
                bgcolor={"bg-black"}
                textcolor={"text-white"}
              />
            </button>
            <button  onClick={() => setSection(productDataDesserts)}>
              <Button 
                text={"Desserts"}
                bgcolor={"bg-black"}
                textcolor={"text-white"}
              />
            </button>
          </div> */}

          {/* PRODUCT SECTION */}
          <div className="flex flex-col gap-14 md:gap-5 md:flex-row">
            {section.map((item, index) => (
              <div key={index} className="max-w-[250px]">
                <div className="relative w-full h-[200px]">
                  <Image src={item.image} alt="" className="object-cover w-full h-full" fill/>
                </div>
                <div className="py-[10px]">
                  <h1 className="text-xl font-medium py-[10px] uppercase">
                    {/* {item.title} */}
                  </h1>
                  <p className="text-sm text-white/70 text-start py-[10px] h-[200px]">
                    {item.description}
                  </p>
                  <div className="md:hidden">
                    {item.price}
                  </div>
                </div>
                {/* <div className="md:hidden">
                <Link href="/menu">
                  <Button 
                    text={"view menu"}
                    bgcolor={"bg-black"}
                    textcolor={"text-white"}
                  />
                </Link>
                </div> */}
              </div>
            ))}
          </div>

          {/* PRODUCT PRICE & BUTTON FOR MEDIUM - LARGE SCREEN */}
          <div className="flex-row space-x-[150px] md:space-x-[150px] hidden md:flex ">
            {section.map((item, index) => (
              <div key={index} className="flex flex-col py-5 gap-7">
                {item.price}
                {/* <Link href="/menu">
                  <Button 
                    text={"view menu"}
                    bgcolor={"bg-black"}
                    textcolor={"text-white"}
                  />
                </Link> */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Product
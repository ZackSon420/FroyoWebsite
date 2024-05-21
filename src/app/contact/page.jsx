import Hero from "@/components/common/Hero"
import Booking from "@/components/feature/Booking"
import GoogleMapsLoader from "@/components/feature/GoogleMapsLoader"
import React from 'react';

const ContactPage = () => {
  const phoneNumber = '+60173247195';

  // Message to be sent to WhatsApp
  const message = 'Hi, Saya berminat untuk tempah Froyo Maykef!!';

  // URL for WhatsApp API
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <main className='bg-[url("/background.jpg")]'>

      {/* HERO */}
      {/* <Hero heropagetitle={"Contact"}  image={"/drinksmenu.jpg"}/> */}
      <div className="flex flex-col items-center justify-center bg-black border-y">

        {/* CONTACT INFORMATION */}
        <div className=" text-white max-w-[400px] p-[60px] text-sm flex flex-col gap-9 justify-center items-center">
          <h1 className="text-2xl font-semibold text-center">
            Contact Information
          </h1>
          <p className="text-center">
            Address: <span className="text-white/90">Pangsapuri Damai Residensi, Jalan 3/38A Bandar Baru Bangi, Selangor</span>
          </p>
          <p className="text-center">
            Phone: <span className="text-white/90">+ 6017 324 7195</span>
          </p>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
              Contact Us
            </button>
          </a>
          {/* <p className="text-center">
            Email: <span className="text-white/40">flacko.programming@gmail.com</span>
          </p> */}
        </div>
      </div>
      {/* <Booking /> */}
      <div>
      </div>
    </main>
  )
}

export default ContactPage

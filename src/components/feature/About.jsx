import Image from "next/image"
import { Fuggles } from "next/font/google"

// FONT FOR 'WELCOME' TEXT
const fuggles = Fuggles({
  subsets: ['latin'],
  weight: ['400']
})

const About = () => {
  return (
    <section>
      <div className='flex flex-col items-center justify-center border-b lg:flex-row lg:py-[90px] bg-gradient-to-b from-white via-pink-300 to-pink-500 opacity-90'>

        {/* ABOUT IMAGE */}
        <div className="relative w-full h-[500px] lg:w-[600px]">
          <Image src={"/froyo4.png"} alt="" className="object-cover" fill />
        </div>

        {/* ABOUT CONTENT */}
        <div className="flex flex-col items-center justify-center p-[30px] lg:p-[40px] max-w-[500px] md:max-w-[600px] lg:items-start text-black py-[130px]">
          <h1 className="items-center mb-5 text-2xl font-bold leading-none uppercase lg:text-4xl md:text-3xl">
            <span className={`${fuggles.className} text-6xl capitalize`}>About</span><br />Our services
          </h1>

          {/* ABOUT DESCRIPTION */}
          <div className="flex flex-col text-md font-normal text-black/100">
            <p>
              Welcome to MayKef Froyo Bangi, we specialize in providing the perfect frozen treat for any occasion. Whether you're planning a birthday party, corporate event, or just craving a delightful dessert, our premium kefir froyo is the answer.
              We offer a convenient catering service, allowing you to book our delicious froyo for your events. Simply place your order, and our dedicated team will ensure that your guests enjoy a memorable and refreshing experience. We handle everything from delivery to setup, so you can focus on hosting an unforgettable event.
              We deliver for occasions in <span class="font-bold">Bandar Baru Bangi</span>, <span class="font-bold">Kajang</span> & <span class="font-bold">Cyberjaya</span>.
            </p>
            <br />
            <p className="text-xl mb-4">
              Our Froyo is perfect for :
            </p>
            <ul className="list-disc list-inside">
              <li className="mb-2 font-bold text-l">Birthday parties</li>
              <li className="mb-2 font-bold">Weddings</li>
              <li className="mb-2 font-bold">School or Office events</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
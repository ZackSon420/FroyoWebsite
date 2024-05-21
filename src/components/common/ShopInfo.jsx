import Image from "next/image"

const ShopInfo = () => {
  return (
    <section className='bg-black border-white border-y'>
      <div className='flex flex-col gap-4 text-white md:flex-row p-[30px] justify-center '>

        {/* CALL INFO */}
        <div className="flex w-[350px] gap-4">
          <div className='relative w-[20px] h-[20px]'>
            <Image src='/phone.svg' alt='' fill/>
          </div>
          <div>
            <h1>
              60 + 17 324 7195
            </h1>
            <p className="max-w-[300px]">
              Contact us to book your order.
            </p>
          </div>
        </div>

        {/* LOCATION INFO */}
        <div className="flex w-[350px] gap-4">
          <div className='relative w-[20px] h-[20px]'>
            <Image src='/map.svg' alt='' fill/>
          </div>
          <div>
            <h1>
              Pangsapuri Damai Residensi Jalan 3/38A, Bandar Baru Bangi, Selangor
            </h1>
          </div>
        </div>

        {/* OPENING TIME INFO */}
        <div className="flex w-[350px] gap-4">
          <div className='relative w-[20px] h-[20px]'>
            <Image src='/clock.svg' alt='' fill/>
          </div>
          <div>
            <h1>
              Open Monday-Sunday
            </h1>
            <p className="max-w-[300px]">
              9:00am - 6:00pm
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ShopInfo
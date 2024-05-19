import React from 'react'
import Gallery02 from '/public/images/stock/gallery-02.jpg'
import Image from 'next/image';

const DashboardOpt = () => {
  return (
    <div className='px-36'>
      <div className="flex flex-row">
        <Image
          src={Gallery02}
          className=""
          width={500}
          height={500}
          priority
          alt="Image of solution"
          sizes="(min-width: 1536px) 40rem, (min-width: 1280px) 36rem, (min-width: 768px) 33.33vw"
        />
        <div className='pl-20 w-2/4'>
          <h3 className='text-sm py-5'>Dashboard Option 1</h3>
          <p className='text-2xl pb-3'>Dashboard Option Title</p>
          <p className='text-justify'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia
            totam aut hic a recusandae, aperiam eaque asperiores aliquid dicta
            blanditiis veritatis, voluptate unde iste reiciendis tenetur maxime
            incidunt mollitia excepturi.
          </p>
        </div>
      </div>
      <div className="flex flex-row py-10">
        <div className='pr-20 w-2/4'>
          <h3 className='text-sm py-5'>Dashboard Option 1</h3>
          <p className='text-2xl pb-3'>Dashboard Option Title</p>
          <p className='text-justify'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia
            totam aut hic a recusandae, aperiam eaque asperiores aliquid dicta
            blanditiis veritatis, voluptate unde iste reiciendis tenetur maxime
            incidunt mollitia excepturi.
          </p>
        </div>
        <Image
          src={Gallery02}
          className=""
          height={500}
          width={500}
          priority
          alt="Image of solution"
          sizes="(min-width: 1536px) 40rem, (min-width: 1280px) 36rem, (min-width: 768px) 33.33vw"
        />
      </div>
    </div>
  )
}

export default DashboardOpt

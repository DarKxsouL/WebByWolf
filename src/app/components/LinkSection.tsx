import Logo from '../reusable/Logo'
import { useState } from "react";
import ArrowButton from '../reusable/ArrowButton';

function LinkSection () {
  const [btnHovered, setBtnHovered] = useState(false)
  return (
    <>
      <div className='w-full h-dvh'>
        <div className='w-full h-3/5 flex flex-col justify-center items-center gap-3'>
          <Logo />
          <h1 className='animate-reveal text-2xl font-bold'>
            LOREM IPSUM DOLOR SIT AMET CONSECTETUR. DUI.
          </h1>
          <p className='animate-reveal text-lg w-150 text-center'>
            Lorem ipsum dolor sit amet consectetur. Nisl faucibus vitae
            porttitor pharetra tempor quis arcu. Ipsum nullam.
          </p>
          <ArrowButton className='shakyButton' btnHovered={btnHovered} setBtnHovered={setBtnHovered} placeHolder={'Lorem Ipsum'} varient={'blue'} />
        </div>
        <div className='flex justify-between w-full h-2/5 px-15 py-5 bg-gray-900'>
          <Logo />
          <div className='flex gap-x-30 text-white px-20'>
            <div className='flex flex-col whitespace-nowrap'>
                <strong className='header-slider text-xl py-3'>Lorem ipsum</strong>
                <span className='link-slider'>Lorem ipsum</span>
                <span className='link-slider'>Lorem ipsum</span>
                <span className='link-slider'>Lorem ipsum</span>
                <span className='link-slider'>Lorem ipsum</span>
                <span className='link-slider'>Lorem ipsum</span>
            </div>
            <div className='flex flex-col whitespace-nowrap'>
                <strong className='header-slider text-xl py-3'>Lorem ipsum</strong>
                <span className='link-slider'>Lorem ipsum</span>
                <span className='link-slider'>Lorem ipsum</span>
                <span className='link-slider'>Lorem ipsum</span>
                <span className='link-slider'>Lorem ipsum</span>
                <span className='link-slider'>Lorem ipsum</span>
            </div>
            <div className='flex flex-col whitespace-nowrap'>
                <strong className='header-slider text-xl py-3'>Lorem ipsum</strong>
                <span className='link-slider'>Lorem ipsum</span>
                <span className='link-slider'>Lorem ipsum</span>
                <span className='link-slider'>Lorem ipsum</span>
                <span className='link-slider'>Lorem ipsum</span>
            </div>
            <div className='flex flex-col whitespace-nowrap'>
                <strong className='header-slider text-xl py-3'>Lorem ipsum</strong>
                <span className='link-slider'>Lorem ipsum</span>
                <span className='link-slider'>Lorem ipsum</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default LinkSection

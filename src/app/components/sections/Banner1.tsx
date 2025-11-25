import ArrowButton from "@/app/reusable/ArrowButton";
import Logo from "@/app/reusable/Logo"
import { useState } from "react";


function Banner1() {
  const [btnHovered, setBtnHovered] = useState(false)
  
  return (
    <>
    
      <div className="relative flex flex-col justify-center items-center gap-y-5 w-full h-dvh bg-cover bg-center bg-[url('/Banner_1.png')]">
        <div className="absolute top-15 left-15"><Logo/></div>
        <div className="animate-slide-bottom-fast text-white text-4xl font-bold w-250 text-center">LOREM IPSUM DOLOR SIT AMET CONSECTETUR. QUIS ADIPISCING PURUS EGESTAS ALIQUAM VIVERRA MI.</div>
        <div className="animate-slide-bottom-fast text-white w-200 text-center">Lorem ipsum dolor sit amet consectetur. Mattis justo euismod volutpat vestibulum nisi at ac risus amet. Mi accumsan sagittis justo pellentesque id sed. Id tellus id luctus id. At quis nunc libero urna arcu vulputate sed ut. Nisi porta massa diam condimentum nulla quam.</div>
        <div className="animate-slide-bottom-fast text-white w-200 text-center">Lorem ipsum dolor sit amet consectetur. Volutpat in dictum nec condimentum ultrices non. Ornare semper in tincidunt pellentesque cras mauris in vitae. At viverra quis eu malesuada vel et porttitor. Nulla luctus quam lacus lacus non at. Tincidunt morbi feugiat a pulvinar euismod natoque nulla ligula. Tincidunt cursus vitae leo.</div>
        <ArrowButton className="shakyButton" btnHovered={btnHovered} setBtnHovered={setBtnHovered} varient={'custom'} placeHolder={'Lorem Ipsum'} />
        </div>
    
    </>
  )
}

export default Banner1

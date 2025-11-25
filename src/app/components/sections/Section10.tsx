import ArrowButton from "@/app/reusable/ArrowButton"
import { Card, CardContent, CardTitle } from "@/components/ui/card"
import { useState } from "react";

function Section10() {
  const [btnHovered, setBtnHovered] = useState(false)
  console.log(`[${new Date().toLocaleTimeString()}] Section10 rendered`);
  return (
    <>
      <div className="relative w-full h-dvh bg-gray-100 p-20 my-50">
        <h1 className="animate-slide-left-plain font-bold text-[42px] w-120 leading-[100%] pb-5 text-[#1959AC] ">Lorem ipsum dolor sit amet consectetur. Dignissim tellus.</h1>
        <p className="animate-slide-right w-1/2 pb-5">Lorem ipsum dolor sit amet consectetur. In malesuada morbi mi blandit laoreet urna sapien quam pulvinar. Dolor aliquet est tortor tincidunt ultricies feugiat mauris. Aliquam platea turpis porta nisl felis. Massa in facilisis semper libero eget eu quisque bibendum platea. Tortor fames.</p>
        <ArrowButton className="shakyButton" btnHovered={btnHovered} setBtnHovered={setBtnHovered} varient={'blue'} placeHolder={'Lorem Ipsum'} />
        <img src="./Section10_Image.png" className="animate-slide-bottom absolute -top-20 right-5 onject-contain" />
        <Card className="animate-slide-bottom absolute -bottom-30 left-20 p-10 rounded-none w-130 z-10 h-100">
            <img src="./push_pin.png" className="object-contain absolute top-5 right-5" />
            <CardTitle className="text-[#222222] font-semibold text-xl py-3 ">Lorem ipsum dolor sit</CardTitle>
            <CardContent className="text-[#222222] pb-1">Lorem ipsum dolor sit amet consectetur. Habitant vestibulum vitae amet habitasse semper.</CardContent>
            <CardContent className="text-[#222222] pb-1">Lorem ipsum dolor sit amet consectetur. Egestas congue mattis ut placerat vitae amet suspendisse fermentum velit. Nibh dolor nunc id tristique sit.</CardContent>
            <CardContent className="text-[#222222] pb-1">Lorem ipsum dolor sit amet consectetur. Hac netus consectetur amet quisque scelerisque facilisi. Ultrices lectus viverra pharetra commodo.</CardContent>
        </Card>
        <footer className="absolute bottom-0 left-0 w-9/10 h-5 bg-gradient-to-r from-[#043898] via-[#079902] to-[#170041] "></footer>
      </div>
    </>
  )
}

export default Section10

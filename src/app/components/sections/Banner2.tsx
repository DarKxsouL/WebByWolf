import Logo from "@/app/reusable/Logo"

function Banner2() {
  console.log(`[${new Date().toLocaleTimeString()}] Banner2 rendered`);
  return (
    <>
      <div className="relative flex justify-center items-center w-full h-dvh bg-cover bg-center bg-[url('/banner_2.png')]">
        <div className="absolute top-15 left-15"><Logo/></div>
        <div className="animate-reveal-slow uppercase w-200 text-center pb-30 text-5xl text-white font-bold">dolor sit amet consectetur. Quis adipiscing purus egestas aliquam viverra mi. dolor sit amet consectetur. Quis adipiscing </div>
      </div>
    </>
  )
}

export default Banner2

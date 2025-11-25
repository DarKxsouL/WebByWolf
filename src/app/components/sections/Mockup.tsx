
function Mockup() {
  console.log(`[${new Date().toLocaleTimeString()}] Mockup rendered`);
  return (
    <>
      <div className="w-full h-80vh bg-gray-100 flex justify-between items-center my-30">
        <div className="animate-slide-left-plain w-1/2 p-15">
            <h2 className="text-2xl font-bold text-blue-600 py-3">Lorem Ipsum</h2>
            <h1 className="text-4xl font-bold py-3">Lorem ipsum dolor sit amet</h1>
            <p className="py-3">Lorem ipsum dolor sit amet consectetur. Vulputate amet aliquet morbi suspendisse convallis. Urna a urna lectus donec felis risus duis pellentesque. Pellentesque ultricies ipsum.</p>
            <div className="flex gap-x-5 pt-10">
                <img src="./Google_Play_Store_badge_EN.svg 1.png" alt="" />
                <img src="./Download_on_the_App_Store_Badge.svg 1.png" alt="" />
            </div>
        </div>
        <div className="animate-slide-right w-1/2">
            <img src="./screen.png" className=" object-contain"/>
        </div>
      </div>
    </>
  )
}

export default Mockup

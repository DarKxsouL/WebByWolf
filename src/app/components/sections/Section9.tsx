import ArrowButton from "@/app/reusable/ArrowButton";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { useState } from "react";

function Section9() {
  const [toggleValue, setToggleValue] = useState("research")
  const [btnHovered, setBtnHovered] = useState(false)
  return (
    <>
      <div className="relative w-full h-dvh flex items-center px-16">
        <img src="./Section9Icons.png" className="absolute top-1/2 left-1/2 -translate-1/2 object-contain -z-10" />
        <div className="w-1/2">
            <h1 className="animate-reveal uppercase font-bold text-[42px] py-5">Lorem ipsum dolor sit amet </h1>
            <ToggleGroup className="animate-reveal" type="single" variant={'outline'} defaultValue="research">
                <ToggleGroupItem onClick={() => setToggleValue('research')} value="research">
                    <span className="w-50">Research</span>
                </ToggleGroupItem>
                <ToggleGroupItem onClick={() => setToggleValue('plan')} value="plan">
                    <span className="w-50">Plan</span>
                </ToggleGroupItem>
                <ToggleGroupItem onClick={() => setToggleValue('design')} value="design">
                    <span className="w-50">Design</span>
                </ToggleGroupItem>
            </ToggleGroup>
            <div className="animate-reveal flex w-165">
              { toggleValue=='research' &&
            <p className="w-165 py-5">Egestas fringilla aliquam leo, habitasse arcu varius lorem elit. Neque pellentesque donec et tellus ac varius tortor, bibendum. Nulla felis ac turpis at amet. Purus malesuada placerat arcu at enim elit in accumsan.</p>
              }
              { toggleValue=='plan' &&
              <p className="w-165 py-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit nihil fuga reiciendis tempore voluptate inventore, neque placeat quibusdam harum nisi ipsa provident dolorem modi at mollitia esse corporis, velit veniam?</p>
              }
              { toggleValue=='design' &&
              <p className="w-165 py-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni eius optio non, corporis ducimus blanditiis aut dolorem voluptate id beatae quaerat nihil natus, ad libero officia neque numquam. Praesentium, accusantium!</p>
              }
              </div>
            <ArrowButton className="shakyButton text-blue-600" btnHovered={btnHovered} setBtnHovered={setBtnHovered} varient={'ghost'} placeHolder={'Lorem Ipsum'} />
        </div>
        <div className="animate-slide-right w-1/2">
            <img src="./handshake.webp" className="object-contain float-right" />
        </div>
      </div>
    </>
  )
}

export default Section9

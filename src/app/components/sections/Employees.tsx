'use-client'
import { Card } from '@/components/ui/card'
import { ArrowLeftCircle, ArrowRightCircle } from 'lucide-react'
import { useEffect, useState } from 'react';
import ArrowButton from "@/app/reusable/ArrowButton";

const CARD_WIDTH_PX = 300;
const GAP_WIDTH_PX = 40;
const MOVE_PER_CARD = CARD_WIDTH_PX + GAP_WIDTH_PX;

function Employees () {
  const [counter, setCounter] = useState(0)
  const [btnHovered, setBtnHovered] = useState(false)

  useEffect(() => {
    
  }, [counter])
  
  const emps = [
    {
      id: '01',
      icon: '/Icon1.png',
      description:
        'Purus maecenas quis elit eu, aliquet. Tellus porttitor ut sollicitudin sit non fringilla. Quam nunc volutpat senectus neque eget amet pharetra, euismod. Tempus, nunc, molestie imperdiet curabitur commodo euismod.',
      profile: '/profile1.png',
      alt: 'Profile picture of Jane Cooper',
      name: 'Jane Cooper'
    },
    {
      id: '02',
      icon: '/Icon2.png',
      description:
        'Purus maecenas quis elit eu, aliquet. Tellus porttitor ut sollicitudin sit non fringilla. Quam nunc volutpat senectus neque eget amet pharetra, euismod. Tempus, nunc, molestie imperdiet curabitur commodo euismod.',
      profile: '/profile2.png',
      alt: 'Profile picture of Ralph Edwards',
      name: 'Ralph Edwards'
    },
    {
      id: '03',
      icon: '/Icon3.png',
      description:
        'Purus maecenas quis elit eu, aliquet. Tellus porttitor ut sollicitudin sit non fringilla. Quam nunc volutpat senectus neque eget amet pharetra, euismod. Tempus, nunc, molestie imperdiet curabitur commodo euismod.',
      profile: '/profile3.png',
      alt: 'Profile picture of Courtney Henry',
      name: 'Courtney Henry'
    },
    {
      id: '04',
      icon: '/Icon4.png',
      description:
        'Purus maecenas quis elit eu, aliquet. Tellus porttitor ut sollicitudin sit non fringilla. Quam nunc volutpat senectus neque eget amet pharetra, euismod. Tempus, nunc, molestie imperdiet curabitur commodo euismod.',
      profile: '/profile4.png',
      alt: 'Profile picture of Cameron Williamson',
      name: 'Cameron Williamson'
    },
    {
      id: '05',
      icon: '/Icon4.png',
      description:
        'Purus maecenas quis elit eu, aliquet. Tellus porttitor ut sollicitudin sit non fringilla. Quam nunc volutpat senectus neque eget amet pharetra, euismod. Tempus, nunc, molestie imperdiet curabitur commodo euismod.',
      profile: '/profile4.png',
      alt: 'Profile picture of Cameron Williamson',
      name: 'Cameron Williamson'
    }
  ]

  const MAX_COUNTER = emps.length - 4;

   const incrementCounter = () => {
    console.log('clicked increment')
    if(counter < MAX_COUNTER)
    {
      setCounter(counter + 1)
    }
  }
  const decrementCounter = () => {
    console.log('clicked decrement')
    if(counter> 0){
      setCounter(counter - 1)
    }
  }

  const transformX = `translateX(-${counter * MOVE_PER_CARD}px)`;
  return (
    <>
      <div className='w-full h-[105vh] bg-blue-500 my-10'>
        <header className='flex gap-x-30 items-center px-[80px] py-[40px]'>
          <div className='animate-slide-left-plain w-[814px]'>
            <h3 className='font-semibold text-white text-2xl tracking-[-4%]'>
              Join other Sun harvesters
            </h3>
            <h1 className='font-bold text-white text-[42px] tracking-[-2%] '>
              Lorem ipsum dolor sit amet
            </h1>
            <p className='text-lg text-white '>
              Dui euismod iaculis libero, aliquet vitae et elementum porttitor.
              Eleifend mi tristique condimentum congue fusce nunc, donec magnis
              commodo.
            </p>
          </div>
          <ArrowButton className="shakyButton" btnHovered={btnHovered} setBtnHovered={setBtnHovered} varient={'custom'} placeHolder={'Lorem Ipsum'} />
        </header>

        {/* slider */}
        <div className='w-full h-115'>
          <div className='w-24/25 h-110 flex gap-x-10 py-5 pl-5 ml-15 overflow-scroll'>
            {emps.map((emp, index) => (
              <Card
                key={emp.id}
                style={{ 
                  transform: transformX,
                animationDelay: `${index * 0.2}s`
            }}
                className={`animate-left-reveal min-w-75 px-5 h-9/10 transition-all duration-400 ease-in-out cursor-pointer transform hover:scale-y-110 hover:scale-x-105`}
                
              >
                <img className='object-contain w-10' src={emp.icon} />
                <p>{emp.description}</p>
                <div className='flex gap-x-5 items-center'>
                  <img className='object-contain' src={emp.profile} alt={emp.alt} />
                  <span>{emp.name}</span>
                </div>
              </Card>
            ))}
          </div>
          <div className='flex gap-x-5 px-20'>
            <ArrowLeftCircle
              onClick={decrementCounter}
              className='transform scale-150 cursor-pointer transition-all duration-300 ease-in-out hover:scale-180 hover:-translate-x-2'
              color='white'
            />
            <ArrowRightCircle
              onClick={incrementCounter}
              className='transform scale-150 cursor-pointer transition-all duration-300 ease-in-out hover:scale-180 hover:translate-x-2'
              color='white'
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Employees

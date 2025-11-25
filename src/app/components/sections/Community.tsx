'use-client'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardTitle } from '@/components/ui/card'
import { ArrowRight } from 'lucide-react'
import { useState, useEffect } from 'react';

function Community () {
  const [counter, setCounter] = useState(0);
  
  const communities = [
    {
      id: '01',
      image: './adventure_travel.webp',
      title: 'Artist & Investor',
      description: 'Enim sagittis, sit porttitor morbi lobortis amet, libero adipiscing auctor. Malesuada tristique libero, id netus tincidunt. Egestas ac arcu amet nisl quis est ...'
    },
    {
      id: '02',
      image: './adventure_travel.webp',
      title: 'Travellers & Influencers',
      description: 'Enim sagittis, sit porttitor morbi lobortis amet, libero adipiscing auctor. Malesuada tristique libero, id netus tincidunt. Egestas ac arcu amet nisl quis est ...'
    },
    {
      id: '03',
      image: './adventure_travel.webp',
      title: 'Tourists & Guides',
      description: 'Enim sagittis, sit porttitor morbi lobortis amet, libero adipiscing auctor. Malesuada tristique libero, id netus tincidunt. Egestas ac arcu amet nisl quis est ...'
    },
    {
      id: '04',
      image: './adventure_travel.webp',
      title: 'Nature Explorers',
      description: 'Enim sagittis, sit porttitor morbi lobortis amet, libero adipiscing auctor. Malesuada tristique libero, id netus tincidunt. Egestas ac arcu amet nisl quis est ...'
    }
  ]

  const max = communities.length - 1

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCounter((currentCounter) => {
        if (currentCounter === max) {
          return 0; 
        }
        return currentCounter + 1;
      });
    }, 5000); 

    return () => clearInterval(intervalId);
  }, [max]);

  const MOVE_PER_SLIDE = 1560;
  const sliderTransform = `translateX(-${counter * MOVE_PER_SLIDE}px)`;
  return (
    <>
      <div className='w-full h-dvh my-30 px-16'>
        <h1 className='animate-reveal font-bold text-[42px] tracking-[-2%] text-center uppercase '>
          Lorem ipsum dolor sit amet
        </h1>
        <p className='animate-reveal text-center text-xl tracking-[0%] leading-[25px] py-10'>
          Aliquet sed nulla tincidunt pulvinar sed fames sit facilisis dictumst.
          Ornare faucibus quis velit fringilla aliquam ultricies. Malesuada ut
          aliquam at ac est nisi, interdum etiam dignissim. Sed ut vestibulum
          eget purus ornare. Risus elit et fringilla habitant ut facilisi.
        </p>

        <div className='flex w-full h-110 items-center gap-x-90 pl-30 overflow-hidden'>
          {communities.map(community => (
            <div key={community.id} className={`flex w-400 items-center transition-all duration-800 ease-in-out `} style={{ transform: sliderTransform }}>
              <img src={community.image} className='animate-slide-left-plain object-contain w-250' />
              <Card className=' animate-slide-right w-300 h-60 rounded-sm p-8 z-10 -translate-x-20'>
                <CardTitle className='font-semibold text-2xl text-gray-600 tracking-[6%] '>
                  {community.title}
                </CardTitle>
                <CardContent className='leading-[25px]'>
                  {community.description}
                </CardContent>
                <Button
                  id={community.id}
                  className='w-fit text-[#1959AC] cursor-pointer hover:text-[#1959AC] hover:font-bold'
                  size={'zero'}
                  variant={'ghost'}
                >
                  Read Full Story <ArrowRight />
                </Button>
              </Card>
            </div>
          ))}
        </div>
        <div className='w-full flex justify-center'>
        <div className='flex gap-x-2 items-center overflow-scroll w-28 h-12'>
          {
            communities.map((community, index) => (
              <div key={community.id} className={`w-4 h-4 rounded-full transition-all duration-800 ease-in-out ${index === counter ? 'w-10 bg-[#1959AC] ' : 'w-4 bg-[#80B0ED]'}`}></div>
            ))
          }
        </div>
        </div>
      </div>
    </>
  )
}

export default Community

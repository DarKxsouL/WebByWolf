import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import type { ComponentProps } from 'react'

import { cn } from "@/lib/utils"


function ArrowButton({ btnHovered, setBtnHovered, placeHolder, varient, className } : { btnHovered: boolean, setBtnHovered: (v: boolean) => void, placeHolder: string, varient?: ComponentProps<typeof Button>['variant'], className?: string }) {
  return (
    <>
      <Button onMouseOver={()=> setBtnHovered(true)} onMouseOut={()=> setBtnHovered(false)} variant={varient} size={'custom'} className={cn("rounded", className)}>{placeHolder}
              <ArrowRight className={`transform transition-all duration-300 ease-in-out 
                ${btnHovered? 'translate-x-2' : 'translate-x-0'} `}/>
            </Button>
    </>
  )
}

export default ArrowButton

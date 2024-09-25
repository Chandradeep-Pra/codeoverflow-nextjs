import React from 'react'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import Image from 'next/image'
import Link from 'next/link'
  

const  Mobilenav = () => {
  return (
    <Sheet>
  <SheetTrigger asChild>
    <Image 
        src='/assets/icons/hamburger.svg'
        alt='menu'
        width={36}
        height={36}
        className='invert-colors sm:hidden'
    />
  </SheetTrigger>
  <SheetContent side='left' className='background-light900_dark200 border-none'>
  <Link href="/" className='flex items-center gap-1'>
            <Image 
                src="/assets/images/site-logo.svg"
                width={23}
                height={23}
                alt='codeflow'
            />
            <p className='h2-bold font-spaceGrotesk text-dark100_light900'>Code <span className='text-primary-500'> Flow</span></p>
    </Link>
    <div>
        
    </div>
  </SheetContent>
</Sheet>

  )
}

export default  Mobilenav
"use client"

import { Input } from '@/components/ui/input';
import Image from 'next/image';
import React from 'react'


const GlobalSearchBar = () => {
  return (
    <div className={`background-light800_darkgradient flex min-h-[56px] grow items-center gap-4 rounded-[10px] px-4 ${addinClasses}`}>
        <Image 
        src='/assets/icons/search.svg'
        alt='search'
        width={24}
        height={24}
        className='cursor-pointer'
    />
    <Input 
        className='paragraph-regular no-focus placeholder text-dark400_light700 border-none shadow-none outline-none'
        type='text' 
        placeholder="Search globally"
        value=""
        onChange={() => {}}
        />
    </div>
  )
}

export default GlobalSearchBar
"use client"

import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

export default function Nav() {
  return (
    <div className='flex flex-row w-full fixed top-0 z-40 px-40 py-4 backdrop-blur-3xl bg-white bg-opacity-50'>
        <Link href="/" className='flex flex-row items-center gap-2 text-lg font-semibold'><Image src='/logo.png' alt='' width={40} height={40}/>Hyper Updates</Link>
        <div className='ml-auto flex flex-row gap-x-5 text-base font-medium'>
            <Link href="/newproject">New Project</Link>
            <Link href="/projects">My Projects</Link>
            {/* <Link href="/">Home</Link> */}

        </div>
    </div>  
  )
}

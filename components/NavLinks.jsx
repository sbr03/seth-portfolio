"use client";

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  {
    name: 'home',
    path: '/',
  },
  {
    name: 'about',
    path: '/about',
  },
  {
    name: 'resume',
    path: '/resume',
  },
  {
    name: 'projects',
    path: '/projects',
  },
  {
    name: 'contact',
    path: '/contact',
  }
]

const NavLinks = ({containterStyle}) => {
  const pathname = usePathname()
  return (
    <ul className={containterStyle}>
      {links.map((link, index) => {

        //determine if the current link matches the active route
        const isActive = pathname === link.path
        //calculate the number of characters in the link name
        const charLength = link.name.length
        //set the line width based on the number of characters in the link name
        const lineWidth = charLength > 5 ? "after:w-[120%]" : "after:w-[90%]"
        return (
          <Link href={link.path} key={index} className={`relative text-lg uppercase
           text-white ${isActive && `after-content-[''] after:block after:absolute 
           after:left-0 after:top-1/2 ${lineWidth} after:h-[4px] after:bg-accent
           after:-translate-y-1/2 after:z-0`}>`}>
            <span className='relative z-10'>{link.name}</span>
          </Link>
        )
      })}
    </ul>
  )
}

export default NavLinks

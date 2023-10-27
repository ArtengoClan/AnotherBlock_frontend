import Link from 'next/link'
import React from 'react'
import sl from './navbar.module.css'
import DarkModeToggle from '../DarkModeToggle/DarkModeToggle'

const links = [
    {
        id:1,
        title:'Home',
        url:'/'
    },
    {
        id:2,
        title:'Portfolio',
        url:'/portfolio'
    },
    {
        id:4,
        title:'About',
        url:'/about'
    },
    {
        id:5,
        title:'Contact',
        url:'/contact'
    },
]

const Navbar = () => {
  return (
    <div className={sl.container}>
        <Link href='/' className={sl.logo}>Next.js</Link>
        <div className={sl.links}>
        <DarkModeToggle />
            {links.map(link => (
                <Link key={link.id} href={link.url} className={sl.link}>{link.title}</Link>
            ))}
        </div>
    </div>
  )
}

export default Navbar
'use client'

import React, { useContext } from 'react'
import sl from './darkModeToggle.module.css'
import { ThemeContext } from '@/context/ThemeContext'

const DarkModeToggle = () => {
    const {toggle,mode} = useContext(ThemeContext)
  return (
    <div className={sl.container} onClick={toggle}>
        <div className={sl.icon}>🌙</div>
        <div className={sl.icon}>🔆</div>
        <div className={sl.ball}  style = {mode === 'light' ? {left: '2px'} : {right: '2px'}}/>
    </div>
  )
}

export default DarkModeToggle
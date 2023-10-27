import React from 'react'
import sl from './button.module.css'
import Link from 'next/link'

const Button = ({text, url}) => {
  return (
    <Link href={url}>
        <button className={sl.container}>{text}</button>
    </Link>
  )
}

export default Button
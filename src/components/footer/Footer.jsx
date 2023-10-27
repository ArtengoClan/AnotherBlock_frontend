import React from 'react'
import sl from './footer.module.css'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className={sl.container}>
        <div>All rights reserved</div>
        <div className={sl.social}>
          <Image src='/1.png' height={15} width={15} alt='' />
          <Image src='/2.png' height={15} width={15} alt='' />
          <Image src='/3.png' height={15} width={15} alt='' />
          <Image src='/4.png' height={15} width={15} alt='' />
        </div>
    </div>
  )
}

export default Footer
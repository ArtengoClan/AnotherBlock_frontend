import React from 'react'
import sl from './portfolio.module.css'
import Link from 'next/link'

const Portfolio = () => {
  return (
    <div className={sl.contaainer}>
      <h1 className={sl.selectTitle}>Choose a gallery</h1>
      <div className={sl.items}>
        <Link href='/portfolio/illustrations' className={sl.item}>
          <span className={sl.title}>Illustrations</span>
        </Link>
        <Link href='/portfolio/websites' className={sl.item}>
          <span className={sl.title}>Websites</span>
        </Link>
        <Link href='/portfolio/applications' className={sl.item}>
          <span className={sl.title}>Applications</span>
        </Link>
      </div>
    </div>
  )
}

export default Portfolio
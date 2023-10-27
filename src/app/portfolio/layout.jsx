import React from 'react'
import sl from './portfolio.module.css'

const Layout = ({children}) => {
  return (
    <div>
        <h1 className={sl.mainTitle}>Our Works</h1>
        {children}
    </div>
  )
}

export default Layout
import React from 'react'
import sl from './page.module.css'
import Button from '@/components/button/Button'
import Image from 'next/image'
import {items} from './data.js'
import { notFound } from 'next/navigation'

const getData = (cat) => {
  const data = items[cat]

  if (data) {
    return data
  }

  return notFound()
}

const Category = ({ params }) => {
  // console.log(params) - высветится в терминале

  const data = getData(params.category)
  return (
    <div className={sl.container}>
      <h1 className={sl.catTitle}>{params.category}</h1>
      {data.map(item => (
        <div className={sl.item} key={item.id}>
        <div className={sl.content}>
          <h1 className={sl.title}>{item.title}</h1>
          <p className={sl.desc}>{item.desc}</p>
          <Button text='See More' url='#'/>
        </div>
        <div className={sl.imgContainer}>
          <Image 
            className={sl.img}
            fill={true}
            src={item.image}
            alt=''
          />
        </div>
      </div>
      ))}
    </div>
  )
}

export default Category


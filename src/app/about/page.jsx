import React from 'react'
import sl from './about.module.css'
import Image from 'next/image'
import Button from '@/components/button/Button'

const About = () => {
  return (
    <div className={sl.container}>
      <div className={sl.imgContainer}>
        <Image
          src='https://images.pexels.com/photos/2387793/pexels-photo-2387793.jpeg?auto=compress&cs=tinysrgb&w=1200'
          fill={true}
          alt=''
          className={sl.img}
         />
         <div className={sl.imgText}>
          <h1 className={sl.imgTitle}>Digital Storytellers</h1>
          <h2 className={sl.imgDesc}>Handcrafting award winning digital experiences</h2>
         </div>
      </div>
      <div className={sl.textContainer}>
        <div className={sl.item}>
          <h1 className={sl.title}>Who Are We?</h1>
          <p className={sl.desc}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
          </p>
        </div>
        <div className={sl.item}>
          <h1 className={sl.title}>Who Are We?</h1>
          <p className={sl.desc}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
          </p>
          <Button url='/contact' text='Contact' />
        </div>
      </div>
    </div>
  )
}

export default About
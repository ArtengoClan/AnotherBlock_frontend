import React from 'react'
import sl from './contact.module.css'
import Image from 'next/image'
import Button from '@/components/button/Button'

export const metadata = {
  title: 'Next.js Contact Information',
  description: 'This is contact page',
}

const Contact = () => {
  return (
    <div className={sl.container}>
      <h1 className={sl.title}>Let's Keep in Touch</h1>
      <div className={sl.content}>
        <div className={sl.imgContainer}>
          <Image 
            src='/contact.png'
            alt=''
            fill={true}
            className={sl.image}
          />
        </div>
        <form className={sl.form}>
          <input type='text' placeholder='name' className={sl.input}/>
          <input type='text' placeholder='email' className={sl.input}/>
          <textarea className={sl.textArea} placeholder='message' cols='30' rows='10'></textarea>
          <Button url='#' text='Send' />
        </form>
      </div>
    </div>
  )
}

export default Contact
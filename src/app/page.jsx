import Image from 'next/image'
import sl from './page.module.css'
import Hero from 'public/hero.png'
import Button from '@/components/button/Button'

export default function Home() {
  return (
    <div className={sl.container}>
      <div className={sl.item}>
        <h1 className={sl.title}>Better design for your digital products</h1>
        <p className={sl.desc}>
          Turning your Idea into Reality. We bring together the teams
          from the global tech industry
        </p>  
        <Button url='/portfolio' text='See Our Works'/>
      </div>
      <div className={sl.item}>
        <Image src={Hero} alt='' className={sl.img} />
      </div>
    </div>
  )
}

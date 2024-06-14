import Image from 'next/image'
import styles from './page.module.css'
import { Header } from '@/components/Header'
import { First } from '@/components/Home'
import { Academic } from '@/components/Academic'
import { Industry } from '@/components/Industry'
import { Contact } from '@/components/Contact'


export default function Home() {
  return (
    <main className={styles.main}>
      <Header className={styles.header} />
      <First />
      <Academic />  
      <Industry />  
      <Contact/>
       
    </main>
  )
}

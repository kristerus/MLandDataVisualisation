import React from 'react'
import styles from '../app/page.module.css'
import Image from 'next/image'


export const Academic = (title,description,imageLink) => {
  return (
    <div id="#academic">
      <h1>Academic</h1>
      <p>Academic description</p>
      <Image src="/academic.jpg" alt="Academic" width={10 } height={10} />
    </div>
  )
}

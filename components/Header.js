import React from 'react'
import styles from '../app/page.module.css'


export const Header = () => {
  return (
      <div className={styles.headerdiv}>
          <ul className={styles.header}>
             <li > <a href="#home" className={styles.listelem}>Home</a></li>
             <li className={styles.listelem}> <a href="#academic">Academic Projects</a></li>
              <li className={styles.listelem}><a href="#industry">Industry Projects</a></li>
             <li className={styles.listelem}> <a href="#contact">Contact</a></li>
          </ul>
    </div>
  )
}

import React from 'react'
import styles from '../app/page.module.css'


export const Contact = () => {
  return (
      <div id="#contact" className={styles.contact}>
          <h2 style={{textAlign:"center",marginTop:"20px"}}>Contact Information</h2>
            <div className={styles.contactdivider}>
                <div className={styles.leftside}>
                    <ul className={styles.homeul}>
                      <li className={styles.contactli}>Email: <a href="mailto:services@kristiandhimitri.com">Services@kristiandhimitri.com</a></li>
                      <li className={styles.contactli}>Phone Number: <a href="tel:+4915235839262">+49 15235839262</a></li>
                  </ul>
              </div>
              <div className={styles.rightside}>
                <ul className={styles.contactul}>
                 <li className={styles.contactli}>Instagram:  <a href="https://www.instagram.com/kristian_dhimitri" target="_blank">Kristian Dhimitri</a></li>
                 <li className={styles.contactli}>GitHub:  <a href="https://www.github.com/kristerus" target="_blank">Kristian Dhimitri</a></li>
                </ul>
              </div>
          </div>
          <div className={styles.end}>Copyright ©KristianDhimitri 2024</div>
    </div>
  )}

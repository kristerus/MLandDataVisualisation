import React from 'react'
import Image from 'next/image'
import styles from '../app/page.module.css'



export const First = () => {
  return (
      <div id="#home">
          <div className={styles.divider}>
              <div className={styles.leftside}>
               <h2 className={styles.homeul}>Skills Outline</h2>
             <ul className={styles.homeul}>
              <li className={styles.homeli}>EDA(Exploratory Data analysis), Linear Regressions, Data Visualisation - Pandas, Matplotlib, Scikit-Learn and Seaborn </li>
              <li className={styles.homeli}>Image Clasification Through Convolutional Neural Networks (CNN)- Matplotlib, Tensorflow</li>
              <li className={styles.homeli}>Time Series Analysis - Pandas, Matplotlib, Statsmodels</li>
              <li className={styles.homeli}>Clustering and Classification - Pandas, Matplotlib, Scikit-Learn</li>
              <li className={styles.homeli}>Web Scraping for data gathering - BeautifulSoup, Selenium</li> 
              <li className={styles.homeli}>Natural Language Processing (NLP)</li>
              <li className={styles.homeli}>Deep Learning - Tensorflow, Keras</li>
              <li className={styles.homeli}>Principal Component Analysis (PCA) for Dimensionality Reduction - Pandas, Matplotlib, Seaborn, Scikit-Learn</li>
              </ul>
          </div>
          <div className={styles.rightside}>
              <Image src="/Designer.jpeg" alt="Picture of Python, Pandas, Matplotlib, Scikit-Learn and other used Technologies" width={400} height={400} />
          </div>
</div>
          
            <p className={styles.homeparagraph}>To everyone looking at this, this is a short collection of my projects in Data analysis, Data visualisation and Machine Learning projects. The following projects are seperated in academic and industry related ones, as based on whether they were built during academic sessions or in my free time to strengthen my understanding of the concepts. It is to note that they are separated from whatever projects or examples that are used during various certifications exams that I have attended and taken. </p>
         
      </div>
      
  )
}


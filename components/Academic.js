import React from 'react'
import styles from '../app/page.module.css'
import Image from 'next/image'


export const Academic = () => {
  return (
    <div id="#academic">
      <h1 style={{textAlign:"center",marginTop:"20px"}}>Academic Projects</h1>
      <div className={styles.projectcontainer}>
        <div className={styles.project}>
          <a href="https://replit.com/@KristianDhimitr/Time-Series-Analysis-on-Stock-Prices">
            <h4>Project 1</h4>
          <h2><a href="https://replit.com/@KristianDhimitr/Time-Series-Analysis-on-Stock-Prices">Time Series Analysis on Stock Prices</a></h2>
          <p><a href="https://replit.com/@KristianDhimitr/Time-Series-Analysis-on-Stock-Prices">Time series analysis on stock prices can reveal valuable insights for investors and analysts alike.</a></p>
        </a>
        </div>
        <div className={styles.project}>
          <a href="https://replit.com/@KristianDhimitr/Clustering-Analysis-on-Iris-Dataset">
<h4>Project 2</h4>
            <h2><a href="https://replit.com/@KristianDhimitr/Clustering-Analysis-on-Iris-Dataset">Clustering Analysis on Iris Dataset</a></h2>
          <p><a href="https://replit.com/@KristianDhimitr/Clustering-Analysis-on-Iris-Dataset">Performing clustering analysis on the Iris dataset involves several steps: loading the dataset, preprocessing if necessary, applying K-means clustering, visualizing the clusters, and evaluating the clustering model.</a></p>
       </a>
        </div>
        <div className={styles.project}><a href="https://replit.com/@KristianDhimitr/Natural-Language-Processing-NLP-on-Sentiment-Analysis">
<h4>Project 3</h4>
          <h2><a href="https://replit.com/@KristianDhimitr/Natural-Language-Processing-NLP-on-Sentiment-Analysis">Natural Language Processing (NLP) on Sentiment Analysis</a></h2>
          <p><a href="https://replit.com/@KristianDhimitr/Natural-Language-Processing-NLP-on-Sentiment-Analysis">The objective of this project is to perform sentiment analysis on IMDb movie reviews using machine learning techniques, specifically using a Naive Bayes classifier.</a></p>
        </a>
        </div>
        <div className={styles.project}>
          <a href="https://replit.com/@KristianDhimitr/Exploratory-Analysis-on-Titanic-Dataset">
          <h4>Project 4</h4>
          <h2><a href="https://replit.com/@KristianDhimitr/Exploratory-Analysis-on-Titanic-Dataset">Exploratory Data Analysis on Titanic Dataset</a></h2>
          <p><a href="https://replit.com/@KristianDhimitr/Exploratory-Analysis-on-Titanic-Dataset">The code analyzes the Titanic dataset for insights using visualizations, handles missing values, encodes categorical data, and prepares it for machine learning.</a></p>
       </a>
        </div>
        <div className={styles.project}>
          <a href="https://replit.com/@KristianDhimitr/Linear-Regression-Analysis-on-Housing-Prices#main.py">
            <h4>Project 5</h4>
            <h2><a href="https://replit.com/@KristianDhimitr/Linear-Regression-Analysis-on-Housing-Prices#main.py">Linear Regression Analysis on Housing Prices</a></h2>
          <p><a href="https://replit.com/@KristianDhimitr/Linear-Regression-Analysis-on-Housing-Prices#main.py">Performing linear regression to sort out the proper price trend in a housing Dataset, based in the Californian Housing dataset.</a></p>
      </a>
        </div>
      </div>
    </div>
  ); // Add a closing curly brace here
}

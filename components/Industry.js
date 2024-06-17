import React from 'react'
import styles from '../app/page.module.css'


export const Industry = (title, description, imageLink) => {
  return (
    <div id="#industry">
      <h1 style={{ textAlign: "center", marginTop: "20px" }}>Industry Related Projects</h1>
      <div className={styles.projectcontainer}>
        <div className={styles.project}>
          <a href="https://replit.com/@KristianDhimitr/Customer-Segmentation-using-Clustering">
            <h4>Project 1</h4>
            <h2><a href="https://replit.com/@KristianDhimitr/Customer-Segmentation-using-Clustering">Customer Segmentation using Clustering</a></h2>
            <p><a href="https://replit.com/@KristianDhimitr/Customer-Segmentation-using-Clustering">To perform customer segmentation using clustering techniques like K-means on a retail store dataset, we'll go through several steps including data exploration, preprocessing, clustering, and deriving insights. </a></p>
          </a>
        </div>
        <div className={styles.project}>
          <a href="https://replit.com/@KristianDhimitr/Churn-Prediction-for-a-Telecom-Company#main.py">
            <h4>Project 2</h4>
            <h2><a href="https://replit.com/@KristianDhimitr/Churn-Prediction-for-a-Telecom-Company#main.py">Churn Prediction for a Telecom Company</a></h2>
            <p><a href="https://replit.com/@KristianDhimitr/Churn-Prediction-for-a-Telecom-Company#main.py">"Generates synthetic telecom customer data, builds and evaluates a Random Forest Classifier to predict churn, and visualizes feature importances."</a></p>
          </a>
        </div>
        <div className={styles.project}><a href="https://replit.com/@KristianDhimitr/SnowTepidObservatory">
          <h4>Project 3</h4>
          <h2><a href="https://replit.com/@KristianDhimitr/SnowTepidObservatory">Sales Forecasting for a Retail Store</a></h2>
          <p><a href="https://replit.com/@KristianDhimitr/SnowTepidObservatory">Python code for performing sales forecasting using SARIMA model and visualizing the results with Matplotlib.</a></p>
        </a>
        </div>
        <div className={styles.project}>
          <a href="https://replit.com/@KristianDhimitr/Sentiment-Analysis-on-Social-Media-Data#main.py">
            <h4>Project 4</h4>
            <h2><a href="https://replit.com/@KristianDhimitr/Sentiment-Analysis-on-Social-Media-Data#main.py">Sentiment Analysis on Social Media Data</a></h2>
            <p><a href="https://replit.com/@KristianDhimitr/Sentiment-Analysis-on-Social-Media-Data#main.py">Performing sentiment analysis on tweets related to the company "Nova" using a logistic regression model trained on TF-IDF transformed text data, with subsequent classification and visualization of sentiment distribution.</a></p>
          </a>
        </div>
      </div>
    </div>
  )
}


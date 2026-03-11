
import React from 'react';
import Layout from '@theme/Layout';
import styles from './index.module.css';
import Link from '@docusaurus/Link';

export default function Home() {
  return (
    <Layout>
      <div>
        {/* Hero section */}
        <div className={styles.hero}>
          <h1 className={styles.heroTitle}>Welcome to Fake Store API Docs</h1>
          <p className={styles.heroSubtitle}> A mock ecommerce API for learning, testing, and building demo integrations.</p>
          <p className={styles.heroText}> Use it to fetch product data, explore cart and user endpoints, and experiment with a typical ecommerce API structure.</p>

          <Link to="/docs/start/intro"> <button className={styles.ctaButton}>Get Started</button> </Link>
        </div>

        {/* Documentation section */}
        <div className={styles.docsSection}>
          <h2 className={styles.sectionTitle}>Documentation</h2>
          <div className={styles.cardsGrid}>

            {/* Quickstart */}
            <Link to="/docs/start/quickstart" className={styles.card}>
              <div className={styles.iconBox}>
                <i className="bx bx-rocket" />
              </div>
              <h3 className={styles.cardTitle}>Quickstart</h3>
              <p className={styles.cardText}> Make your first API request and retrieve product data. </p>
              <p className={styles.cardLink}> Read guide <i className="bx bx-right-arrow-alt" /> </p>
            </Link> {/* Concepts */} <Link to="/docs/Concept" className={styles.card}>
              <div className={styles.iconBoxSmall}>
                <i className="bx bx-brain" />
              </div>
              <h3 className={styles.cardTitle}>Concepts</h3>
              <p className={styles.cardText}> Understand the Fake Store API resource model and data structure. </p>
              <p className={styles.cardLink}> Read guide <i className="bx bx-right-arrow-alt" /> </p>
            </Link>
            {/* API Reference */}
            <Link to="/docs/API Reference/Products" className={styles.card}>
              <div className={styles.iconBox}>
                <i className="bx bx-book" />
              </div>
              <h3 className={styles.cardTitle}>API Reference</h3>
              <p className={styles.cardText}> Detailed documentation for all API endpoints and responses. </p>
              <p className={styles.cardLink}> Read guide <i className="bx bx-right-arrow-alt" /> </p>
            </Link>
            {/* Guide */}
            <Link to="/docs/Guide/Guide-1" className={styles.card}>
              <div className={styles.iconBox}>
                <i className="bx bx-code-block" />
              </div>
              <h3 className={styles.cardTitle}> Build a Product Catalogue </h3>
              <p className={styles.cardText}> Follow a practical guide to build a product catalogue using the API. </p>
              <p className={styles.cardLink}> Read guide <i className="bx bx-right-arrow-alt" /> </p>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}

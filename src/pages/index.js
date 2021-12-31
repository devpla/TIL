import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import HomepageFeatures from "../components/HomepageFeatures";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx(styles.heroBanner)}>
      <div className="container__left">
        <h1 className="hero__title">Today</h1>
        <h1 className="hero__title__bottom">I Learned</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--primary button--lg hero__button"
            to="/docs/frontend/intro"
          >
            Get Started
          </Link>
        </div>
      </div>
      <div className="container__right">
        <iframe
          src="https://devpla-airplain.netlify.app/"
          frameborder="0"
          width="100%"
          height="700"
        ></iframe>
        {/* <img src="https://github.com/devpla/TIL/blob/main/static/img/landing.png?raw=true" /> */}
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}

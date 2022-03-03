import React from "react";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

import {
  Header,
  Container,
  HeroTitle,
  HeroTitleBottom,
  Subtitle,
  ButtonBox,
} from "./HomepageHeader.styled";

const HomepageHeader = () => {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Header>
      <Container>
        <HeroTitle>Today</HeroTitle>
        <HeroTitleBottom>I Learned</HeroTitleBottom>
        <Subtitle className="hero__subtitle">{siteConfig.tagline}</Subtitle>
        <ButtonBox>
          <Link
            className="button button--primary button--lg"
            to="/docs/frontend/intro"
          >
            Get Started
          </Link>
        </ButtonBox>
      </Container>
      <iframe
        src="https://devpla-airplain.netlify.app/"
        frameBorder="0"
        width="100%"
        height="700"
      ></iframe>
    </Header>
  );
};

export default HomepageHeader;

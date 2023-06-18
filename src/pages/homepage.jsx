import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";

import { faMailBulk } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faGithub,
  faStackOverflow,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import Logo from "../components/common/logo";
import Footer from "../components/common/footer";
import NavBar from "../components/common/navBar";
import Article from "../components/homepage/article";
import Works from "../components/homepage/works";
import GridDisplay from "../components/projects/gridDisplay";

import INFO from "../data/user";
import SEO from "../data/seo";
import myArticles from "../data/articles";

import "./styles/homepage.css";

const Homepage = () => {
  const currentSEO = SEO.find((item) => item.page === "home");
  const [zingerCount, setZingerCount] = useState(0);
  const [isSliding, setIsSliding] = useState(false);

  /*useEffect(() => {
    const interval = setInterval(() => {
      setIsSliding(true);

      const animationTimeout = setTimeout(() => {
        setZingerCount((prevCount) => {
			if (prevCount < INFO.homepage.zingers.length) {
				return prevCount + 1;
			} else {
				return 0
			}
		});
        setIsSliding(false);
      }, 500);

      return () => clearTimeout(animationTimeout);
    }, 5000);

    return () => clearInterval(interval);
  }, []);*/

  return (
    <div className="page-content">
      <Helmet>
        <title>{INFO.main.title}</title>
        <meta name="description" content={currentSEO.description} />
        <meta name="keywords" content={currentSEO.keywords.join(", ")} />
      </Helmet>
      <NavBar active="home" />
      <div className="content-wrapper">
        <div className="homepage-logo-container">
          <div>
            <Logo width={80} />
          </div>
        </div>

        <div className="homepage-container">
          <div className="homepage-first-area">
            <div className="homepage-first-area-left-side">
              <div className="title homepage-title">{INFO.homepage.title}</div>
{/*               <div
                className={isSliding ? "slide-up title homepage-title" : "title homepage-title"}
              >
                {INFO.homepage.zingers[zingerCount]}
              </div> */}

              <div className="subtitle homepage-subtitle">
                {INFO.homepage.description}
              </div>
            </div>
            <div className="homepage-first-area-right-side">
              <div className="homepage-image-container">
                <div className="homepage-image-wrapper">
                  <img
                    src="hong kong.jpg"
                    alt="about"
                    className="homepage-image"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="homepage-socials">
            <a href={INFO.socials.twitter} target="_blank" rel="noreferrer">
              <FontAwesomeIcon
                icon={faTwitter}
                className="homepage-social-icon"
              />
            </a>
            <a href={INFO.socials.github} target="_blank" rel="noreferrer">
              <FontAwesomeIcon
                icon={faGithub}
                className="homepage-social-icon"
              />
            </a>
            <a href={INFO.socials.stackoverflow} target="_blank" rel="noreferrer">
              <FontAwesomeIcon
                icon={faStackOverflow}
                className="homepage-social-icon"
              />
            </a>
            <a href={INFO.socials.instagram} target="_blank" rel="noreferrer">
              <FontAwesomeIcon
                icon={faInstagram}
                className="homepage-social-icon"
              />
            </a>
            <a href={`mailto:${INFO.main.email}`} target="_blank" rel="noreferrer">
              <FontAwesomeIcon
                icon={faMailBulk}
                className="homepage-social-icon"
              />
            </a>
          </div>

          <div className="homepage-projects">
			<div className="title">Skills and Proficiencies</div>
            <GridDisplay />
          </div>

          <div className="homepage-works homepage-after-title">
              <Works />
            </div>

          <div className="page-footer">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;

import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import ReactCSSTransitionReplace from 'react-css-transition-replace';

import Logo from "../components/common/logo";
import Footer from "../components/common/footer";
import NavBar from "../components/common/navBar";
import GridDisplay from "../components/projects/gridDisplay";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/homepage.css";

const Homepage = () => {
  const currentSEO = SEO.find((item) => item.page === "home");
  const [zingerCount, setZingerCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setZingerCount((prevCount) => {
        if (prevCount > INFO.homepage.zingers.length - 2) {
          return 0;
        } else {
          return prevCount + 1;
        }
      });
    }, 4000);

    // Clean up the interval when the component is unmounted
    return () => clearInterval(interval);
  }, []);

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
              <ReactCSSTransitionReplace
                className="title homepage-title"
                transitionName="fade-wait"
                transitionEnterTimeout={1000}
                transitionLeaveTimeout={400}
              >
                <div key={zingerCount}>
                  {INFO.homepage.zingers[zingerCount]}
                </div>
              </ReactCSSTransitionReplace>

              <div className="subtitle homepage-subtitle">
                {INFO.homepage.description}
              </div>
            </div>
            <div className="homepage-first-area-right-side">
              <div className="homepage-image-container">
                <div className="homepage-image-wrapper">
                  <img
                    src="homepage.jpg"
                    alt="about"
                    className="homepage-image"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="homepage-socials">
            <a href={INFO.socials.github} target="_blank" rel="noreferrer">
              <FontAwesomeIcon
                icon={faGithub}
                className="homepage-social-icon"
              />
            </a>
            <a href={INFO.socials.linkedin} target="_blank" rel="noreferrer">
              <FontAwesomeIcon
                icon={faLinkedin}
                className="homepage-social-icon"
              />
            </a>
            <a
						href={`mailto:${INFO.main.email}`}
						target="_blank"
						rel="noreferrer"
            className="email-wrapper"
					>
						<div>
							<FontAwesomeIcon
                icon={faEnvelope}
                className="homepage-social-icon"
                />
						</div>

						<div className="homepage-email">{INFO.main.email}</div>
					</a>
          </div>

          <div className="homepage-projects">
			    <div className="title">My Projects</div>
            <GridDisplay
              array={INFO.projects}
            />
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

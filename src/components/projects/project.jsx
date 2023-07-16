import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

import "./styles/project.css";

const Project = (props) => {
	const { logo, title, description, linkText, link, subtitle, photo } = props;

	const ProjectContent = () => (
		<div className="project-container">
			<div className="project-logo">
				<img src={logo} alt="logo" />
			</div>
			<div className="project-title">{title}</div>
			<div className="project-description">{description}</div>
			<div className="project-subtitle">{subtitle}</div>
			<img className="project-photo" src={photo}/>
			{link && <div className="project-link">
				<div className="project-link-icon">
					<FontAwesomeIcon icon={faLink} />
				</div>

				<div className="project-link-text">{linkText}</div>
			</div>}
		</div>
	);

	return (
		<React.Fragment>
			<div className="project">
				{link ?
				<Link to={link}>
					{<ProjectContent/>}
				</Link>
				:
				<div>
					{<ProjectContent/>}
				</div>
				}
			</div>
		</React.Fragment>
	);
};

export default Project;

import React from "react";

import Project from "./project";

import INFO from "../../data/user";

import "./styles/gridDisplay.css";

const GridDisplay = ({array}) => {
	return (
		<div className="all-projects-container">
			{array.map((project, index) => (
				<div className="all-projects-project" key={index}>
					<Project
						logo={project.logo}
						title={project.title}
						description={project.description}
						linkText={project.linkText}
						link={project.link}
					/>
				</div>
			))}
		</div>
	);
};

export default GridDisplay;

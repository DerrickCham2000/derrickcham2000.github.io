import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<div className="work-title">MeeOpp</div>
							<div className="work-subtitle">
								Junior Full Stack Developer
							</div>
							<div className="work-duration">05/2021 to 05/2022</div>
						</div>

						<div className="work">
							<div className="work-title">TMNT Tracks</div>
							<div className="work-subtitle">
								TMNT Tracks
							</div>
							<div className="work-duration">08/2019 to 11/2020</div>
						</div>

						
						<div className="work">
							<div className="work-title">Rock Art Canada</div>
							<div className="work-subtitle">
								Event Support Staff
							</div>
							<div className="work-duration">09/2019 to 10/2020</div>
						</div>

						
						<div className="work">
							<div className="work-title">Kwong Fat Hong Accouting Ltd</div>
							<div className="work-subtitle">
								Administrative Intern
							</div>
							<div className="work-duration">05/2020 to 06/2020</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;

import React, { Component } from "react";
import githubLogo from "../assets/GitHub-Mark-Light-32px.png";
// import gif from "./eye-icon-animate.gif";

export class Cat extends Component {
	state = {
		type: this.props.line.type,
		value: this.props.line.value
	};

	style = {
		align: "middle"
	};

	information = {
		about:
			"This is Gokula Krishnan K. Im a 21 Year Tech boy :-). Im a youtuber, Im a blogger, Im a bug-hunter, Im a DevOps engineer. Now currently working on R&D roll in Software Ag. `They laugh at me because Im different; I laugh at them because they are all the same`.",
		education:
			"Im currently Studing Computer Science Engineering In Kongu Engineering 2023 passed-out. I have done Diploma in AutoMobile engineering.",
		projects: [
			{
				projectName: "my-projects",
				liveDemo: "https://github.com/krishnansai",
				linkToGithub: "https://github.com/krishnansai"
			}
		],
		social: [
			{
				platform: "Instagram",
				link: "https://www.instagram.com/_krishnan_sai_/"
			},

			{
				platform: "Github",
				link: "https://github.com/krishnansai"
			},
			{
				platform: "Youtube",
				link: "https://www.youtube.com/channel/UC_oEMYOCgK5-dZ1A2AIH6KQ"
			},
			{
				platform: "Blogger",
				link: "https://twinsaitechie.blogspot.com/"
			}
		]
	};
	render() {
		return (
			<React.Fragment>
				<p className="prompt"> {this.props.line.value} </p>
				{this.handelCd()}
			</React.Fragment>
		);
	}

	handelCd = () => {
		const navigation = this.state.value.split(" ")[1];
		if (navigation) {
			const lower = navigation.toLowerCase();
			if (lower === "about") {
				return <p className="result">{this.information.about}</p>;
			} else if (lower === "education") {
				return <p className="result">{this.information.education}</p>;
			} else if (lower === "education") {
			} else if (lower === "projects" || lower === "project") {
				return (
					<React.Fragment>
						{this.information.projects.map(everyProject => {
							return (
								<p className="result">
									{everyProject.projectName}
									<a href={everyProject.liveDemo}>
										Live Link
									</a>
									<a href={everyProject.linkToGithub} >
										<img src={githubLogo} alt="GithubLink to Code" />
									</a>
								</p>
							);
						})}
					</React.Fragment>
				);
			} else if (
				lower === "socials" ||
				lower === "social" ||
				lower === "contact me" ||
				lower === "contactme" ||
				lower === "contact_me"
			) {
				return (
					<React.Fragment>
						{this.information.social.map(everySocial => {
							return (
								<p className="result">
									<a href={everySocial.link} >
										{everySocial.platform}
									</a>
									<a href="https://github.com/krishnansai" >
										<img src={githubLogo} alt="GithubLink to Code" />
									</a>
								</p>
							);
						})}
					</React.Fragment>
				);
			} else {
				return <p className="result">Opps wrong input</p>;
			}
		} else {
			return <p className="result">Opps wrong input</p>;
		}
	};
}

export default Cat;

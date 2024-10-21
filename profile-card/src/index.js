import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";

const skills = [
	{
		skill: "HTML 5",
		level: "advanced",
		color: "#ff0000",
	},
	{
		skill: "CSS 3",
		level: "advanced",
		color: "#0000ff",
	},
	{
		skill: "JavaScript",
		level: "advanced",
		color: "#ffd700",
	},
	{
		skill: "Bootstrap 5",
		level: "advanced",
		color: "#4b0082",
	},
	{
		skill: "Tailwind CSS",
		level: "intermediate",
		color: "#800080",
	},
	{
		skill: "React",
		level: "beginner",
		color: "#ffc0cb",
	},
];

function App() {
	return (
		<div className="card">
			<Avatar />
			<div className="data">
				<Intro />
				<SkillList />
			</div>
		</div>
	);
}

function Avatar() {
	return <img className="avatar" src="profile-image.jpg" alt="Alan Webb" />;
}

function Intro() {
	return (
		<div>
			<h1>Alan Webb</h1>
			<p>
				Front-end web developer and UI/UX designer. When I am not coding, I like
				to shatter my nervous system by playing the Dark Souls trilogy.
			</p>
		</div>
	);
}

function SkillList() {
	return (
		<div className="skill-list">
			{skills.map((skill) => (
				<Skill skill={skills.skill} color={skills.color} level={skills.level} />
			))}
		</div>
	);
}

function Skill({skill, color, level}) {
	return (
		<div className="skill" style={{backgroundColor: color}}>
			<span>{skill}</span>
			<span>
				{level === "beginner" && "😔"}
				{level === "intermediate" && "😀"}
				{level === "advanced" && "💪"}
			</span>
		</div>
	);
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";

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
			<Skill skill="HTML" emoji="⭐" color="red" />
			<Skill skill="CSS" emoji="✨" color="blue" />
			<Skill skill="JavaScript" emoji="💫" color="gold" />
			<Skill skill="React" emoji="🌠" color="pink" />
			<Skill skill="TailwindCSS" emoji="🎇" color="purple" />
			<Skill skill="Bootstrap 5" emoji="🌟" color="aqua" />
		</div>
	);
}

function Skill(props) {
	return (
		<div className="skill" style={{backgroundColor: props.color}}>
			<span>{props.skill}</span>
			<span>{props.emoji}</span>
		</div>
	);
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);

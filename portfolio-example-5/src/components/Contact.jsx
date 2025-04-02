import emailjs from "emailjs/browser";
import {useState} from "react";

const Contact = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});

	const [error, setError] = useState({});
	const [isSending, setIsSending] = useState(false);

	const handleChange = (e) => {
		const {name, value} = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	const validate = () => {
		let errors = {};
		if (!formData.name) errors.name = "Name is required";
		if (!formData.email) {
			errors.name = "Email is required";
		} else if (!/\S+@\S+\.\S+/.test(formData.email)) {
			errors.email = "Email is invalid";
		}
		if (!formData.message) errors.message = "Message is required";
	};
	return <div>Contact</div>;
};

export default Contact;

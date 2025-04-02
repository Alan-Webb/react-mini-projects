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
		return errors;
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const validationErrors = validate();
		if (Object.keys(validationErrors).length > 0) {
			setError(validationErrors);
		} else {
			setError({});
			setIsSending(true);

			emailjs
				.send(
					"service_updws7n",
					"template_5k8z1qm",
					formData,
					"6q1bs_-46t8jkufU1"
				)
				.then(
					((response) => {
						toast.success("Message sent successfully");
						setFormData({
							name: "",
							email: "",
							message: "",
						});
						setIsSending(false);
					})
					.catch.((error)=>{
						toast.error("Message failed to send");
					})
					.finally(()=>{
						setIsSending(false);
					})
				);
		}
	};
	return <div>Contact</div>;
};

export default Contact;

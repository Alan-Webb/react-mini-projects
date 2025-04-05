import {useState} from "react";
import {FaStar} from "react-icons/fa";

const StarRating = ({numStars = 5}) => {
	const [rating, setRating] = useState(0);
	const [hover, setHover] = useState(0);

	function handleClick(getCurrentIndex) {
		// console.log(getCurrentIndex);
		setRating(getCurrentIndex);
	}

	function handleMouseEnter(getCurrentIndex) {
		// console.log(getCurrentIndex);
		setHover(getCurrentIndex);
	}

	function handleMouseLeave() {
		// console.log(getCurrentIndex);
		setHover(rating);
	}

	return (
		<div className="flex gap-4">
			{[...Array(numStars)].map((_, index) => {
				index += 1;

				return (
					<FaStar
						className={index <= (hover || rating) ? "text-yellow-500" : ""}
						key={index}
						onClick={() => handleClick(index)}
						onMouseEnter={() => handleMouseEnter(index)}
						onMouseLeave={() => handleMouseLeave()}
						size={40}
					/>
				);
			})}
		</div>
	);
};

export default StarRating;

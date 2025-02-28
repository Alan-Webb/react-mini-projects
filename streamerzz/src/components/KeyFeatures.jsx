import {motion} from "framer-motion";
import {KEY_FEATURES_CONTENT} from "../constants";

const KeyFeatures = () => {
	const containerVariants = {
		hidden: {opacity: 0},
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
				when: "beforeChildren",
			},
		},
	};

	const featuresVariants = {
		hidden: {opacity: 0, y: 50},
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.5,
			},
		},
	};

	return (
		<section>
			<div className="max-w-7xl mx-auto px-4 mt-20">
				<div className="text-center mb-12 border-t border-neutral-800">
					<h2 className="text-3xl lg:text-5xl mt-20 tracking-tighter bg-gradient-to-t from-neutral-500 via-neutral-300 to-neutral-600 bg-clip-text text-transparent">
						{KEY_FEATURES_CONTENT.sectionTitle}
					</h2>
				</div>
			</div>
		</section>
	);
};

export default KeyFeatures;

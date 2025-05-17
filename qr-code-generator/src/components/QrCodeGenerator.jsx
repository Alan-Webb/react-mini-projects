import {useState} from "react";
import {QRCode} from "react-qr-code";

const QrCodeGenerator = () => {
	const [qrCode, setQrCode] = useState("");
	const [input, setInput] = useState("");

	function handleGenerateQrCode() {
		setQrCode(input);
		setInput("");
	}

	return (
		<div className="flex flex-col items-center mt-20 gap-4">
			<div>
				<input
					onChange={(e) => setInput(e.target.value)}
					className="p-4 rounded-xl"
					type="text"
					name="qr-code"
					value={input}
					placeholder="Enter your value here"
				/>
				<button
					disabled={input && input.trim() !== "" ? false : true}
					onClick={handleGenerateQrCode}
					className="ms-4 border=rounded-xl p-4 cursor-pointer">
					Generate
				</button>
			</div>
			<div>
				<QRCode id="qr-code-value" value={qrCode} size={400} />
			</div>
		</div>
	);
};
export default QrCodeGenerator;

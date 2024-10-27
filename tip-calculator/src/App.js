import "./styles.css";
import {useState} from "react";

export default function App() {
	return (
		<div>
			<TipCalculator />
		</div>
	);
}

function TipCalculator() {
	const [bill, setBill] = useState("");
	const [percentage1, setPercentage1] = useState(0);
	const [percentage2, setPercentage2] = useState(0);

	return (
		<div>
			<BillInput bill={bill} onSetBill={setBill} />
			How did you like the service?
			<SelectPercentage percentage={percentage1} />
			How did your friend like the service?
			<SelectPercentage percentage={percentage2} />
			<Output bill={bill} />
			<Reset />
		</div>
	);
}

function BillInput(bill, onSetBill) {
	return (
		<div>
			<label>How much was the bill?</label>
			<input
				type="text"
				placeholder="Bill value"
				value={bill}
				onChange={(e) => onSetBill(Number(e.target.value))}
			/>
		</div>
	);
}

function SelectPercentage({children}) {
	return (
		<div>
			<label>{children}</label>
			<select>
				<option value="0">Dissatisfied (0%)</option>
				<option value="5">It was okay (5%)</option>
				<option value="10">It was good (10%)</option>
				<option value="20">Absolutely amazing (20%)</option>
			</select>
		</div>
	);
}

function Output(bill) {
	return <h3>You pay X (${bill} + $B tip)</h3>;
}

function Reset() {
	return <button>Reset</button>;
}

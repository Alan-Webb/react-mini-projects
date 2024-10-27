import "./styles.css";

export default function App() {
	return (
		<div>
			<TipCalculator />
		</div>
	);
}

function TipCalculator() {
	return (
		<div>
			<BillInput />
			<SelectPercentage />
			How did you liek the service?
			<SelectPercentage />
			<Output />
			<Reset />
		</div>
	);
}

function BillInput() {
	return (
		<div>
			<label>How muich was the bill?</label>
			<input type="text" placeholder="Bill value" />
		</div>
	);
}

function SelectPercentage() {
	return (
		<div>
			<select>
				<option value="0">Dissatisfied (0%)</option>
				<option value="5">It was okay (5%)</option>
				<option value="10">It was good (10%)</option>
				<option value="20">Absolutely amazing (20%)</option>
			</select>
		</div>
	);
}

function Output() {}

function Reset() {}

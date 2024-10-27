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

function SelectPercentage() {}

function Output() {}

function Reset() {}

import {useEffect, useState} from "react";

const LoadMore = () => {
	const [loading, setLoading] = useState(false);
	const [products, setProducts] = useState([]);
	const [count, setCount] = useState(0);
	const [disableBtn, setDisableBtn] = useState(false);

	async function fetchProducts() {
		try {
			setLoading(true);
			const res = await fetch(
				`https://dummyjson.com/products?limit=20&skip=${
					count === 0 ? 0 : count * 20
				}`
			);
			const result = await res.json();

			if (result && result.products && result.products.length) {
				// setProducts(result.products);
				setProducts((prevData) => [...prevData, ...result.products]);
				setLoading(false);
			}

			console.log(result);
		} catch (e) {
			console.log(e);
			setLoading(false);
		}
	}

	useEffect(() => {
		fetchProducts();
	}, [count]);

	useEffect(() => {
		if (products && products.length === 100) setDisableBtn(true);
	}, [products]);

	if (loading) {
		return <h1 className="text-6xl text-center mt-40">Loading...</h1>;
	}

	return (
		<div className="container mx-auto">
			<div className="flex flex-wrap items-center gap-6 text-center">
				{products && products.length
					? products.map((item) => (
							<div
								key={item.id}
								className="border rounded-xl w-[20rem] h-[24rem] p-8">
								<img src={item.thumbnail} alt={item.title} />
								<p className="font-bold">{item.title}</p>
							</div>
					  ))
					: null}
			</div>
			<div className="flex justify-center">
				<button
					disabled={disableBtn}
					onClick={() => setCount(count + 1)}
					className="flex items-center border rounded-xl p-4 text-2xl cursor-pointer mt-8">
					Load More Products
				</button>
				{disableBtn ? (
					<p className="mt-12 mx-8 font-bold text-2xl">
						100 Products Limit Reached
					</p>
				) : null}
			</div>
		</div>
	);
};

export default LoadMore;

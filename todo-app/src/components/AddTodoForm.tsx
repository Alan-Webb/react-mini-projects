export default function AddTodoForm() {
	return (
		<form>
			<h2 className="font-medium text-[16px] text-[#231d15]">Add a Todo</h2>
			<input
				type="text"
				className="h-[45px] border border-black/[12] rounded-[5px] my-[9px] text-[14px] block w-full px-[16px]"
			/>
			<button
				type="submit"
				className="h-[45px] bg-[#473a2b] hover:bg-[#322618] w-full text-white rounded-[5px] cursor-pointer">
				Add to list
			</button>
		</form>
	);
}

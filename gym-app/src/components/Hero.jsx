export default function Hero() {
	return (
		<div className="min-h-screen flex flex-col gap-10 items-center justify-center max-w-[800px] w-full mx-auto p-4">
			<div className="flex flex-col gap-4">
				<p className="uppercase text-center font-bold">awdev</p>
				<h1 className="uppercase font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center">
					shredded
					<span className="text-blue-400 font-medium"> app </span>
				</h1>
			</div>
			<p className="text-sm md:text-base font-light text-center">
				I hereby acknowledge that I may become
				<span className="text-blue-400 font-medium">
					{" "}
					unbelievably shredded
				</span>{" "}
				and accept all risks of becoming a total
				<span className="text-blue-400 font-medium"> mass monster</span>,
				afflicted with being severely ripped, and so unfathomably defined that I
				look like an anatomy chart.
			</p>
			<button className="px-8 py-4 rounded-md border-[2px] border-blue-400 border-solid bg-slate-950 blue-shadow duration-200">
				<p>accept and begin</p>
			</button>
		</div>
	);
}

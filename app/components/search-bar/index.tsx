import Image from "next/image";

export default function SearchBar() {
	return (
		<div className="w-100 border-2 border-border-light h-16 rounded-lg mt-8 flex items-center justify-between box-border p-4">
			<input
				className="w-full bg-transparent text-primary-light placeholder-primary-light font-medium"
				placeholder="Search any keywords..."
			/>
			<button>
				<Image
					src="/images/icons/search.svg"
					alt='search'
					width={40}
					height={40}
				/>
			</button>
		</div>
	);
}
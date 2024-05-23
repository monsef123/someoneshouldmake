import Image from "next/image";

export default function SubmissionItem() {
	return (
		<div className="w-full box-border p-4 border-2 border-primary-light rounded-xl mt-4">
			<h4 className="font-medium text-md">An easier OTA solution for React Native</h4>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in ...
			</p>
			<div className="flex items-center justify-between gap-2 mt-4">
				<div className="flex items-center justify-start gap-2">
					<Image
						src="/images/icons/heart.svg"
						width={22}
						height={22}
						alt=""
					/>
				</div>
				<div className="flex items-center justify-end gap-2">
					
				</div>
			</div>
		</div>
	)
}
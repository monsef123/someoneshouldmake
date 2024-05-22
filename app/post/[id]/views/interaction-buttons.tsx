import Image from "next/image";

export default function PostInteractionButtons() {
	return (
		<div className="flex items-center justify-start gap-4 mt-2">
			<div className="flex items-center justify-start gap-2">
				<button className="flex items-center justify-center w-10 h-10 rounded-full bg-primary-soft">
					<Image
						src="/images/icons/heart.svg"
						width={24}
						height={24}
						alt=""
					/>
				</button>
				<span className="font-medium text-lg">
					11
				</span>
				<button className="flex items-center justify-center w-10 h-10 rounded-full bg-primary-soft">
					<Image
						src="/images/icons/comment.svg"
						width={24}
						height={24}
						alt=""
					/>
				</button>
				<span className="font-medium text-lg">
					9
				</span>
			</div>
		</div>
	)
}
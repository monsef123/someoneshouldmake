import ProfileAvatar from "@/components/profile-avatar";
import Image from "next/image";

export default function CommentItem() {
	return (
		<div className="w-100 rounded-3xl bg-primary-soft p-4 box-border mt-6">
			<div className="flex items-center justify-start gap-3 text-sm font-medium">
				<ProfileAvatar
					size="8"
				/>
				Mounsif Meftah
			</div>
			<p className="mt-4">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
			</p>
			<div className="flex items-center justify-start gap-4 mt-2">
				<button className="flex gap-2">
					<Image 
						src="/images/icons/heart.svg"
						alt=""
						width={22}
						height={22}
					/>
					11
				</button>
				<button className="py-1 px-4 border border-primary-light rounded-full">
					Reply
				</button>
			</div>
			<button className="mt-4 w-full py-3 rounded-lg bg-primary-light text-background-light font-medium text-md">
				5 Replies
			</button>
		</div>
	);
}
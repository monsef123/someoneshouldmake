import ProfileAvatar from "@/components/profile-avatar";
import Image from "next/image";
import Link from "next/link";

export default function PostAuthorCard() {
	return (
		<div className="col-span-1 bg-secondary-light rounded-2xl flex flex-col items-center justify-start box-border px-4 py-10 pb-4">
			<div className="bg-background-light rounded-full p-2">
				<ProfileAvatar />
			</div>
			<h3 className="mt-4 font-medium text-background-light">Mounsif Meftah</h3>
			<p className="font-light text-sm text-background-light">Founder of “Someone should make”</p>
			<p className="mt-2 font-light text-xs text-background-light">Joined 1 day ago</p>
			<div className="flex items-center justify-center mt-2 gap-2">
				<button>
					<Image
						src="/images/icons/github.svg"
						alt=""
						width={32}
						height={32}
					/>
				</button>
				<button>
					<Image
						src="/images/icons/facebook.svg"
						alt=""
						width={32}
						height={32}
					/>
				</button>
			</div>
			<Link href="/" className="w-full mt-20 bg-primary-light py-4 text-center rounded-lg text-background-light font-medium">
				View profile
			</Link>
		</div>
	)
}
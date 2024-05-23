import navRoutes from "@/config/navigation-routes";
import Image from "next/image";
import Link from "next/link";
import ProfileAvatar from "../profile-avatar";

export default function HeaderNavigation() {
	return (
		<header className="flex items-center justify-between py-4">
			<Link href={navRoutes.home.root}>
				<Image src="/images/ssm-logo.svg" alt="SomeoneShouldMake" width={200} height={100} />
			</Link>
			<nav>
				<ul className="flex items-center justify-evenly gap-10 text-primary-light text-lg font-normal">
					<li>
						<Link href={navRoutes.explore.root}>Explore</Link>
					</li>
					<li>
						<Link href={navRoutes.home.root}>Community</Link>
					</li>
					<li>
						<Link href={navRoutes.post.create}>Create a post</Link>
					</li>
					<li>
						<ProfileAvatar />
					</li>
					<li>
						<button className="w-10 h-10 bg-primary-soft rounded-full flex items-center justify-center relative">
							<Image
								src="/images/icons/bell.svg"
								width={22}
								height={22}
								alt=""
							/>
							<div 
								className="w-2 h-2 rounded-full bg-primary-light absolute top-0 right-1"
							/>
						</button>
					</li>
				</ul>
			</nav>
		</header>
	)
}
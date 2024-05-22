import Image from "next/image";
import Link from "next/link";

export default function HeaderNavigation() {
	return (
		<header className="flex items-center justify-between py-4">
			<Image src="/images/ssm-logo.svg" alt="SomeoneShouldMake" width={200} height={100} />
			<nav>
				<ul className="flex items-center justify-evenly gap-10 text-primary-light text-lg">
					<li>
						<Link href="/">Explore</Link>
					</li>
					<li>
						<Link href="/">Community</Link>
					</li>
					<li>
						<Link href="/">Create a post</Link>
					</li>
					<li>
						<Image
							className="inline-block h-10 w-10 rounded-full ring-2 ring-primary-light" 
							src="/images/male.png"
							width={100}
							height={100}
							alt="user-profile"
						/>
					</li>
				</ul>
			</nav>
		</header>
	)
}
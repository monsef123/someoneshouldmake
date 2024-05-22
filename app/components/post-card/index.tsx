import navRoutes from "@/app/config/navigation-routes";
import Image from "next/image";
import Link from "next/link";

interface PostCardProps {
	title: string;
	description: string;
	likes: number;
	donations: number;
	submissions: number;
}

export default function PostCard({ title, description, likes, donations, submissions }: PostCardProps) {
	return (
		<div className="bg-background-light p-4 box-border rounded-lg w-full mt-4">
			<Link href={navRoutes.post.view(1)}>
				<h1 className="text-base font-medium text-primary-light">{title}</h1>
			</Link>
			<p className="text-sm text-primary-light">{description}</p>
			<div className="flex items-center justify-between mt-2">
				<div className="flex items-center justify-start gap-3">
					<button className="flex items-center bg-transparent gap-1 text-primary-light">
						<Image
							src="/images/icons/heart.svg"
							alt=""
							width={20}
							height={20}
						/>
						{likes}
					</button>
					<button className="flex items-center bg-transparent gap-1 text-primary-light">
						<Image
							src="/images/icons/comment.svg"
							alt=""
							width={20}
							height={20}
						/>
						6
					</button>
				</div>
				<div className="flex items-center justify-end gap-4">
					<Link href={navRoutes.post.view(1)}>
						<p className="font-medium text-secondary-light text-sm">{donations}$ Donated</p>
					</Link>
					<Link href={navRoutes.post.view(1)}>
						<p className="font-medium text-primary-light text-sm">{submissions} Submissions</p>
					</Link>
				</div>
			</div>
		</div>
	);
}
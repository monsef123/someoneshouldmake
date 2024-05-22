import Image from "next/image";

interface PostCardProps {
	title: string;
	description: string;
	likes: number;
	// ...
}

export default function PostCard({ title, description, likes }: PostCardProps) {
	return (
		<div className="bg-background-light p-4 box-border rounded-lg w-full">
			<h1 className="text-base font-medium text-primary-light">{title}</h1>
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
						10
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
					<p className="font-medium text-secondary-light text-sm">10$ Donated</p>
					<p className="font-medium text-primary-light text-sm">2 Submissions</p>
				</div>
			</div>
		</div>
	);
}
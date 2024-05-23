import Image from "next/image";

interface SubmissionItemProps {
	title: string;
	description: string;
	likes: number;
	isVerified: boolean;
}

export default function SubmissionItem({
	title, description, isVerified, likes
}: SubmissionItemProps) {
	return (
		<div className="border-2 border-primary-light w-full box-border p-4 rounded-2xl mt-4">
			<h4 className="font-medium text-md">{title}</h4>
			<p>
				{description}
			</p>
			<div className="flex items-center justify-between gap-2 mt-4">
				<div className="flex items-center justify-start gap-2">
					<Image
						src="/images/icons/heart.svg"
						width={22}
						height={22}
						alt=""
					/>
					{likes}
				</div>
				<div className="flex items-center justify-end gap-2">
					{isVerified && (
						<div className="border border-success-dark flex items-center justify-center gap-2 py-2 px-4 rounded-full bg-success-light text-success-dark font-medium text-sm">
							<Image
								src="/images/icons/check-badge.svg"
								width={22}
								height={22}
								alt=""
							/>
							Verified solution
						</div>
					)}
				</div>
			</div>
		</div>
	)
}
import Image from "next/image";

interface ProfileAvatarProps {
	size?: string;
}

export default function ProfileAvatar({
	size = "10"
}: ProfileAvatarProps) {
	return (
		<Image
			className={`inline-block h-${size} w-${size} rounded-full ring-2 ring-primary-light`}
			src="/images/male.png"
			width={100}
			height={100}
			alt="user-profile"
		/>
	)
}
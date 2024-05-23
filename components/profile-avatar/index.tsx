import Image from "next/image";

export default function ProfileAvatar() {
	return (
		<Image
			className="inline-block h-10 w-10 rounded-full ring-2 ring-primary-light"
			src="/images/male.png"
			width={100}
			height={100}
			alt="user-profile"
		/>
	)
}
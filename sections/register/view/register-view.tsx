"use client"

import Image from "next/image";
import { InputHTMLAttributes } from "react";
import {
	signInWithGoogle,
} from "@/lib/firebase/auth";

interface CustomInputProps extends InputHTMLAttributes<HTMLInputElement> {
	label: string;
	value?: string;
}

function CustomInput({
	label, ...other
}: CustomInputProps) {
	return (
		<div className="w-full rounded-lg bg-background-light px-4 py-2 mt-8">
			<label className="block font-medium text-sm">{label}</label>
			<input
				className="bg-transparent font-regular text-sm w-full"
				{...other}
			/>
		</div>
	);
}

export default function RegisterView() {

	const handleSignIn = (event: any) => {
		event.preventDefault();
		signInWithGoogle();
	};

	return (
		<main className="w-100 h-full bg-background-light grid grid-cols-2 gap-8">
			<div className="p-4 h-full w-100">
				<div className="w-100 h-full bg-primary-light rounded-3xl p-8 flex flex-col items-center justify-center">
					<h1 className="text-background-light text-center text-xl font-semibold">Create your account</h1>
					<CustomInput
						label="Username"
						placeholder="Enter your username"
					/>
					<CustomInput
						label="E-mail"
						placeholder="Enter your Email address"
					/>
					<CustomInput
						label="Password"
						placeholder="Enter your password"
						type="password"
					/>
					<button className="mt-8 rounded-lg bg-background-light text-primary-light w-full p-4 font-medium text-lg">
						Create account
					</button>
					<p className="my-8 text-background-light"> Or continue with </p>
					<div
						className="flex items-center justify-center gap-8"
					>
						<button>
							<Image
								src="/images/icons/github.svg"
								width={40}
								height={40}
								alt=""
							/>
						</button>
						<button onClick={handleSignIn}>
							<Image
								src="/images/icons/google.svg"
								width={40}
								height={40}
								alt=""
							/>
						</button>
						<button>
							<Image
								src="/images/icons/facebook.svg"
								width={40}
								height={40}
								alt=""
							/>
						</button>
					</div>
				</div>
			</div>
			<div className="w-100 h-full rounded-3xl p-8 flex flex-col items-start justify-center">
				<Image
					src="/images/ssm-logo.svg"
					width={280}
					height={280}
					alt=""
				/>
				<h2 className="text-xl font-medium mt-4">
					⚙️ An easier OTA solution for React-native
				</h2>
				<div className="flex item-center justify-start gap-3 mt-4 font-medium">
					<Image
						src="/images/icons/heart.svg"
						alt=""
						width={24}
						height={24}
					/>
					14
					<Image
						src="/images/icons/comment.svg"
						alt=""
						width={24}
						height={24}
					/>
					3
				</div>
			</div>
		</main>
	);
}
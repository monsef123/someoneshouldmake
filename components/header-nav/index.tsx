'use client'

import navRoutes from "@/config/navigation-routes";
import Image from "next/image";
import Link from "next/link";
import ProfileAvatar from "../profile-avatar";
import React, { useState, useEffect } from "react";
import {
	signInWithGoogle,
	signOut,
	onAuthStateChanged
} from "@/lib/firebase/auth";
import { useRouter } from "next/navigation";
import { firebaseConfig } from "@/lib/firebase/config";

function useUserSession(initialUser: any) {
	// The initialUser comes from the server via a server component
	const [user, setUser] = useState(initialUser);
	const router = useRouter();

	// Register the service worker that sends auth state back to server
	// The service worker is built with npm run build-service-worker
	useEffect(() => {
		if ("serviceWorker" in navigator) {
			const serializedFirebaseConfig = encodeURIComponent(JSON.stringify(firebaseConfig));
			console.log("Firebase config", serializedFirebaseConfig);
			const serviceWorkerUrl = `/auth-service-worker.js?firebaseConfig=${serializedFirebaseConfig}`

			navigator.serviceWorker
				.register(serviceWorkerUrl)
				.then((registration) => console.log("scope is: ", registration.scope));
		}
	}, []);

	useEffect(() => {
		const unsubscribe = onAuthStateChanged((authUser: any) => {
			setUser(authUser)
		})

		return () => unsubscribe()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		onAuthStateChanged((authUser: any) => {
			if (user === undefined) return

			// refresh when user changed to ease testing
			if (user?.email !== authUser?.email) {
				router.refresh()
			}
		})
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [user])

	return user;
}

interface headerNavigationProps {
	initialUser?: any
}

export default function HeaderNavigation({ initialUser }: headerNavigationProps) {

	const user = useUserSession(initialUser);

	const handleSignOut = (event: any) => {
		event.preventDefault();
		signOut();
	};

	const handleSignIn = (event: any) => {
		event.preventDefault();
		signInWithGoogle();
	};

	console.log(user);

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
					{!!user ? (
						<>
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
							<li>
								<button
									className="px-4 py-2 bg-primary-soft rounded-full flex items-center justify-center text-sm font-medium"
									onClick={handleSignOut}
								>
									Logout
								</button>
							</li>
						</>
					) : (
						<button
							className="py-2 px-4 rounded-full bg-primary-light text-background-light font-medium text-sm"
							onClick={handleSignIn}
						>
							Sign in with Google
						</button>
					)}

				</ul>
			</nav>
		</header>
	)
}
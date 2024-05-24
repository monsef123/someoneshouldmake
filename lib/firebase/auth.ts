import {
	GoogleAuthProvider,
	signInWithPopup,
	FacebookAuthProvider,
	onAuthStateChanged as _onAuthStateChanged,
	GithubAuthProvider,
} from "firebase/auth";

import { auth } from "@/lib/firebase/clientApp";

export function onAuthStateChanged(cb: any) {
	return _onAuthStateChanged(auth, cb);
}

export async function signInWithGoogle() {
	const provider = new GoogleAuthProvider();

	try {
		await signInWithPopup(auth, provider);
	} catch (error) {
		console.error("Error signing in with Google", error);
	}
}

export async function signInWithFacebook() {
	const provider = new FacebookAuthProvider();

	try {
		await signInWithPopup(auth, provider);
	} catch (error) {
		console.error("Error signing in with Facebook", error);
	}
}

export async function signInWithGithub() {
	const provider = new GithubAuthProvider();

	try {
		await signInWithPopup(auth, provider);
	} catch (error) {
		console.error("Error signing in with Facebook", error);
	}
}


export async function signOut() {
	try {
		return auth.signOut();
	} catch (error) {
		console.error("Error signing out with Google", error);
	}
}
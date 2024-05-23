import HeaderNavigation from "@/components/header-nav";
import PostAuthorCard from "../author-card";
import PostInteractionButtons from "../interaction-buttons";
import PostHeader from "../post-header";
import SubmissionItem from "../submission-item";

export default function PostView() {
	return (
		<>
			<HeaderNavigation />
			<main className="grid grid-cols-4 gap-4 mt-4 items-start">
				<PostAuthorCard />
				<div className="col-span-3 box-border p-4 pt-0">
					<div className="pl-4">
						<h1 className="text-sm font-medium">Someone should make:</h1>
						<h1 className="text-primary-light font-medium text-2xl mt-0 pt-0">Easier OTA solution for react native</h1>
						<p className="text-secondary-light">{"Packages > React-native"}</p>
						<PostInteractionButtons />
					</div>
					<div className="mt-4 w-full rounded-3xl bg-primary-light box-border p-4">
						<div className="w-full rounded-3xl bg-background-light p-6">
							<PostHeader />
							<div className="mt-4">
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
								</p>
							</div>
							<button className="mt-4 w-full rounded-xl p-4 bg-secondary-light text-background-light font-semibold text-lg">
								Submit your solution
							</button>
							<div className="w-100 my-8 border-b-2 border-dashed border-primary-soft" />
							<h4 className="font-medium">Submissions:</h4>
							<SubmissionItem />
							<SubmissionItem />
						</div>
					</div>
				</div>
			</main>
		</>
	);
}
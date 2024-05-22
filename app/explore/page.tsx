import HeaderNavigation from "../components/header-nav";
import PostCard from "../components/post-card";
import SearchBar from "../components/search-bar";

export default function ExplorePage() {
	return (
		<>
			<HeaderNavigation />
			<main>
				<SearchBar />
				<div className="grid grid-cols-4 gap-4 mt-8">
					<div className="col-span-1 h-60 bg-secondary-light rounded-2xl">
					</div>
					<div className="col-span-3 bg-primary-light rounded-2xl box-border p-4 pt-0">
						<PostCard 
							title="Easier OTA solution for react native"
							description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ..."
							likes={300}
							donations={10}
							submissions={2}
						/>
						<PostCard 
							title="Easier OTA solution for react native"
							description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ..."
							likes={300}
							donations={10}
							submissions={2}
						/>
						<PostCard 
							title="Easier OTA solution for react native"
							description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ..."
							likes={300}
							donations={10}
							submissions={2}
						/>
						<PostCard 
							title="Easier OTA solution for react native"
							description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ..."
							likes={300}
							donations={10}
							submissions={2}
						/>
						<PostCard 
							title="Easier OTA solution for react native"
							description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ..."
							likes={300}
							donations={10}
							submissions={2}
						/>
						<PostCard 
							title="Easier OTA solution for react native"
							description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ..."
							likes={300}
							donations={10}
							submissions={2}
						/>
					</div>
				</div>
			</main>
		</>
	)
}
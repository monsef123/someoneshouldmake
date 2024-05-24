
const navRoutes = {
	home: {
		root: "/"
	},
	explore: {
		root: "/explore" 
	},
	post: {
		root: "/post",
		create: "/post/create",
		view: (id: number) => `/post/${id}`,
	},
	register: {
		root: "/register"
	}
}

export default navRoutes
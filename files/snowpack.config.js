/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
	mount: {
		public: "/",
		src: "/_dist_"
	},
	plugins: ["@snowpack/plugin-react-refresh", "@snowpack/plugin-dotenv", ["@snowpack/plugin-babel", { input: [".js"] }]],
	install: ["react/jsx-runtime"],
	installOptions: {
		/* ... */
	},
	devOptions: {
		/* ... */
	},
	buildOptions: {
		/* ... */
	},
	proxy: {
		/* ... */
	},
	alias: {
		/* ... */
	}
};

module.exports = {
	transform: {
		"^.+\\.js$": "babel-jest",
		".+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2|svg)$": "jest-transform-stub"
	}
};

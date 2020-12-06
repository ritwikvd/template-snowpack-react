#!/usr/bin/env node
const copyDir = require("copy-dir");
const path = require("path");

copyDir(path.resolve(__dirname, "files"), process.cwd(), {
	utimes: true, // keep add time and modify time
	mode: true, // keep file mode
	cover: true // cover file when exists, default is true
});

console.log("Done!");

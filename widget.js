const app = require('widget');

// get manifest data with array of meme links
const manifest = app.getManifest();

setTimeout(() => {
	const pics = manifest.data_sources.pictures; // array of pictures links here
	const ind = Math.floor(Math.random() * pics.length); // generating random number to pick random meme
	app.publish(`<img src="${pics[ind - 1]}">`); // generating HTML chunk with single img tag and sending result to user
}, 5*1000)

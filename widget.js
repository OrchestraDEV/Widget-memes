const app = require('widget');

// geting manifest data with array of meme links
const manifest = app.getManifest();

setTimeout(() => {
	const pics = manifest.data_sources.pictures;
	const ind = Math.floor(Math.random() * pics.length); // generating random number to pick random meme
	app.publish(`<img src="${pics[ind - 1]}">`);
}, 5*1000)

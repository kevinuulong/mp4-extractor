const cheerio = require('cheerio');
const got = require('got');
const argv = require('minimist')(process.argv.slice(2));

// Test URL: https://streamable.com/ip9rla
// Sample Command: node index --src="https://streamable.com/ip9rla"

const videoUrl = argv['src'];

got(videoUrl).then(response => {
  const $ = cheerio.load(response.body);
  console.log(`https:${$('#video-player-tag')[0].attribs.src}`);
}).catch(err => {
  console.log(err);
});
const cheerio = require('cheerio');
const got = require('got');

// TODO: Make this link an argument
const videoUrl= 'https://streamable.com/ip9rla';

got(videoUrl).then(response => {
  const $ = cheerio.load(response.body);
  console.log(`https:${$('#video-player-tag')[0].attribs.src}`);
}).catch(err => {
  console.log(err);
});
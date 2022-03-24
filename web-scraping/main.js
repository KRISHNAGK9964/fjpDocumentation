const request = require("request");
const cheerio = require("cheerio");
const url = "https://www.espncricinfo.com/series/ipl-2021-1249214";
const getAllMatch = require("./allMatches");
request(url, cb);

function cb(err, res, html) {
  if (err) {
    console.log(err);
  } else {
    handle(html);
  }
}

function handle(html) {
  let $ = cheerio.load(html);
  let anchorElement = $('a[data-hover="View All Results"]');
  let url = $(anchorElement).attr("href");
  let fulllink = "https://www.espncricinfo.com" + url;
  //   request(fulllink, cb2);
  getAllMatch.getAllMatch(fulllink);
  console.log(fulllink);
}

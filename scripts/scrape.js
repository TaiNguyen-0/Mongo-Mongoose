var request = require("request");
var cheerio = require("cheerio");

var scrape = function(cb) {
    // body is all the stuff we get back.
    request("https://www.bbc.com/news", function(err, res, body) {
        var $ = cheerio.load(body);
        // empty array to hold information pulled.
        var articles = [];
        $(".gs-c-promo-body > div > a").each(function(i, element) {

            // this is
            // var head = $(element).children(".story-heading").text().trim();
            // var sum = $(element).children(".summary").text().trim();

            var head = $(element).text();
            var sum = $(element).children("h3").attr("class");

            result.title = $(this)
      .children("a")
        .text();
      result.link = $(this)
        .children("a")
        .attr("href");
      result.summary = $(this)
      .children("p")
      .text();

            // var scrape = function(cb) {
            //     // body is all the stuff we get back.
            //     request("https://www.bbc.com/news", function(err, res, body) {
            //         var $ = cheerio.load(body);
            //         // empty array to hold information pulled.
            //         var articles = [];
            //         $(".gs-c-promo-body").each(function(i, element) {

            //             // this is gs-c-promo-summary
            //             var head = $(this).children(".gs-c-promo-heading").text().trim();
            //             var sum = $(this).children(".gs-c-promo-summary").text().trim();

            if (head && sum) {
                var headNeat = head.replace(/(\r\n|\n|\r|\t|\s+)/gm, " ").trim();
                var sumNeat = sum.replace(/(\r\n|\n|\r|\t|\s+)/gm, " ").trim();

                var dataToAdd = {
                    headline: headNeat,
                    summary: sumNeat,
                };
                articles.push(dataToAdd);
            }
        });
        // callbacks to articles
        cb(articles);
    });
};

module.exports = scrape;
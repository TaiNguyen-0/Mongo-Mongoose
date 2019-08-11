var request = require("request");
var cheerio = require("cheerio");

var scrape = function(cb) {
    // body is all the stuff we get back.
    requeest("https://www.bbc.com/news", function(err, res, body) {
        var $ = cherrio.load(body);
        // empty array to hold information pulled.
        var articles = [];
        $(".gs-c-promo-body").each(function(i, element) {

            // this is gs-c-promo-summary
            var head = $(this).children(".gs-c-promo-heading").text().trim();
            var sum = $(this).children(".gs-c-promo-summary").text().trim();

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
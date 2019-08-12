var scrape = require("../scripts/scrape");
var headlinesController = require("../controllers/headlines");
var notesController = require("../controllers/notes");

// renders home and saved pages.
// View engine in server.js tells it to look for the home and saved.handlebars without us having to write .handlebars
module.exports = function(router) {
    router.get("/", function(req, res) {
        res.render("home");
    });
    router.get("/saved", function(req, res) {
        res.render("saved");
    });

    // scrapes and grabs data in controllers headlines and notes.
    router.get("/api/fetch", function(req, res) {
        headlinesController.fetch(function(req, docs) {
            if (!docs || docs.insertedCount === 0) {
                res.json({
                    message: "No new articles today. Check again later."
                });
            } else {
                res.json({
                    message: "Added " + docs.insertedCount + " new articles!"
                });
            }
        });
    });
    router.get("/api/headlines", function(req, res) {
        var query = {};
        if (req.query.saved) {
            query = req.query;
        }

        headlinesController.get(query, function(data) {
            res.json(data);
        });
    });

    router.delete("/api/headlines/:id")
}
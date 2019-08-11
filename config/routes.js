module.exports = function(router) {
        router.get("/", function(req, res) {
            res.render("home");
        });
        router.get("/saved", function(req, res) {
            res.render("saved");
        })
    }
    // View engine in server.js tells it to look for the home and saved.handlebars without us having to write .handlebars
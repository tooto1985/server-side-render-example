var path = require("path");
var fs = require("fs");
var express = require("express");
var app = express();
app.set("view engine", "ejs");
app.get("(/index.html|/Page[0-5].html)", function (req, res, next) {
    if (req.xhr) {
        next();
    } else {
        var filename = req.path;
        if (filename === "/index.html") {
            filename = "/Page0.html";
        }
        fs.readFile(path.join(__dirname, "public", filename), "utf8", function (err, data) {
            if (!err) {
                res.render("index", { content: data.toString(), page: filename });
            } else {
                res.send("error");
                console.log(err);
            }
        });
    }
});
app.use(express.static(path.join(__dirname, "public")));
app.listen(3333);
// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Grabbing our models

var db = require("../models");

// Routes
// =============================================================
module.exports = function (app) {

    // GET route for getting all of the ufo's
    app.get("/api/planet", function (req, res) {

        // db.UFO.findAll({})
        //     .then(function (dbPost) {
        //         res.json(dbPost);
        //     });

        db.UFO.findAll({
            where: {
                id: Math.round(Math.random() * 100)
            }
        })
            .then(function (dbPost) {
                res.json(dbPost);
            });
    });


    // POST route for saving a ufo click. You can create a todo using the data on req.body
    app.get("/api/chart", function (req, res) {

        db.VotedEntry.findAll({})
            .then(function (voteUFO) {
                res.json(voteUFO);
            });
    });

    // DELETE route for deleting ufo. You can access the todo's id in req.params.id
    app.delete("/api/ufo/:id", function (req, res) {

    });

    // PUT route for updating ufo. The updated todo will be available in req.body
    app.put("/api/ufo", function (req, res) {

    });

    // POST route for adding voted-on entries to new table
    app.post("/api/voted/", function (req, res) {
        console.log("Logged sighting data: ");
        console.log(req.body);

        db.VotedEntry.create({
            // datetime: req.body.datetime,
            comments: req.body.comments,
            // city: req.body.city,
            vote: req.body.vote,
            mainId: req.body.mainId
        }).then(function(voteUFO) {
            res.json(voteUFO);
        });
    });


};

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
    app.get("/api/ufo", function (req, res) {

    });

    // POST route for saving a ufo click. You can create a todo using the data on req.body
    app.post("/api/ufo", function (req, res) {

    });

    // DELETE route for deleting ufo. You can access the todo's id in req.params.id
    app.delete("/api/ufo/:id", function (req, res) {

    });

    // PUT route for updating ufo. The updated todo will be available in req.body
    app.put("/api/ufo", function (req, res) {

    });
};
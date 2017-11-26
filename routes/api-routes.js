// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Grabbing our models
var db = require("../models");

// lodash package
var _ = require('lodash');

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


    // GET all user-submitted entries
    app.get("/api/all", function (req, res) {

        // Need to populate array of random numbers (to relate to ids of dataset)
        // Hard-code for testing, then needs to be out of all possible ids in UFO table...
        let entriesArray = [1, 2, 3, 4];
        // let query = entriesArray[Math.floor(Math.random() * entriesArray.length)];
            // console.log(query);

        // Test that random id selected returns corresponding resource from db  ~WORKS
        // db.UserEntry.findOne({
        //     where: {
        //         id: query
        //     }
        // }).then(function(results) {
        //     res.json(results);
        // });
        for (let s = 0; s < entriesArray.length; s++) {
            let entry = entriesArray[s];
        
            db.UserEntry.findAll({
                
                    where: {
                        id: entry
                    }  
                
                // where: {
                //     id: entriesArray.splice(',')
                // }
            }).then(function (results) {
                // results are available to us inside the .then
                for (let i = 0; i < results.length; i++) {
                    let displayEntry = results[i];
                    console.log(displayEntry.id + ' ' + displayEntry.comments);
                }
                // res.json(results[s]);
                // console.log(results);
                console.log('==========================');
                

                // Uses lodash package; trying to return id results from array
                // return _.map(results, function (UserEntry) { return db.UserEntry; })
                
            });
        }
    });

    // POST route for saving a new ufo sighting entry
    app.post("/api/new", function (req, res) {
        console.log("New sighting data: ");
        console.log(req.body);

        db.UserEntry.create({
            comments: req.body.comments,
            datetime: req.body.datetime,
            // created_at: req.body.created_at
        }).then(function (results) {
            res.end();
        });
    });
};

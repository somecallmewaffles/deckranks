var mongo = require('mongodb');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

var mtg = require('mtgtop8');
var cnt = 1;
mtg.standardEvents(function(err, events) {
    if (err) return console.error(err);
    //console.log(events.length);
    for (let event of events){
        //console.log("Name: " + event.title + " ID: " + event.id);
        mtg.event(event.id, function(err, single){
            if (err) return console.error(err);
            //console.log(single.decks);
            //console.log(single.title);
            
            MongoClient.connect(url, function(err, db) {
                if (err) throw err;
                var dbo = db.db("mydb");
                dbo.createCollection(single.title, function(err, res) {
                    if (err) throw err;
                    dbo.collection(single.title).insertOne(single, function(err, res) {
                        if (err) throw err;
                    });
                db.close();
              });
            }); 
        });
    }
});
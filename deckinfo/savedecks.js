var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

var mtg = require('mtgtop8');

MongoClient.connect(url, function(err, db) {
    if (err) return console.error(err);
    var dbo = db.db("mydb");
    if (err) return console.error(err);
    mtg.standardEvents(function(err, events) {
        if (err) return console.error(err);
        for (let event of events){
            mtg.event(event.id, function(err, single){
                if (err) return console.error(err);
                for (let deck of single.decks){
                    console.log (deck.title);
                    dbo.collection("decks").insertOne(deck, function(err, res) {
                        if (err) return console.error(err);
                        console.log(deck.title + "Is now a deck!");
                    });
                 }
            });
        }
    });
});
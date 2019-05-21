var MongoClient = require('mongodb').MongoClient;
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
            console.log(single.title);
            for (let decks of single.decks){
                console.log(cnt + ": " + decks.title + " came in " + decks.result);
                cnt ++;
            }
        });
    }
});
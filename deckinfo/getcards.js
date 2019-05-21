var mtg = require('mtgtop8');
var scry = require("scryfall-sdk");

let masterCardList = {};

mtg.standardEvents(function(err, events) {
    if (err) return console.error(err);
    //console.log(events.length);
    for (let event of events){
        //console.log("Name: " + event.title + " ID: " + event.id);
        mtg.event(event.id, function(err, single){
            if (err) return console.error(err);
            //console.log(single.decks.length);
            for (let decks of single.decks){
                //console.log(decks.cards);
                for (let card of decks.cards){
                    //console.log("Count: " + card.count + " Card: " + card.name );
                    if(card.name in masterCardList){
                        //console.log(card.name + " is a new card!")l\;
                        //console.log(card.name + " is already in the list.");
                        masterCardList[card.name] = masterCardList[card.name] + card.count;
                    }else{
                        //console.log(card.name + " needs to be addded to the list");
                        masterCardList[card.name] = card.count;
                    }
                }
            }
            console.log(masterCardList);
        });
    }
});

console.log(masterCardList);


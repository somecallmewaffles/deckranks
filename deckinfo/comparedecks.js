var scryfall = require("scryfall-sdk");
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

var basicLands = [
	"Plains",
	"Island",
	"Swamp",
	"Mountains",
	"Forest"
	];


//The deck a player is checking (Esper Control.).	
var playerDeck = [
    {name: 'Liliana, Dreadhorde General', count: 1},
    {name: 'Narset, Parter of Veils', count: 1},
    {name: 'Teferi, Hero of Dominaria', count: 4},
    {name: 'Teferi, Time Raveler', count: 1},
    {name: 'Island', count: 1},
    {name: 'Swamp', count: 1},
    {name: 'Drowned Catacomb', count: 4},
    {name: 'Glacial Fortress', count: 4},
    {name: 'Godless Shrine', count: 4},
	{name: 'Hallowed Fountain', count: 4},
	{name: 'Isolated Chapel', count: 4},
	{name: 'Watery Grave', count: 4},
	{name: 'Absorb', count: 3},
	{name: 'Cast Down', count: 2},
	{name: 'Chemister\'s Insight', count: 3},
	{name: 'Dovin\'s Veto', count: 2},
	{name: 'Moment of Craving', count: 1},
	{name: 'Mortify', count: 2},
	{name: 'Vraska\'s Contempt', count: 3},
	{name: 'Search for Azcanta', count: 2},
	{name: 'Cry of the Carnarium', count: 2},
	{name: 'Kaya\'s Wrath', count: 3},
	{name: 'Thought Erasure', count: 4}
	];


var cardsInCommon = 0;
var deckRank;

MongoClient.connect(url, function(err, db) {
	if (err) throw err;
	var dbo = db.db("mydb");
	for (let card of playerDeck){
		dbo.collection("decks").find({"cards.name":card.name}).project({"_id":1}).toArray(function(err, result) {
		    if (err) throw err;
			if (basicLands.indexOf(card.name) == -1) {
				console.log("Looking for: " + card.name);
				console.log(result);
			}
		});
	}
    db.close();
});
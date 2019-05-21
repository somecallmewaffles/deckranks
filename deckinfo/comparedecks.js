var scryfall = require("scryfall-sdk");

//A known meta deck
var EsperControl = [
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

//The deck a player is checking (coincidentally it is also Esper Control).	
var playerDeck = [
    {name: 'Liliana, Dreadhorde General', count: 1},
    {name: 'Narset, Parter of Veils', count: 1},
    {name: 'Teferi, Hero of Dominaria', count: 4},
    {name: 'Teferi, Time Raveler', count: 1},
    {name: 'Island', count: 1},
    {name: 'Swamp', count: 1},
    {name: 'Drowned Catacomb', count: 4},
    {name: 'Glacial Fortressx', count: 4},
    {name: 'Godless Shrinex', count: 4},
	{name: 'Hallowed Fountainx', count: 4},
	{name: 'Isolated Chapelx', count: 4},
	{name: 'Watery Gravex', count: 4},
	{name: 'Absorbx', count: 3},
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
var deckRank

for (let card of playerDeck){
	for (let controlCard of EsperControl) {
		if (card.name == controlCard.name){
			cardsInCommon++;
		}
	}
}

var playerLength = playerDeck.length;

var commonPercent = Math.round( (cardsInCommon/playerLength) * 10) / 10;

if(commonPercent >= 0.8){
	deckRank = 1;
}else if (commonPercent >= 0.7){
	deckRank = 2;
}else if (commonPercent >= 0.6){
	deckRank = 3;
}else if (commonPercent >= 0.5){
	deckRank = 4;
}else{
	deckRank = 5;
}

console.log((commonPercent * 100) + "% similar to Esper Control -Deck Rank: " + deckRank);
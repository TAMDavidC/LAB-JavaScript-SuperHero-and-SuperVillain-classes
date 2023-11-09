/*
David Cruz
11/9/2023

---> tasks
[x] create superHero and SuperVillain class from the SuperHuman class
	the classes need the construtor with the paramenters of name, alias, and powerlevel
[x] add a battle method in the superhero class that takes the supervillan as a parameteer.
	it returns true if the heros power is equal or grater than the villian and false if not.
[x] Add getEvilChuckle method in the supervillian class that returns "Ha ha ha!"
[x]modify the selctionChanged to call the slected hero's battle method that takes the selected villian.
	Then display the winner.

---> submission results
1. 8/10 or 4/5
	the text was supposed to be `Winner: ${SuperHuman}!`
2. 
*/

class SuperHuman {
	constructor(name, powerLevel) {
		this.name = name;
		this.powerLevel = powerLevel;
	}
}

// Define SuperHero and SuperVillain classes here
class SuperHero extends SuperHuman{
	constructor (name, alias, powerLevel){
		super(name, powerLevel)
		this.alias = alias;
	}

	battle(superVillian){ // no a:String. Darn
		return this.powerLevel >= superVillian.powerLevel;
	}
}


class SuperVillain extends SuperHuman{
	constructor (name, alias, powerLevel){
		super(name, powerLevel)
		this.alias = alias;
	}

	getEvilChuckle(){
		return "Ha ha ha!";
	}
}


const heroes = {
	"Super Bacon": new SuperHero("Jack Oinker", "Super Bacon", 2),
	"Flat-Man": new SuperHero("Peter Pranker", "Flat-Man", 5),
	"Mighty Woman": new SuperHero("Diana Dense", "Mighty Woman", 8),
	"Captain Marvelous": new SuperHero("Carol Hangers", "Captain Marvelous", 9)
};

const villains = {
	"The Jokester": new SuperVillain("Jack Nastier", "The Jokester", 3),
	"Magnet Man": new SuperVillain("Max Eisenhardt", "Magnet Man", 6),
	"Lex Loner": new SuperVillain("Lex Loner", "Lex Loner", 2),
	"Thankos": new SuperVillain("Thankos", "Thankos", 9)
};

registerHandlers();

function registerHandlers() {
	// Detect selection of hero and villain
	document.querySelector("#heroSelect").addEventListener("change", selectionChanged);
	document.querySelector("#villainSelect").addEventListener("change", selectionChanged);

	selectionChanged();
}

function selectionChanged() {
	const selectedHeroValue = document.querySelector("#heroSelect").value;
	const selectedVillainValue = document.querySelector("#villainSelect").value;

	// Get hero and villain selected
	const selectedHero = heroes[selectedHeroValue];
	const selectedVillain = villains[selectedVillainValue];

	// Your code goes here
	// <p>
	const winnerPElement = document.querySelector("#winner");
	// https://builtin.com/software-engineering-perspectives/javascript-question-mark-operator
	// I knew it was somewhere!
	let winner = (selectedHero.battle(selectedVillain)) ? selectedHero.alias : selectedVillain.alias; // changed name to alias
	// https://www.w3schools.com/js/js_htmldom_html.asp
	// innerHTML, I forgot.
	winnerPElement.innerHTML = `Winner: ${winner}!`;
}

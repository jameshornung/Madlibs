// Instructions

// Using inquirer, constructors, and callbacks, you are going to create a mad libs application which takes in user input and creates a story with those words entered.

// Your constructor should be able to create objects with four properties...

// An empty array of adjectives
// An empty array of nouns
// An empty array of verbs
// An array or string which will contain all of the individual pieces of your story
// Your inquirer prompts should be contained within a recursive function with a callback parameter which we will use to print out our final story

// HINT: Keep in mind how you will select/replace specific elements when laying out the framework for your story and the callback function you will be using to create/print the final product.

// HINT: Start out with a small and simple story before moving onto more complex tales.

var inquirer = require('inquirer');

var Madlib = function(){
	this.adjective = [];
	this.noun = [];
	this.verb =[];
	this.story = function(){console.log('Hi my name is ' + this.noun[0] + '.  I am a ' + this.adjective[0] + ' type of person.  I like to eat ' + this.adjective[1] + ' food.  I used to live  in ' + this.noun[1] + ' which I found to be a ' + this.adjective[2] + ' place.  But now I live in ' + this.noun[2] + ' which I find to be much more ' + this.adjective[3] + '.  I am going to ' + this.verb[1] + ' now.  Goodbye.')};
}

var count = 0;
var newMadLib = new Madlib;

var captureInputs = function(){
	if(count < 4){
		inquirer.prompt([{
			name: 'adjective',
			message: 'Enter an adjective',
			type: 'input'
		},{
			name: 'noun',
			message: 'Enter a noun',
			type: 'input'
		},{
			name: 'verb',
			message: 'Enter a verb',
			type: 'input'
		}]).then(function(answers){

			newMadLib.adjective.push(answers.adjective);
			newMadLib.noun.push(answers.noun);
			newMadLib.verb.push(answers.verb);

			count++;
			captureInputs();
		})
		
	}
	else{
		newMadLib.story();
	}
};

captureInputs();


var inquirer = require('inquirer');

function testFunction(){
	inquirer.prompt([{
		name: 'question',
		message: 'did you see a question?'
	}]).then(function(){
		console.log('success!')
	})
};

testFunction();
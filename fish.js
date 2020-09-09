var chalk = require('chalk');


function Fish(name){
	this.name = name;
	this.stomtach = [];
}
Fish.prototype.eat = function(mouse) {
	// body...
	this.stomtach.push(mouse);
	mouse.die();
};

Fish.prototype.sayHi = function() {
	// body...
	console.log('hello im Fish, my name is' + chalk.blue(this.name));
};

module.exports = Fish;
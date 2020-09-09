function Fish(){
	this.stomtach = [];
}
Fish.prototype.eat = function(mouse) {
	// body...
	this.stomtach.push(mouse);
	mouse.die();
};

module.exports = Fish;
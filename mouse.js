function Mouse(name){
	this.name = name;
	this.dead = false;
}

Mouse.prototype.die = function() {
	// body...
	this.dead = true;
};

module.exports = Mouse; 
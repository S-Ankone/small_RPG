console.log("ok, from dropData");


// CLASS = DROPS : Part of Monsters; Extends GameObject : incase of other resources? : 
function Drop(type, amount, x, y){
	this.type = type;
	this.amount = amount;
	this.x = x;
	this.y = y;
	
	console.log(amount + " " + type + " added @: (" + this.x +"," + this.y + ")");
	
	// DROP UPDATE *!*
	this.update = function(){
		this.drawDrop(type, viewCoord(this.x), viewCoord(this.y));
		this.drawAmount(amount, viewCoord(this.x), viewCoord(this.y));
	} // END of Drop UPDATE
	
	this.drawDrop = function(type, x, y){
		switch(type){
			case "gold":
					this.drawCoins(x, y);
				break;
			case "potion":
				break;
		}
	} // END of drawDrop{}
	
	this.drawAmount = function(amount, x, y){  // Adds text to the drops, specifically the amount dropped.
		amountTXT = theWorld.context;
		amountTXT.font = radius + "px arial";
		amountTXT.textBaseline = "middle";
		amountTXT.textAlign = "center";
		amountTXT.fillStyle = "black";
		amountTXT.fillText(amount, x+radius/2, y+radius/2);
	} // END of drawAmount{}	

	this.drawCoins = function(x, y){
		goldCoins = theWorld.context;
		goldCoins.beginPath();
		goldCoins.arc(x+radius/2, y+radius/2, radius, 0 , 2*Math.PI);
		goldCoins.strokeStyle = "black";
		goldCoins.stroke();
		goldCoins.fillStyle = "yellow";
		goldCoins.fill();
	} // END of DrawCOINS{}
	
} // END of DROP{}




console.log("ok, from dropData");

let type;
let amount;

// CLASS = DROPS : Part of Monsters; Extends GameObject : incase of other resources? : 
class Drop {

	constructor(type, amount, x, y){
		this.type = type;
		this.amount = amount;
		this.x = x;
		this.y = y;
	
	console.log(amount + " " + type + " added @: (" + this.x +"," + this.y + ")");
	
	} // END of Constructor{}

		// DROP UPDATE *!*
	update(){
		this.drawDrop(this.type, viewCoord(this.x), viewCoord(this.y));
		this.drawAmount(this.amount, viewCoord(this.x), viewCoord(this.y));
	} // END of Drop UPDATE
		
	drawDrop(type, x, y){
		switch(type){
			case "gold":
					this.drawCoins(x, y);
				break;
			case "potion":
				break;
		}
	} // END of drawDrop{}
		
	drawAmount(amount, x, y){  // Adds text to the drops, specifically the amount dropped.
		let amountTXT = theWorld.context;
		amountTXT.font = radius + "px arial";
		amountTXT.textBaseline = "middle";
		amountTXT.textAlign = "center";
		amountTXT.fillStyle = "black";
		amountTXT.fillText(amount, x+radius/2, y+radius/2);
	} // END of drawAmount{}	

	drawCoins(x, y){
		let goldCoins = theWorld.context;
		goldCoins.beginPath();
		goldCoins.arc(x+radius/2, y+radius/2, radius, 0 , 2*Math.PI);
		goldCoins.strokeStyle = "black";
		goldCoins.stroke();
		goldCoins.fillStyle = "yellow";
		goldCoins.fill();
	} // END of DrawCOINS{}


} // END of DROP{}

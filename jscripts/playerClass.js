console.log("ok, from player");

// OBJECTS in the world INIT
let thePlayer;
let playerX = 2; // in grid positions
let playerY = 2; // in grid positions
let pMove = 1; // distance of one move for the player
let lootRange = 2;
//let inventory = [];


// CLASS = PLAYER : Extends Being : Extends GameObject ?
function Player(x, y){
	this.x = x; 
	this.y = y; 
	this.speedX = 0;
	this.speedY = 0;
	this.inventory = [];
	
	
	// PLAYER UPDATE *!*
	this.update = function(){
		this.newPos();
		this.drawPlayer(viewCoord(this.x), viewCoord(this.y));
		this.owns();
	}	
	
	this.owns = function(){
		for(i=0; i< this.inventory.length; i++){
			let result = '';
			let item_type = this.inventory[i].type.toString();
			let item_amount = this.inventory[i].amount.toString();
			
			let html_inventory = document.getElementById("inventory");	
			result += '<div>' + item_type + ": " + item_amount + '</div>';
			html_inventory.innerHTML = result;
		}
	}

	
	// PLAYER KEYBOARD INTERACTION
	this.doPlayer = function(e){
		switch(e.keyCode){
			// E = 69
			// R = 82
			// left-Shift = 16
			case 81: // Q - loot the area
					thePlayer.lootArea();
					break;
			case 87: // W - go up	
					thePlayer.speedY = -pMove; 
				break;
			case 83: // S - go down
					thePlayer.speedY = pMove;  
				break;
			case 65: // A - go left
					thePlayer.speedX = -pMove;
				break;
			case 68: // D - go right
					thePlayer.speedX = pMove; 
				break;
		}
	}
	
	// Player Moving (new position calc)
	this.newPos = function(){
    this.x += this.speedX;
    this.y += this.speedY;
  }	

	// Player STOP Moving (key up)
	this.stopPlayer = function(e){ 	
		thePlayer.speedX = 0;
		thePlayer.speedY = 0;
		theWorld.key = false;
	}

	
// ** *!* DEV WORKING HERE *!* *!* *!* ***
	
	this.lootArea = function(){
console.log("player @ (" + this.x + "," + this.y + ")");
// console.log(dropContainer.length);  // ** DEV : TOOL
// console.log(dropContainer[dropContainer.length-1]);   // ** DEV : TOOL
		// go over the drop array
		drawLootRange(this.x, this.y);
		for(d = 0; d < dropContainer.length; d++){
console.log("going over the floor");  // ** DEV : TOOL
		// check for x and y to be in range
			if(dropContainer[d].x >= this.x-lootRange && dropContainer[d].x <= this.x+lootRange && dropContainer[d].y >= this.y-lootRange && dropContainer[d].y <= this.y+lootRange){
console.log(dropContainer.length + " drop(s) found @ index: " + d);  // ** DEV - TOOL
console.log(dropContainer[d]);						// ** DEV - TOOL
				
				if(this.inventory.length < 1){
console.log("I have no items yet");
					this.inventory.push(dropContainer[d]); 	// add item to inventory array
					dropContainer.splice(d, 1);					// remove item from drop array
console.log("I picked up" + this.inventory[0]);		
					theMonster = new Monster();
				} else {
					for(i=0; i< this.inventory.length; i++){
						if (this.inventory[i].type === dropContainer[d].type){
console.log("trying to add the amount");
							this.inventory[i].amount += dropContainer[d].amount;
							dropContainer.splice(d, 1);					// remove item from drop array
							theMonster = new Monster();
						} else {
console.log("adding item to inventory");
							this.inventory.push(dropContainer[d]); 	// add item to inventory array
							dropContainer.splice(d, 1);					// remove item from drop array
							theMonster = new Monster();							
						}
					}
				}
			}
		}
	}


	// Draw Player GFX
	this.drawPlayer = function(x, y){
		// draw the head
		head = theWorld.context;
		head.beginPath();
		head.arc(x+radius, y-(radius*0.8), radius*0.7, 0 , 2*Math.PI);
		head.stroke();
		head.fillStyle = "pink";
		head.fill();
		// draw the body
		body = theWorld.context;
		body.fillStyle = "#000000";
		body.fillRect(x, y, grid, grid);
	}
} // END of PLAYER{}


// Draw LootArea GFX
function drawLootRange(x, y){

	lootTiles = theWorld.context;
	
	for(let w = x-lootRange; w <= x+lootRange; w++){
		for(let h = y-lootRange; h<= y+lootRange; h++){
			lootTiles.fillStyle = "yellow";
			lootTiles.fillRect(viewCoord(w), viewCoord(h), grid, grid);
		}
	}
} // END of drawArea{}
console.log("ok, from player");

let playerX = 2; // in grid positions
let playerY = 2; // in grid positions

let thePlayer;
let pHealth = 100;
let pMove = 1; 
let lootRange = 2;
let pInventory = [];


// CLASS = PLAYER : Extends Being : Extends GameObject ?
class Player extends Being{

	constructor(x, y){

		super(x, y);
		
		this.health = pHealth;
		this.speedX = 0;
		this.speedY = 0;
		this.inventory = pInventory;
	} // END of Constr{}
	
		// PLAYER UPDATE *!*
		update(){
			this.newPos();
			this.drawPlayer(viewCoord(this.x), viewCoord(this.y));
			this.owns();
			this.playerLocation();
		} // End of Update{}	
		
		// OWNS
		owns(){
		for(let i=0; i< this.inventory.length; i++){
			let result = '';
			let item_type = this.inventory[i].type.toString();
			let item_amount = this.inventory[i].amount.toString();
			
			let html_inventory = document.getElementById("inventory");	
			result += '<div>' + item_type + ": " + item_amount + '</div>';
			html_inventory.innerHTML = result;
			}
 		} // END of owns 

		playerLocation(){
			let playerLoc = '';
			
			let html_player_coords = document.getElementById("player_coords");
			playerLoc += '<div>' + "Player @ Location: (" +this.x + "," + this.y + ")" + '</div>';
			html_player_coords.innerHTML = playerLoc;
		} // End of playerLocation
	
	// PLAYER KEYBOARD INTERACTION
	doPlayer(e){
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
		} // End of DoPlayer
	
		// New POSITION { Moving } (new position calc)
	newPos(){
    	this.x += this.speedX;
    	this.y += this.speedY;
  		}	

		// Player STOP Moving (key up)
	stopPlayer(e){ 	
		thePlayer.speedX = 0;
		thePlayer.speedY = 0;
		theWorld.key = false;
		}

	
// ** *!* DEV CONSIDERATION HERE *!* *!* *!* *?*
// May have to move to a 'LootKeeper' to ask
// permissions, esp. in the case of MultiPlayer.
	
	lootArea(){
console.log("player @ (" + this.x + "," + this.y + ")");
// console.log(dropContainer.length);  // ** DEV : TOOL
// console.log(dropContainer[dropContainer.length-1]);   // ** DEV : TOOL
		// go over the drop array
		thePlayer.drawLootRange();
		for(let d = 0; d < dropContainer.length; d++){
console.log("going over the floor");  // ** DEV : TOOL
		// check for x and y to be in range
			if(dropContainer[d].x >= this.x-lootRange && dropContainer[d].x <= this.x+lootRange && dropContainer[d].y >= this.y-lootRange && dropContainer[d].y <= this.y+lootRange){
console.log(dropContainer.length + " drop(s) found @ index: " + d);  // ** DEV - TOOL
console.log(dropContainer[d]);						// ** DEV - TOOL
				
				if(this.inventory.length < 1){  // Checking if player has Items
console.log("I have no items yet");
					this.inventory.push(dropContainer[d]); 	// add item to inventory array
console.log("Player picked up " + this.inventory[0].amount + " " + this.inventory[0].type);		
					dropContainer.splice(d, 1);					// remove item from floor array
					theMonster = new Monster(monsterX, monsterY);								// ** DEV *~* MAKING NEW MONSTER ~ should probably be done by a monsterMaster
				} else { 												// Player already has items.
					for(let i=0; i< this.inventory.length; i++){
						if (this.inventory[i].type === dropContainer[d].type){  // If there is already a type of the drop.
console.log("trying to add the amount");
							this.inventory[i].amount += dropContainer[d].amount;
console.log("added the amount" + dropContainer[d].amount);
							dropContainer.splice(d, 1);					// remove item from drop array
							theMonster = new Monster(monsterX, monsterY);					// ** DEV *~* MAKING NEW MONSTER ~ should probably be done by a monsterMaster
						} else {									 // It's an entirely New item.
console.log("adding item to inventory");
							this.inventory[i].push(dropContainer[d]); 	// add item to inventory array
console.log("i added " + this.inventory[i].type + inventory[i].amount );							
							dropContainer.splice(d, 1);					// remove item from drop array
							theMonster = new Monster(monsterX, monsterY);					// ** DEV *~* MAKING NEW MONSTER ~ should probably be done by a monsterMaster
						}
					}
				}
			}
		}
	}


	// Draw Player GFX
	drawPlayer(x, y){				// viewCoords get entered.
		// draw the head
		let head = theWorld.context;
			head.beginPath();
			head.arc(x+radius, y-(radius*0.8), radius*0.7, 0 , 2*Math.PI);
			head.stroke();
			head.fillStyle = "pink";
			head.fill();
		// draw the body
		let body = theWorld.context;
			body.fillStyle = "#000000";
			body.fillRect(x, y, grid, grid);
	}

	// Draw LootArea GFX
	drawLootRange(){			// Player Coords get entered
		let lootTiles = theWorld.context;
		
		for(let w = this.x-lootRange; w <= this.x+lootRange; w++){
			for(let h = this.y-lootRange; h<= this.y+lootRange; h++){
				lootTiles.fillStyle = "#e6ffe6";
				lootTiles.fillRect(viewCoord(w), viewCoord(h), grid, grid);
			}
		}
		return;
	} // END of drawLootRange{}

} // END of playerCLASS{}
 


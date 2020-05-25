console.log("ok, from Monsters");

let theMonster;
let monsterX;
let monsterY; 
let theHealth = 100;
let mInventory = [];
let drop_type = "gold";
let drop_amount = 10;


// CLASS = MONSTERS : Extends Being ?
function Monster(){
	this.x = Math.floor((Math.random() * floorW)); // in grid positions
	this.y = Math.floor((Math.random() * floorH)); // in grid positions
	this.health = theHealth;
	this.exists = true;
	this.aLive = true;
	this.hasMoved = false;
	this.mInventory = [];


console.log("Monster Spawn @ (" + this.x + "," + this.y + ")");
	let drop = new Drop(drop_type, drop_amount, this.x, this.y);
	this.mInventory.push(drop);
console.log(this.mInventory[0]);

	this.update = function(){
		if(this.exists){
			if(this.aLive){
					this.drawMonster(viewCoord(this.x), viewCoord(this.y));
					this.doLife();
			} else { 
console.log("monster died");
					this.death();
			}
		} 
		return;
	}	

	this.doLife = function(){

		if(!this.hasMoved){
			this.x = Math.floor((Math.random() * floorW)); // in grid positions
			this.y = Math.floor((Math.random() * floorH)); // in grid positions
			this.hasMoved = true;
		}
		return;
	}

	this.death = function(){
		this.doDrop(this.x, this.y);
		this.x = undefined; 
		this.y = undefined; 
		this.exists = false;
	}


// ** *!* DEV WORKING HERE *!* *!* *!* ***

	this.doDrop = function(x, y){
console.log(this.mInventory.length + " item(s) on Monster");
console.log(this.mInventory[0]);
		
		for(i = 0; i < this.mInventory.length; i++){
console.log("do drop");
				this.mInventory[i].x = this.x +2;
				this.mInventory[i].y = this.y;
console.log("setting new coords");				
				dropContainer.push(this.mInventory[i]);			
console.log(dropContainer.length + " item(s) on the floor");
console.log(dropContainer[i]);
				this.mInventory.splice(i , 1);
console.log(this.mInventory.length + " items(s) on Monster");
		}	
	}

	this.drawMonster = function(x, y){
		// draw the mhead
		mhead = theWorld.context;
		mhead.beginPath();
		mhead.arc(x+(radius), y-(radius*0.8), radius*0.8, 0 , 2*Math.PI);
		mhead.strokeStyle = "black";
		mhead.stroke();
		mhead.fillStyle = "white";
		mhead.fill();
		// draw the mbody
		mbody = theWorld.context;
		mbody.fillStyle = "white";
		mbody.fillRect(x, y, grid, grid);
		// draw some decoration
		mribs = theWorld.context;
		mribs.beginPath();
		mribs.moveTo(x, y+4);
		mribs.lineTo(x + (radius-2), y+4);
		mribs.moveTo(x + (radius+2), y+4);
		mribs.lineTo(x+grid, y+4);
		mribs.moveTo(x, y+8);
		mribs.lineTo(x + (radius-2), y+8);
		mribs.moveTo(x + (radius+2), y+8);
		mribs.lineTo(x+grid, y+8);
		mribs.strokeStyle = "#000000";
		mribs.stroke();
	}
} // END of Monster{}


/* CLASS = Being
let being = New createBeing( /**DEV COordinaten spawn **)  { inventory: '[]', life: '100',	function move(){		}

function createBeing(x, y){
	this.health = theHealth;
	this.aLive = true;
	this.mInventory = [];
	this.x = coordHelp(x);
	this.y = coordHelp(y);
	
	this update = function(){
		head = theWorld.context;
		head.beginPath();
		head.arc(this.x+radius, this.y-(radius*0.8), radius*0.7, 0 , 2*Math.PI);
		head.stroke();
		head.fillStyle = "pink";
		head.fill();		
		
		//this.death();
	}
	
	this.death = function(){
		if(!this.aLive){
			doDrop();
		}
		return;
	}
}*/

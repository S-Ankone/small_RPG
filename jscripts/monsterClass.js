console.log("ok, from Monsters");

let theMonster;
let monsterX = Math.floor(Math.random() * (floorW + 1)); // in grid positions
let monsterY = Math.floor(Math.random() * (floorH + 1)); // in grid positions
let mHealth = 100;
let mInventory = [];
let drop_type = "gold";
let drop_amount = 10;


// CLASS = MONSTERS : Extends Being 
class Monster extends Being {

	constructor(x, y) {
		
		super(x, y);

		this.health = mHealth;
		this.exists = true;
		this.aLive = true;
		this.hasMoved = false;
		this.mInventory = [];

console.log("Monster Spawn @ (" + this.x + "," + this.y + ")");
		let drop = new Drop(drop_type, drop_amount, this.x, this.y);
		this.mInventory.push(drop);
	} // End of Constructior{}

	update(){
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
		}	// end of update

	doLife(){

		if(!this.hasMoved){
			this.x = Math.floor((Math.random() * floorW)); // in grid positions
			this.y = Math.floor((Math.random() * floorH)); // in grid positions
			this.hasMoved = true;
		}
		return;
		} //end of dolife;


	death (){
		this.doDrop(this.x, this.y);
		this.x = undefined; 
		this.y = undefined; 
		this.exists = false;
	} // end of death

	doDrop(x, y){
console.log(this.mInventory.length + " item(s) on Monster");
		for(let i = 0; i < this.mInventory.length; i++){
console.log("do drop");
				this.mInventory[i].x = x +2;
				this.mInventory[i].y = y;
				dropContainer.push(this.mInventory[i]);			
console.log(dropContainer.length + " item(s) on the floor");
console.log(dropContainer[i]);
				this.mInventory.splice(i , 1);
//console.log(this.mInventory.length + " items(s) on Monster");
			}	

	} // end of doDrop


	drawMonster(x, y){
		// draw the mhead
		let mhead = theWorld.context;
			mhead.beginPath();
			mhead.arc(x+(radius), y-(radius*0.8), radius*0.8, 0 , 2*Math.PI);
			mhead.strokeStyle = "black";
			mhead.stroke();
			mhead.fillStyle = "white";
			mhead.fill();
		// draw the mbody
		let mbody = theWorld.context;
			mbody.fillStyle = "white";
			mbody.fillRect(x, y, grid, grid);
			// draw some decoration
		let mribs = theWorld.context;
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
	} // END of drawMonster;

} // END of Monster{}



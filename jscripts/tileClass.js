console.log("ok, from the tileData");

// CLASS Tiles 
class Tile{

	constructor(x, y){  // Creates a single tile named "aTile", called by FloorMaster
		this.x = x; 
		this.y = y; 
	} // END of Constr.

	// ** DEV: Some logic to make different tiles, so the world will be interesting.
		
	// TILE UPDATE *!*
	update = function(){
		this.drawTile(viewCoord(this.x), viewCoord(this.y)); // DO NOTE: coordinates set to viewCoordinates.
	} // End of update
		
	// DRAW
	drawTile = function(x, y){
		let floor = theWorld.context;
		floor.fillStyle = "#cccccc";
		floor.fillRect(x, y, grid, grid);
		
		let edge = theWorld.context;
		edge.beginPath();
		edge.rect(x, y, grid, grid);
		edge.strokeStyle = "#999999";
		edge.stroke();
	}// END of drawTile

} // END of Tile{}
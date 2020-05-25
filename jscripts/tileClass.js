console.log("ok, from the tileData");

// CLASS Tiles 
function Tile(x, y){  // Creates a single tile named "aTile", called by FloorMaster
	this.x = x; 
	this.y = y; 
// ** DEV: Some logic to make different tiles, so the world will be interesting.
	
	this.update = function(){
		this.drawTile(viewCoord(this.x), viewCoord(this.y)); // DO NOTE: coordinates set to viewCoordinates.
	}
	
	this.drawTile = function(x, y){
		floor = theWorld.context;
		floor.fillStyle = "#cccccc";
		floor.fillRect(x, y, grid, grid);
		
		edge = theWorld.context;
		edge.beginPath();
		edge.rect(x, y, grid, grid);
		edge.strokeStyle = "#999999";
		edge.stroke();
	}
} // END of Tile{}

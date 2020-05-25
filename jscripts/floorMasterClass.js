console.log("ok, from floorMaster");

let floorW = viewWidth/grid; // in amounts of aTiles
let floorH = viewHeight/grid; // in amounts of aTiles
let tileLayer = [[]];
let dropContainer = [];


class FloorMaster{

	constructor(){  // Creates the floor tiles, Manages object on the floor (drops / obstacles)

		this.dropContainer = [];
		
		//MAKE tileLayer[[]] - the DOUBLE Array
		tileLayer = new Array(floorW);
		for(let i=0; i < tileLayer.length; i++){
			tileLayer[i] = new Array(floorH);
		} // end

		// CREATE the TILES
		for(let i=0; i< floorW; i++){
			for(let j=0; j< floorH; j++){
				let aTile = new Tile(i, j);
				tileLayer[i][j] = aTile;
			}	
		} // end

	} // End of Constr.
	
		// ** floorMaster UPDATE **
		update (){
			for(let i=0; i< floorW; i++){
				for(let j=0; j< floorH; j++){
					tileLayer[i][j].update();
				}	
			}
			for(let d=0; d< dropContainer.length; d++){
					dropContainer[d].update();
			} 
		} // end of UPDATE{}
		
} // END of FloorMaster{}



/*	************************
	*** HELPER FUNCTIONS ***
	************************ */

function viewCoord(coord){ // gridCoordinate in actual 'viewWidth' coordinates
	thisCoord = (coord * grid);
	return thisCoord;
}

function gridCoord(coord){ // viewCoordinate in GRID coordinates
	thisCoord = (coord / grid)+1;
	return thisCoord;
}

// MOUSE COORDS !
function getCoords(e){
	
	for(let i=0; i< floorW; i++){
		for(let j=0; j< floorH; j++){
			if(e.clientX >= viewCoord(tileLayer[i][j].x) && e.pageX < viewCoord(tileLayer[i][j].x) + grid){
				theWorld.x = i+1;
			}
			if(e.clientY >= viewCoord(tileLayer[i][j].y) && e.pageY < viewCoord(tileLayer[i][j].y) + grid){
				theWorld.y = j+1;
			}
		}
	}
		// DISPLAY cords on html
	document.getElementById("mouse_coords").innerHTML = "Mouse Coordinates: (" + theWorld.x + "," + theWorld.y + ")";
}

function clearCoords(){
	document.getElementById("mouse_coords").innerHTML = "";
} 

// END of HELPERS
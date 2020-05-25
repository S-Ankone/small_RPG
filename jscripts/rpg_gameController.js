console.log("ok, from the gameController");

// CANVAS INIT
let viewWidth = 500;
let viewHeight = 500;
let updateFQ = 100;

// WORLD INIT
let theWorld;
let theFloorMaster;
let grid = 20
let radius = grid/2


		/* 	***********************
		** START OF THE GAME **
	*********************** */
window.onload = function(){
	startGame();
}

function startGame(){
	theWorld = new World();
	thePlayer = new Player(playerX, playerY);
	theMonster = new Monster(monsterX, monsterY);
	theWorld.start();	
} // END startGame{}



// Create the World 
class World{

	constructor(){
		this.canvas = document.getElementById("game_view");
	}

	start(){
		this.canvas.width = viewWidth;
		this.canvas.height = viewHeight;
		this.context = this.canvas.getContext("2d");
		theFloorMaster = new FloorMaster();
		addListeners();
		this.interval = setInterval(updateWorld, updateFQ);
	}
		clear(){
		this.context.clearRect(0,0, this.canvas.width, this.canvas.height);
	}
} // END CreateWorld{}


// UPDATE FUNCTION
function updateWorld(){   // Is run every UPDATE at the interval specified at world creation;
	theWorld.clear();
	theFloorMaster.update();
	aFight();
	thePlayer.update();
	theMonster.update();
}	// END updateWorld{}

// ADD LISTENERS
function addListeners(){  // function to add all the listeners to the new world
	window.addEventListener('keydown', thePlayer.doPlayer);
  	window.addEventListener('keyup', thePlayer.stopPlayer);
			// these 2 below are to enable helper functions
			theWorld.canvas.addEventListener('mousemove', getCoords);	
			theWorld.canvas.addEventListener('mouseout', clearCoords);
} // END addListeners{}


// A Fight ???
function aFight(){
	if(thePlayer.x === theMonster.x && thePlayer.y === theMonster.y){
		console.log("HIT");
		theMonster.aLive = false;
	}
} // END a Fight.




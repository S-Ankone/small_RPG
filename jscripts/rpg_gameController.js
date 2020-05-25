console.log("ok, from the gameController");

// CANVAS INIT
let viewWidth = 500;
let viewHeight = 500;
let updateFQ = 100;

// WORLD INIT
let theWorld;
let grid = 20
let radius = grid/2


/* 	***********************
		** START OF THE GAME **
		*********************** */
window.onload = function(){
	startGame();
}

function startGame(){
	theWorld = new CreateWorld();
	thePlayer = new Player(playerX, playerY);
	theMonster = new Monster();
	theWorld.start();	
} // END startGame{}


// UPDATE FUNCTION
function updateWorld(){   // Is run every UPDATE at the interval specified at world creation;
	theWorld.clear();
	theFloorMaster.update();
	aFight();
	thePlayer.update();
	theMonster.update();
}	// END updateWorld{}


// Create the World 
function CreateWorld (){
	this.canvas = document.getElementById("game_view");
	this.start = function(){
		this.canvas.width = viewWidth;
		this.canvas.height = viewHeight;
		this.context = this.canvas.getContext("2d");
		theFloorMaster = new FloorMaster();
		addListeners();
		this.interval = setInterval(updateWorld, updateFQ);
	}
	this.clear = function(){
		this.context.clearRect(0,0, this.canvas.width, this.canvas.height);
	}
} // END CreateWorld{}


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
}




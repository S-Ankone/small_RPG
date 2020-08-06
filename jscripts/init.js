// CANVAS INIT
let viewWidth = 500;
let viewHeight = 500;
let updateFQ = 100;


// WORLD INIT
let theWorld;
let grid = 20
let radius = grid/2

let theFloorMaster;
	let floorW = viewWidth/grid; // in amounts of aTiles
	let floorH = viewHeight/grid; // in amounts of aTiles
let tileLayer = [[]];
let dropContainer = [[]];

let tileX = grid;
let tileY = grid;

let thePlayer;
let playerX = 3; // in grid positions
let playerY = 3; // in grid positions
let inventory;

let theMonster;
let monsterX = 11; // in grid positions
let monsterY = 11; // in grid positions
let theHealth = 100;
let mInventory = [];
let drop_amount = 10;

let theDrop;
let dropX = 8; // in grid positions
let dropY = 8; // in grid positions
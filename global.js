const WHITE = true;						// the player that moves first
const BLACK = false;					// the player that moves second
const LENGTH = 75;						// determines dimension of 64 tiles that make up the board
const OFFSET = 10;						// ensures pieces are drawn relatively centered on the tile
const PIECE_FONT = "70px Arial unicode MS";
const MELLOW_YELLOW = "rgba(255, 255, 102, 0.7)";
const LIGHT_RED = "rgba(255, 0, 0, 0.25)"

var canvas;								// the canvas the board is drawn on
var ctx;
var ctxHighlight;
var actionCount = 0;					// keep track of the number of moves that have been made in the current game
var actionLog = [];						// record actions taken during a game
var board;								// primary board used to play the game
var compositions;						// contains all chess compositions. Initialized in chessboardScript.js
var currentComposition;					// the composition the player is currently interacting with. Initialized in chessboardScript.js
var desiredPly = 1;						// the desired search depth			
var isWhiteTurn = true;					// indicates which colour's turn it is to move
var gameIsRunning = false;				// true when the player is playing a game
var gameLoopIsRunning = false;			// used to prevent multiple occurences of the gameLoop function from running at once
var highlightedTiles = [];				// contains all actions for a piece in a given moment (can be conceptualized as the list of tiles highlighted when a piece is selected)
var lastSelectedTile; 					// for moving pieces
var nCommitToSolBranchTurn;				// MAY NOT NEED. Check after getHint is working		
var objLogData;							// holds information about the last piece to move, including the type, its previous position and its current position (action)
										// DELETE this and replace with previousSections if necessary, or delete previous...Move vars instead
var pawnThatMovedTwoLastTurn = null;	// pawn that moved two tiles on the last turn
var playerIsWhite = true;				
// var currentComposition.lastValidTurnForHint = 0;
var previousBlackMove = {
	action : null
};
var previousWhiteMove= {
	action : null
};

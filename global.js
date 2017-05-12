/* Billings, M. */

const WHITE = true;						// the player that moves first
const BLACK = false;					// the player that moves second
//const LENGTH = 75;						// determines dimension of 64 tiles that make up the board
const OFFSET = 10;						// ensures pieces are drawn relatively centered on the tile
// const PIECE_FONT = "70px Arial unicode MS";
const PIECE_FONT = "70px Tahoma";
const MELLOW_YELLOW = "rgba(255, 255, 102, 0.7)";
const LIGHT_RED = "rgba(255, 0, 0, 0.25)"
const TILE_COLOR1 = "rgb(160,82,45)";
const TILE_COLOR2 = "rgb(245,222,179)";


// globals to reference the images that will be used to represent the chess pieces
var WHITE_PAWN_IMG; 
var WHITE_KNIGHT_IMG; 
var WHITE_BISHOP_IMG;
var WHITE_ROOK_IMG; 
var WHITE_QUEEN_IMG; 
var WHITE_KING_IMG; 
var BLACK_PAWN_IMG; 
var BLACK_KNIGHT_IMG; 
var BLACK_BISHOP_IMG;
var BLACK_ROOK_IMG;
var BLACK_QUEEN_IMG;
var BLACK_KING_IMG; 

var canvas;								// the canvas the board is drawn on
var ctx;
var ctxHighlight;
var ctxPiece;                           // context for paining chess pieces
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
var objLogData;							// holds information about the last piece to move, including the type, its previous position and its current position (action)
										// DELETE this and replace with previousSections if necessary, or delete previous...Move vars instead
var pawnThatMovedTwoLastTurn = null;	// pawn that moved two tiles on the last turn
var playerIsWhite = true;				
var previousBlackMove = {
	action : null
};
var previousWhiteMove= {
	action : null
};
var TILE_SIZE                           // dimensions of individual tiles that make up the checkered pattern of the board

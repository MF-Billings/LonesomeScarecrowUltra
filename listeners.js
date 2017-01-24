/* Billings, M., Kurylovich, A. */

// assign listeners
$(document).ready(function() {	// use to be window.load - delete this comment if everything still works fine
	document.getElementById('uiHint').addEventListener('click', function() {
		getHintListener(
			board
			// parseInt(document.getElementById('turnsRemaining').innerHTML),
			// getComposition(currentComposition.groupId, currentComposition.composition.id)
		);
	});
	document.getElementById('uiNext').addEventListener('click', nextProblemListener);
	document.getElementById('uiReset').addEventListener('click', resetListener);
	document.getElementById('uiUndo').addEventListener('click', undoListener);
	document.getElementById('btnAcceptPromotion').addEventListener('click', acceptPromotionListener);
});

$(window).load(function() {
	document.getElementById('chesspieceCanvas').addEventListener('click', function(event) {
        var canvasLeft, canvasTop;
		var x, y;
		
		// click spam bug fix (see if this var can be removed from some places)
		if (gameLoopIsRunning)
			return false;
		
		ctxHighlight.clearRect(0, 0, LENGTH * 8, LENGTH * 8);			// remove all visible highlighting on the board
		
		/* accounts for fact that board may not be positioned in the top left corner of the page
		 * border isn't counted with offset()
		 */
		canvasLeft = $('#board').offset().left + parseInt($('#board').css('border-left-width')); 
		canvasTop = $('#board').offset().top;
	
		x = event.pageX - canvasLeft;
        y = event.pageY - canvasTop;	
		// DEBUG console.log('event.pageX - canvasLeft = ' + event.pageX + '-' + canvasLeft);
        gameLoop(x, y);
    });
});

/* show promotion dialog when pawn reaches opposite side of board
 *
 */
function acceptPromotionListener() {
	var newPiece;
	var isWhite = $('#promotion').data('isWhite');
	var row = $('#promotion').data('row');
	var col = $('#promotion').data('column');
	var promotionPick;
	var fadeOutTime = 150;
	
	switch ($('input[name=promotionPick]:checked').val()) {
		case "Queen":
			newPiece = new Queen(isWhite);
			break;
		case "Rook":
			newPiece = new Rook(isWhite);
			newPiece.hasMoved = true;
			break;
		case "Bishop":
			newPiece = new Bishop(isWhite);
			break;
		case "Knight":
			newPiece = new Knight(isWhite);
			break;
	}
	
	board.addPiece(newPiece, row, col);
	draw(board);
	
	// close dialog and remove mask
	$('#mask, #promotion').fadeOut(fadeOutTime, function() {
		$('#mask').remove();
		$('input[name=promotionPick][value=Queen]').prop('checked', true);		// make sure Queen is still checked as the default promotion option
	});
	
	//update game status
	inCheck(board, !playerIsWhite);										// inCheck status may be different
	
	//update tracking variables
	highlightedTile = null;
	highlightedTiles = []; 												// reset which tiles are hightlighted each time this runs
	isWhiteTurn = (lastSelectedTile.piece.isWhite) ? false : true;		// toggle game turn after a piece has moved
	updateHintStateValidity();
	CPUTurnWrapper(); 													// run code for Black's turn once fade-out has transpired
}

/* 
 * NOTE only the white tiles of the boards in valid states should be used to check for valid states, as data regarding black tiles are unnecessary and inaccurate
 * NOTE can't do equality check as black tile data aren't guaranteed to be identical to that of valid board states
 * NOTE does not handle situations where position is represented by ~ but no piece  type is given
 */
function getHintListener(board) {
	/*
	var checkmateMoves = [];				// NOTE not used
	var candidates;
	var currentNode;						// includes root of solution trees
	var turnsRemaining = parseInt(document.getElementById('turnsRemaining').innerHTML);
	var enemyAction;
	var hint;								// an unparsed hint object which uses strings to represent actions. Needs to be parsed.
	var parsedHint;							// an object containing all relevant information required to carry out the hint functionality
	var parsedSolution;
	var b, b2;
	var rand;
	*/
	
	if (currentComposition.composition.id != null) {
		// select one of the moves from the first solution stage
		if (turnsRemaining > 0) {
			var candidates;
			/* 1st turn. Choose randomly from the set of correct choices
			 *
			 */
			/*
			if (turnsRemaining == getTurnLimit(currentComposition.composition.id)) {
				var rand = getRand(0, currentComposition.composition.solution.length);
				var currentNode = currentComposition.composition.solution[rand].root;
				hint = currentNode.data;		//currentComposition.composition.solution[rand];
				parsedSolution = parseNotation(hint.playerAction, currentComposition.composition.initialState, playerIsWhite);
				
				// have to find the piece that is being referred to in the hint
				candidates = getCandidateTiles(board, WHITE, parsedSolution.type, parsedSolution.toRow, parsedSolution.toCol);
				if (candidates.length == 1) {
					// store data in separate object that will be used to carry out the appropriate action
					parsedHint = {
						tile : candidates[0],
						toRow : parsedSolution.toRow,
						toCol : parsedSolution.toCol,
						promotesTo : hint.promotesTo
					};
				}
				else if (candidates.length == 0) { throw "candidates collection contains 0 matches"; }
				else { throw "candidates collection contains multiple matches"; }
			}
			*/
			/* choose move from a list that can guarantee victory
			 */
			var depthLimit = turnsRemaining * 2 - 1;
			
			var gameTree = new Tree(new Board(board));
		}
	}
}

function solutionSearch(board, colourToInspect, depth) {
	for (var i = 0; i < board.occupiedTiles.length; i++) {
		var currentTile = board.occupiedTiles[i];
		// only check pieces belonging to colour which is acting this turn
		if (currentTile.piece.isWhite == isWhiteTurn) {
			var actions = currentTile.piece.getStandardMoves(board, false, row, column);
			// include special moves that particular piece types can do
			if (currentTile.piece.type == "Pawn") {
				actions.concat(getEnPassantMoves(board, false, currentTile));
			}
			else if (currentTile.piece.type == "King") {
				if ((currentTile.piece.isWhite && currentTile.row == 7) ||
					(!currentTile.piece.isWhite == currentTile.row == 0)) {
					actions.concat(canCastle(currentTile, board.getTile(currentTile.row, 0)));
					actions.concat(canCastle(currentTile, board.getTile(currentTile.row, 7)));
				}
			}
			// create a new board state for each action the current piece can perform
			for (var j = 0; j < actions.length; j++) {
				var b = new Board(board);
				b.movePiece(currentTile.row, currentTile.column, actions[j].agent.row, actions[j].agent.column);
				var checkmates = getCheckmates(board, colourToInspect);
				if (checkmates.length > 0) {
					
				}
			}
		}
	}
}

/* Reset the board to its initial state
 *
 */
function resetListener() {
	var problemType;
	var turnsRemaining;
	
	if (!gameIsRunning)
		gameIsRunning = true;
	
	isWhiteTurn = true;
	highlightedTiles = [];
	
	// reset and draw board
	// currentComposition = getComposition(currentComposition.groupId, currentComposition.composition.id);
	if (currentComposition.composition !== undefined) {
		board = new Board(currentComposition.composition.initialState);
		currentComposition.composition.states = [];								// reset array
	}
	else {
		throw ('currentComposition is undefined');
	}
	draw(board);
	
	problemType = getGroup(currentComposition.groupId);
	if (problemType.id >= 1 && problemType.id <= 4) {
		turnsRemaining = currentComposition.groupId;
	}
	document.getElementById('turnsRemaining').innerHTML = turnsRemaining;
	currentComposition.turn = 0;
	currentComposition.nodeId = undefined;
	currentComposition.lastValidTurnForHint = 0;
	ctxHighlight.clearRect(0,0, LENGTH * 8, LENGTH * 8);			// remove any visible highlighting
	outputText('Turn: White');
	$('#uiUndo').attr('disabled', true);
	$('#uiStart').attr('disabled', true);
	$('#uiHint').attr('disabled', false);
}

/* Undo the last turn. Returns player to the state before their last move, rolling back the most recent actions of the player and CPU.  Caribou contests
 *
 */
function undoListener() {
	var previousState;
	isWhiteTurn = true;
	
	// restart the game if the last move ended it
	if (!gameIsRunning)
		gameIsRunning = true;
	
	// the last valid turn can't be ahead of the current turn
	if (currentComposition.lastValidTurnForHint == currentComposition.turn)
	// && currentComposition.turn != getTurnLimit(currentComposition.composition.id)) 
	{
		currentComposition.lastValidTurnForHint = currentComposition.turn - 1;		// currentTurn counter will be decremented after this function returns
	}
	
	if (currentComposition.composition.states.length >= 1) {
		// remove last board from state list if it's the same (same pieces in same position) as the current board
		if (JSON.stringify(currentComposition.composition.states[currentComposition.composition.states.length - 1]) === JSON.stringify(board)) {
			currentComposition.composition.states.splice(-1, 1);
		}
		// the following will run if an element is removed from an array of length 1
		if (currentComposition.composition.states.length > 0) {
			previousState = currentComposition.composition.states[currentComposition.composition.states.length - 1];
			
			if (previousState !== undefined) {		// pop used on empty array
				board = new Board(previousState);
			}
			document.getElementById('turnsRemaining').innerHTML = parseInt(document.getElementById('turnsRemaining').innerHTML) + 1;
			
			currentComposition.turn--;
			/*
			 * 2nd condition arises due to the different handling of the final move
			 */
			if (currentComposition.currentSolutionNode.parent
			&& document.getElementById('turnsRemaining').innerHTML != 1) {		
				currentComposition.currentSolutionNode = currentComposition.currentSolutionNode.parent;
			}
		}
		else {
			resetListener();
		}
	}
	else {
		resetListener();
	}
	
	draw(board);
	
	// if (currentComposition.currentSolutionNode == currentComposition.turn) {
		// currentComposition.currentSolutionNode = null;
	// }
	
	// revert UI elements
	outputText('Turn: White');
	$('#uiHint').attr('disabled', false);
}

/* Generate a new, currently unsolved problem in the same class as the currently selected problem type
 *
 */
function nextProblemListener() {
	// var composition; 
	
	gameIsRunning = true;
	isWhiteTurn = true;
	highlightedTiles = [];										// prevent the selection of a highlighted tile as an action if the player selects a piece and then uses the next problem widget
	ctxHighlight.clearRect(0, 0, LENGTH * 8, LENGTH * 8);		// remove visual presence of highlight
	
	// reset states for composition
	// if (currentComposition.composition.id !== null) {
	if (currentComposition.composition !== undefined && currentComposition.composition.id !== undefined) {//currentComposition.composition !== null && 
		// currentComposition.composition = getComposition(currentComposition.groupId, currentComposition.composition.id);
		currentComposition.composition.states = [];
	}

	loadRandomComposition();
	
	// update UI elements
	outputText('Turn: White');
	$('#output').css('visibility', 'visible');					// display which colour's turn it is to user
	$('.uiReset').attr('disabled', false);
	$('#uiUndo').attr('disabled', true);
}

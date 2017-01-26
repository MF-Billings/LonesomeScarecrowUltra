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
		}
		else {
			resetListener();
		}
	}
	else {
		resetListener();
	}
	
	draw(board);
	
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

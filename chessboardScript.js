/* Billings, M., Kurylovich, A. */
// Special comment tags for cleanup: NOTE, DELETE, DEBUG, TODO

// BUG healey 18 undo from final move is broken
// TODO check sol'n tree for healey #120 if Kc4 - not sure if I cover all the possibilities: Kc5 after Kc4 has no hint
// TODO getHint can be spammed
// TODO remove mate in 3 that has white king, queen, pawn, vs black king
// TODO list problem sources
// TODO problems on phone: fieldset is off page, pieces are a different size, presses not registered where pieces are located
// TODO reset listener showing undefined and NaN for moves remaining for gID 1
// TODO labels change if the player switch to a different problem group, even when there's no unsolved problems of that group remaining
// TODO add a help button which does the next white move and the next Black move (unless it is already checkmate)
// TODO prevent player from being able to control BLACK

$(document).ready(function() {
	var canvas = document.getElementById('chessboard');
	var ctxPiece = document.getElementById('chesspieceCanvas').getContext('2d');				// the context that the pieces are drawn on
	ctxPiece.font = PIECE_FONT;
	ctxHighlight = document.getElementById('highlight').getContext('2d');
	board = new Board();
	
	compositions = {
		// currentCompositionId : null,							// id for composition currently displayed to player
		currentCompositionGroupId : null,						// used to find composition group that composition belongs to
		nextID : 0,												// next value that will be given as an id to a new composition
		problemTypes : {		
			checkmateInOne : new CompositionGroup(1),
			checkmateInTwo : new CompositionGroup(2),
			checkmateInThree : new CompositionGroup(3),
			checkmateInFour : new CompositionGroup(4)
		}
	};
	
	currentComposition = {
		currentSolutionNode : undefined,		// keep track of location within solution tree
		composition : undefined,
		groupId : undefined,
		lastValidTurnForHint : 0,
		turn : 0,					// 1st turn is turn 0
		// nodeId : undefined		// don't remember what this was supposed to be for; go through and delete this if getHint gets working without it
	}
	
	populateCompositionList();
    drawBoard(canvas, canvas.getContext('2d'));
	
	// DEBUG
	// var pieceLetter = "KQRBNSP";
	// var file = "abcdefgh";
	// var rank = 8;
	// for (var i = 0; i < pieceLetter.length; i++) {
		// for (var j = 0; j < file.length; j++) {
			// for (var k = 1; k <= rank; k++) {
				// getTileWithStr(pieceLetter.charAt(i) + file.charAt(j) + k, board);
			// }
		// }
	// }
});	

/* Find a piece on the board using pixel coordinates on the canvas
 * x the horizontal component of the 2d coordinate 
 * y the vertical component of the 2d coordinate
*/
function getBoardTileWithCoords(board, x, y) {
	var col = Math.floor(x / LENGTH);
	var row = Math.floor(y / LENGTH);
	var result = board.getTile(row, col);
	console.log(result);
	return result;
}
	
/* Draws the visual representation of the physical board in a checkered patterns using two shades
of brown.
*/
function drawBoard(canvas, ctx) {
    var white = true;
    for (var i = 0; i < 8; i++) {
        for (var j = 0; j < 8; j++) {
            if (!white) {
                ctx.fillStyle = "rgb(160,82,45)";
                ctx.fillRect(j * LENGTH, i * LENGTH, LENGTH, LENGTH);
                white = true;
            } else {
                ctx.fillStyle = "rgb(245,222,179)";
                ctx.fillRect(j * LENGTH, i * LENGTH, LENGTH, LENGTH);
                white = false;
            }
        }
        white = !white;
    }
}

/* hightlights board tiles in the given colour
 * ctxHighlight context the highlight is displayed on
 * colour the colour to highlight with
 * action action that is pushed to the list of highlighted tiles
 */
function fill(ctxHighlight, colour, action) {
	if (action.column > -1 && action.column < 8 && action.row > -1 && action.row < 8) {
		ctxHighlight.fillStyle = colour;
		ctxHighlight.fillRect(action.column * LENGTH, action.row * LENGTH, LENGTH, LENGTH);
		highlightedTiles.push(action); 
	}
}

/* Draws a piece from the backing data structure to the board
 * board the desired board to pull from
 * tile the tile to draw
 */
function drawPiece(tile) {	//(board, ..)
	var x = tile.column * LENGTH;
	var y = (tile.row + 1) * LENGTH - OFFSET;
	var ctxPiece = document.getElementById('chesspieceCanvas').getContext('2d');
	ctxPiece.clearRect(x, y - 65, LENGTH, LENGTH);						//clear tile first; need (y - 65) to adjust the coordinates to properly position vertical pixel
	ctxPiece.fillText(String.fromCharCode(tile.piece.unicode), x, y);	//draws piece on board - coords specify bottom left corner of text
}

/* Draws pieces on the board in the positions reflected by the backing data structure
 * board the data structure that represents the board to be drawn
 */
function draw(board) {
	document.getElementById('chesspieceCanvas').getContext('2d').clearRect(0, 0, LENGTH * 8, LENGTH * 8);		//clear piece images from board
	for (var i = 0; i < board.occupiedTiles.length; i++) {
		drawPiece(board.occupiedTiles[i]);
	}
}

/* Code to carry out player and AI gameplay.  Called through clicks on the board.
 * x the x coordinate of the user's click
 * y the y coordinate of the user's click
*/
function gameLoop(x, y) {
	if (gameIsRunning) {
		if (playerIsWhite) {
			playerTurn(board, x, y);
			
			/* player moved piece - black's turn
			 *
			 */
			if (!isWhiteTurn && !gameLoopIsRunning) {	
				// hint state validation
				updateHintStateValidity();
				
				gameLoopIsRunning = true;
				CPUTurnWrapper();
				
				// DEBUG
				// code for black
				// if (objLogData.agent.piece.isWhite) {
					// turnsRemaining--;
					// document.getElementById('turnsRemaining').innerHTML = turnsRemaining;
				// }
				// // code for white
				// else if (!objLogData.agent.piece.isWhite) {
					// check is board is capable of receiving hint
					
					// CODE GOES HERE
					
				// }
			}
		}
	}
}

/* code supporting the player's interaction with the game
 * board
 * x
 * y
 */
function playerTurn(board, x, y) {
	var column = Math.floor(x / LENGTH);		// find out the intersection of the row and column using the coordinates of where the player clicked
	var row = Math.floor(y / LENGTH);
	var highlightedTile = null; 				// not null if tile selected is highlighted in someway, ie. can the piece be moved there

	//check if selected tile is highlighted
	highlightedTiles.forEach(function(action) {
		if (action.row == row && action.column == column) {
			highlightedTile = action;
			objLogData = action;
			if (playerIsWhite) {
				previousWhiteMove = action;
			}
			// for completeness
			else {
				previousBlackMove = action;
			}
		}
	});
	// DEBUG
	// console.log('prev. coords ' + lastRowSelected + ' ' + lastColumnSelected);

	//deal with piece movement (including attacking) - piece selected last turn; time to move!
	if (highlightedTile) {
		// NOTE removed this Sept. 5 - should be fine but needs testing
		// objLogData.previousRow = lastSelectedTile.row;
		// objLogData.previousColumn = lastSelectedTile.column;
		
		if (pawnThatMovedTwoLastTurn !== null)
			pawnThatMovedTwoLastTurn = null;
		// check if pawn moved 2 ranks
		if (lastSelectedTile !== null && lastSelectedTile.piece.type == "Pawn") {
			if (Math.abs(lastSelectedTile.row - row) == 2) {
				pawnThatMovedTwoLastTurn = lastSelectedTile.piece;
			}
		}
		
		// handle special cases of piece movement
		if (highlightedTile.actionType == ActionType.ENPASSANT)
			enPassantHandler(highlightedTile);
		castlingHandler(lastSelectedTile, highlightedTile);
		
		//move the piece corresponding to that highlighted pattern to the selected location 
		board.movePiece(lastSelectedTile.row, lastSelectedTile.column, row, column);
		draw(board);
		
		// check if it's in a promotion tile; only works for white pieces
		// NOTE CPU (black) will move before the piece to upgrade to is selected
		if (lastSelectedTile.piece.isWhite && lastSelectedTile.piece.type === 'Pawn' && row == 0) {
			displayPromotionInterface(lastSelectedTile.piece.isWhite, row, column);
		}
		else {
			// update check status for opponent
			inCheck(board, !playerIsWhite);
		
			//update tracking variables
			highlightedTile = null;
			highlightedTiles = []; 												// reset which tiles are hightlighted each time this runs
			isWhiteTurn = (lastSelectedTile.piece.isWhite) ? false : true;		// toggle game turn after a piece has moved
		}
	}
	/* logic used when a piece is first selected - before anything is highlighted for the player
	 * check if player clicked on their own piece and highlight the appropriate tiles in response
	 */
	else if (lastSelectedTile = getBoardTileWithCoords(board, x, y)) {
		var lastSelectedPiece = lastSelectedTile.piece;
		var legalMoves = [];			// all moves which don't place the acting side's King in check
		var potentialMoves = [];		// all moves
		var isPlayerTurn;
		var selectedKingTile;			// the King belonging to the player
		highlightedTiles = [];
		
		// DEBUG currently lets you select any piece
		// only allow interaction with pieces of the correct colour
		if (lastSelectedTile !== undefined)
			isPlayerTurn = lastSelectedTile.piece.isWhite === lastSelectedTile.piece.isWhite; 
		
		// only allow King to be selected if King is in check
		// NOTE need to test with other enemy pieces of all types
		selectedKingTile = (lastSelectedTile.piece.isWhite) ? board.whiteKingTile : board.blackKingTile;
		
		// opens the possibility of moving the other side's pieces if the player's side King is in check (for debugging)
		if (selectedKingTile !== undefined && inCheck(board, selectedKingTile.piece.isWhite)) { 		
			if (lastSelectedPiece.type == 'King') {
				potentialMoves = lastSelectedPiece.getStandardMoves(board, false, lastSelectedTile.row, lastSelectedTile.column);
			
				//only highlight moves that will get the King out of check.  Could alternatively avoid potential checks by ensuring the king in check doesn't move into any of the movement tiles listed in potential moves.  This would work for all pieces whose movement options are the same as their attack options.
				potentialMoves.forEach(function(action) {
					// DEBUG changed from var
					var futureBoardState = new Board(board);
					futureBoardState.movePiece(lastSelectedTile.row, lastSelectedTile.column, action.row, action.column);
					if (!inCheck(futureBoardState, selectedKingTile.piece.isWhite)) {
						var actionColour;
						if (action.actionType == ActionType.MOVE) {
							actionColour = MELLOW_YELLOW;
						}
						else if (action.actionType == ActionType.ATTACK) {
							actionColour = LIGHT_RED;
						}
						fill(ctxHighlight, actionColour, action);
						legalMoves.push(action);
					}
				});
			} 
			// allow selection of pieces that can get the King out of check
			else {
				var potentialMovesForPiece;
				var movesOfCheckingPiece; 
				if (lastSelectedPiece.isWhite == selectedKingTile.piece.isWhite) {			
					potentialMovesForPiece = lastSelectedTile.piece.getStandardMoves(board, false, lastSelectedTile.row, lastSelectedTile.column);
					movesOfCheckingPiece = board.tileOfCheckingPiece.piece.getStandardMoves(board, false, board.tileOfCheckingPiece.row, board.tileOfCheckingPiece.column);
					
					for (var i = 0; i < potentialMovesForPiece.length; i++) {
						var action = potentialMovesForPiece[i];
						// if the selected piece can attack the checking piece
						if (action.actionType == ActionType.ATTACK && action.row == board.tileOfCheckingPiece.row && action.column == board.tileOfCheckingPiece.column) {
							legalMoves.push(action);
							fill(ctxHighlight, LIGHT_RED, action); // consider doing this outside the loop separately
							break;
						}
						// if the selected piece can block the checking piece and prevent it from capturing the King next move
						else if (action.agent.piece.type !== 'Knight') {
							for (var j = 0; j < movesOfCheckingPiece.length; j++) {
								if (potentialMovesForPiece[i].row == movesOfCheckingPiece[j].row && potentialMovesForPiece[i].column == movesOfCheckingPiece[j].column) {
									// DEBUG
									// if (movesOfCheckingPiece[j].row == 5 && movesOfCheckingPiece[j].column == 6)
										// console.log();
									// vert and horz cap if row !== and col !==
									// vert cap if row ==, ...
									if (board.tileOfCheckingPiece.row == selectedKingTile.row) {
										if (Math.abs(potentialMovesForPiece[i].column - selectedKingTile.column) < Math.abs(board.tileOfCheckingPiece.column - selectedKingTile.column)) {
											legalMoves.push(potentialMovesForPiece[i]);
										}
									}
									// horz cap if col ==
									else if (board.tileOfCheckingPiece.column == selectedKingTile.column) {
										if (Math.abs(potentialMovesForPiece[i].row - selectedKingTile.row) < Math.abs(board.tileOfCheckingPiece.row - selectedKingTile.row)) {
											legalMoves.push(potentialMovesForPiece[i]);
										}
									}
									else {
										if (Math.abs(potentialMovesForPiece[i].row - selectedKingTile.row) < Math.abs(board.tileOfCheckingPiece.row - selectedKingTile.row) 
											&& Math.abs(potentialMovesForPiece[i].column - selectedKingTile.column) < Math.abs(board.tileOfCheckingPiece.column - selectedKingTile.column))
											{										
											legalMoves.push(potentialMovesForPiece[i]);
										}
									}
								}
							}
							
						}
					}
					legalMoves.forEach(function(action) {
						var actionColour;
						if (action.actionType == ActionType.MOVE) {
							actionColour = MELLOW_YELLOW;
						}
						else if (action.actionType == ActionType.ATTACK) {
							actionColour = LIGHT_RED;
						}
						fill(ctxHighlight, actionColour, action);
					});
				}
			}
		}
		// highlight the appropriate tiles
		else {	
			var potentialMoves = lastSelectedPiece.getStandardMoves(board, false, lastSelectedTile.row, lastSelectedTile.column); 
			
			if (lastSelectedPiece.type == 'Pawn')
				potentialMoves = potentialMoves.concat(getEnPassantMoves(board, false, lastSelectedTile));
			else if (lastSelectedPiece.type == 'King') {
				// castling options
				// check right
				var castlingRookTile = board.getTile(lastSelectedTile.row, 7);
				if (castlingRookTile !== null && canCastle(lastSelectedTile, castlingRookTile)) {
					legalMoves.push(new Action(lastSelectedTile, ActionType.MOVE, lastSelectedTile.row, lastSelectedTile.column + 2));	// can push to legal moves as canCastle checks for move legality inherently
				}
				// check left
				castlingRookTile = board.getTile(lastSelectedTile.row, 0);
				if (castlingRookTile !== null && canCastle(lastSelectedTile, castlingRookTile))	{
					legalMoves.push(new Action(lastSelectedTile, ActionType.MOVE, lastSelectedTile.row, lastSelectedTile.column - 2));
				}
			}
			// only allow actions that won't place the King in check
			potentialMoves.forEach(function(action) {
				var futureBoardState = new Board(board);
				futureBoardState.movePiece(lastSelectedTile.row, lastSelectedTile.column, action.row, action.column);
				if (!inCheck(futureBoardState, lastSelectedPiece.isWhite)) {
					legalMoves.push(action);
				}
			});
				
			// highlight legal moves
			legalMoves.forEach(function(action) {
				var actionColour;
				if (action.actionType == ActionType.MOVE) {
					actionColour = MELLOW_YELLOW;
				}
				else if (action.actionType == ActionType.ATTACK) {
					actionColour = LIGHT_RED;
				}
				fill(ctxHighlight, actionColour, action);
			});
		}
	} 
	// player clicked off the piece
	else {	
		highlightedTiles = [];
		highlightedTile = false;
	}
}

/* Update data structure in case of en passant
 *
 */
function enPassantHandler(action) {
	if (action.agent.piece.isWhite === playerIsWhite)
		board.removePiece(action.row + 1, action.column);
	else
		board.removePiece(action.row - 1, action.column);
}

/* Update data structure in the case of castling.  Code is common to player and CPU.
 *
 */
function castlingHandler(agentTile, actionTile) {
	// castling logic
	if (agentTile.piece.type == 'King') {
		//move the rook to the appropriate position
		if (Math.abs(agentTile.column - actionTile.column) == 2) {
			var rookTile = null;
			if (agentTile.column < actionTile.column) {				// castle right
				rookTile = board.getPiece(agentTile.row, 7);
				board.movePiece(agentTile.row, 7, agentTile.row, actionTile.column - 1);
			}
			else {
				rookTile = board.getPiece(agentTile.row, 0);		// castle left
				board.movePiece(agentTile.row, 0, agentTile.row, actionTile.column + 1);
			}
		}
	}
}

// TODO test agent changes
/* code controlling AI action
 * 
 */
function CPUTurn() {
	var nextAIAction = minimax(board, BLACK);		// action object
	// var agentTile;									// the tile of the piece that will be acted upon
	
	// null if there are no legal moves
	if (nextAIAction !== null) {
		// agentTile = board.getTileWithPiece(nextAIAction.agent);
		objLogData = nextAIAction;		// NOTE trying to replace this with individual logs for black and white
		if (playerIsWhite) {
			previousBlackMove = nextAIAction;
		}
		else {
			previousWhiteMove = nextAIAction;
		}
		// objLogData.previousRow = nextAIAction.agent.row;
		// objLogData.previousColumn = nextAIAction.agent.column;
		
		if (pawnThatMovedTwoLastTurn !== null)
			pawnThatMovedTwoLastTurn = null;
		// check if pawn moved 2 ranks
		if (nextAIAction.agent.piece.type == "Pawn") {
			if (Math.abs(nextAIAction.row - nextAIAction.agent.row) == 2) {
				pawnThatMovedTwoLastTurn = nextAIAction.agent;					// uses tile instead of piece, change if it's a problem
			}
		}
		
		// promotion
		if (nextAIAction.agent.piece.type == "Pawn" && nextAIAction.agent.row !== 7 && nextAIAction.row == 7) {
			var CPUcolour = (playerIsWhite) ? BLACK : WHITE;
			board.addPiece(new Queen(CPUcolour), nextAIAction.agent.row, nextAIAction.agent.column);
		}
		
		if (nextAIAction.actionType == ActionType.ENPASSANT)
			enPassantHandler(nextAIAction);
		castlingHandler(nextAIAction.agent, nextAIAction);
		board.movePiece(nextAIAction.agent.row, nextAIAction.agent.column, nextAIAction.row, nextAIAction.column);
		
		isWhiteTurn = !isWhiteTurn;
		draw(board);
	}
	// DEBUG
	// console.log('next move will move ' + nextAIAction.agent + ' from [' + agentTile.row + ', ' + agentTile.column + '] to ['
		// + nextAIAction.row + ', ' + nextAIAction.column + ']'); 
}

/* Contains the code needed to execute the CPU's turn. Necessary to prevent the CPU from taking action before the player (in the case of promotion) has selected a piece to promote to. 
Also used for code that relies on the completion of a turn, such as updating the list of valid states.
 *
 */
function CPUTurnWrapper() {
	var displayText = "";
	var terminalStateData;
	var problemGroup;
	
	outputText('Turn: Black');
	// logAction(playerIsWhite);
	
	// currentComposition = getComposition(currentComposition.groupId, currentComposition.composition.id);				// get the composition the board's currently displaying
	
	setTimeout(function() {		// setTimeout is necessary to draw the player move before drawing the CPUs move
		CPUTurn();
		
		// check if CPU move caused the game to end
		terminalTestResult = terminalGameConditionTest(board);
		if (terminalTestResult.isTerminalState) {
			gameIsRunning = false; 
			outputText(terminalTestResult.details);
			
			// add composition to list of solved compositions
			problemGroup = getGroup(currentComposition.groupId);

			// add composition to list of solved problems
			for (var i = 0; i < problemGroup.unsolvedProblems.length; i++) {
				if (problemGroup.unsolvedProblems[i].id == currentComposition.composition.id) {
					var x = problemGroup.unsolvedProblems.splice(i, 1);
					problemGroup.solvedProblems.push(x[0]);
				}
			} 
		}
		else {
			outputText('Turn: White');
			// logAction(!playerIsWhite);
		}
		
		// save state
		if (currentComposition.composition !== undefined) {
			currentComposition.composition.states.push(new Board(board));		// cloned so each state acts as a snapshot of a board
			
			document.getElementById('turnsRemaining').innerHTML = parseInt(document.getElementById('turnsRemaining').innerHTML) - 1;
			currentComposition.turn++;
			
			// enable undo button once the first action has been taken
			if (currentComposition.composition.states.length == 1) {
				$('#uiUndo').attr('disabled', false);
			} 
			
			// player has made too many moves
			if (currentComposition.composition.states.length >= currentComposition.groupId && terminalTestResult.isTerminalState == false) {
				gameIsRunning = false;
				isWhiteTurn = true;
				// alert('Too many moves!');
				outputText('Too many moves!');
			}
		}
		gameLoopIsRunning = false;
		if (turnsRemaining == 0 || !gameIsRunning) {
			$('#uiHint').attr('disabled', true);
		}
		
		// update turn info here so the change occurs after the CPU move
		// document.getElementById('turnsRemaining').innerHTML = 
	}, 500);
}

/* outputs the given string to the game state indicator above the board
 *
 */
function outputText(string) {
	document.getElementById('output').innerHTML = string;
}

function displayPromotionInterface(isWhite, row, column) {
	$('#promotion').data( {
		isWhite : isWhite,
		row : row,
		column : column
	});	
	$('#promotion').fadeIn(300);
	$('body').append('<div id="mask"></div');
	$('#mask').fadeIn(300);
}

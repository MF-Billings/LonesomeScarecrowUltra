/* Billings, M. */

/* contains methods that provide a mechanism to enforce the rules of chess and provide information on board and game state
 * does not handle fifty-move rule, threefold repetition, or insufficient material to checkmate opponent cases
 * http://www.e4ec.org/immr.html for info regarding insufficient material rule and examples
 */
/* Returns all en passant actions a pawn can take
 * NOTE only works for player
 * pawnTile the tile of the pawn that could perform en passant
 */
function getEnPassantMoves(board, bHighlight, pawnTile) {
	var legalMoves = [];
	
	// check right
	var adjacentPiece = board.getPiece(pawnTile.row, pawnTile.column + 1);
	var rowSign = (pawnTile.piece.isWhite == playerIsWhite) ? 1 : -1;		// player pieces always positioned in rank 7 and 8 ie. at the bottom of the displayed board
	if (pawnThatMovedTwoLastTurn !== null) {
		// check left then right
		// DEBUG changed from var
		for (var i = 1; i >= -1; i = i - 2) {	// loop avoids code duplication
			if (adjacentPiece !== null && lastSelectedTile !== null && lastSelectedTile.piece.type == 'Pawn' 	// 'lastSelectedTile !== null' check done to prevent errors from user mouse clicks between moves
			&& pawnThatMovedTwoLastTurn == adjacentPiece
			&& pawnThatMovedTwoLastTurn.isWhite !== pawnTile.piece.isWhite) {
				var action = new Action(pawnTile, ActionType.ENPASSANT, pawnTile.row - (1 * rowSign), pawnTile.column + i);
				if (bHighlight) {
					fill(ctxHighlight, MELLOW_YELLOW, action);		// highlight square the pawn will move to with the movement colour
					ctxHighlight.fillStyle = LIGHT_RED;				
					ctxHighlight.fillRect(action.column * LENGTH, pawnTile.row * LENGTH, LENGTH, LENGTH);	// highlight square pawn will attack
				}
				legalMoves.push(action);
			}
			adjacentPiece = board.getPiece(pawnTile.row, pawnTile.column - 1);
		}
	}
	
	return legalMoves;
}

/* Checks if castling is possible with rook at given position
 * 
 */
function canCastle(castlingKingTile, castlingRookTile) {
	var canCastle = true;
	
	if (castlingRookTile !== null && castlingRookTile.piece.type == 'Rook' && !castlingRookTile.piece.hasMoved && !castlingKingTile.piece.hasMoved) {
		var possibleEnemyActions = [];
		if (castlingKingTile.piece.isInCheck) {	//if (inCheck(castlingKingTile, possibleEnemyActions))
			return false;
		}
		var startCol, endCol;
		
		if (castlingRookTile.column == 0) {
			startCol = 1;		//inclusive
			endCol = 4;			//exclusive
		}
		else {
			startCol = 5;	//inclusive
			endCol = 7;		//exclusive
		}
		
		// check that there are no pieces between the king and the rook
		for (var i = startCol; i < endCol; i++) {
			if (board.getPiece(castlingKingTile.row, i) !== null) 
				return false;
		}

		// find the actions every enemy piece on the board can take from their current positions to determine if castling is possible
		for (var currentRow = 0; currentRow < 8; currentRow++) {
			for (var currentColumn = 0; currentColumn < 8; currentColumn++) {
				var currentTile = board.getTile(currentRow, currentColumn);
				if (currentTile !== null && currentTile.piece.isWhite !== castlingKingTile.piece.isWhite) {
					if (currentTile.piece.type !== 'Pawn') {
						possibleEnemyActions = possibleEnemyActions.concat(currentTile.piece.getStandardMoves(board, false, currentTile.row, currentTile.column));
					}
					else {
						if (Math.abs(currentTile.row - castlingKingTile.row) == 1) {	// piece needs to be 1 row away from the king
							var columnDifference = currentTile.column - castlingKingTile.column;
							// left-hand or right-hand rook
							if (startCol == 1) {		// lefthand
								if (columnDifference > -4 && columnDifference <= 1) {
									canCastle = false;
									break;
								}
							}
							else {
								if (columnDifference >= -1) {
									canCastle = false;
									break;
								}
							}
						}
					}
				}
			}
		}
		if (canCastle) {
			for (var i = 0; i < possibleEnemyActions.length; i++) {
				var currentMove = possibleEnemyActions[i];
				if (currentMove.row === castlingKingTile.row && currentMove.column >= startCol && currentMove.column < endCol) {
					console.log("in castle check");
					canCastle = false;
					break;
				}
			}
		}
	}
	else 
		canCastle = false;
	
	// Need to update the data of last tile as the current way of checking pieces changes the lastSelectedPiece and associated data
	// DEBUG
	// var sRookToCastleWith = (castlingRookTile.column == 0) ? 'left rook' : 'right rook';
	// console.log('canCastle with ' + sRookToCastleWith + ': ' + canCastle);
	return canCastle;
}

/* 
 * movingPieceTile the tile of the piece that's being checked to see if its path is blocked by another piece
 * potentialBlockerTile determine if the tile of this piece can block
 */
function pieceCanBlock(board, movingTile, destinationRow, destinationColumn, potentialBlockerTile) {
	var rowSign = columnSign = 1;
	var initialRow = movingTile.row;			// both initialRow and initialColumn are inclusive
	var initialColumn = movingTile.column;
	// var destinationRow = movingPieceAction.row;
	// var destinationColumn = movingPieceAction.column;
	var blockerMoves = potentialBlockerTile.piece.getStandardMoves(board, false, potentialBlockerTile.row, potentialBlockerTile.column);
	var largerDifference = Math.max(Math.abs(destinationRow - initialRow), Math.abs(destinationColumn - initialColumn));
	
	// appropriate modifies the inner loop variable to increment, decrement, or to prevent the row/column from changing
	if (destinationRow == initialRow) {
		rowSign = 0;
	}
	else if (destinationRow < initialRow) {
		rowSign = -1;
	}
	
	if (destinationColumn == initialColumn) {
		columnSign = 0;
	}
	else if (destinationColumn < initialColumn) {
		columnSign = -1;
	}
	
	for (var i = 0; i < blockerMoves.length; i++) {
		for (var j = 1; j < largerDifference; j++) {
			if (blockerMoves[i].row == initialRow + j * rowSign && blockerMoves[i].column == initialColumn + j * columnSign) {
				return true;
			}
		}
	}
	
	return false;
}

// DEBUG doesn't handle double check
/* determine if given king is in check
 * bColour boolean indicating which colour King to test for check
 */
function inCheck(board, bColour) {
	var inCheck = false;
	var kingsTile = (bColour === WHITE) ? board.whiteKingTile : board.blackKingTile;
	var checkingTile = null;
	
	// if I need to get all the possibly enemy moves
	if (arguments.length == 2) {
		var possibleEnemyActions = [];
		for (var i = 0; i < board.occupiedTiles.length; i++) {
			var currentTile = board.occupiedTiles[i];
			if (currentTile !== null && currentTile.piece.isWhite !== bColour) {
				possibleEnemyActions = possibleEnemyActions.concat(currentTile.piece.getStandardMoves(board, false, currentTile.row, currentTile.column));
			}
		}
		
		for (var i = 0; i < possibleEnemyActions.length; i++) {
			if (possibleEnemyActions[i].actionType === ActionType.ATTACK && possibleEnemyActions[i].row === kingsTile.row && possibleEnemyActions[i].column === kingsTile.column) {
				inCheck = true;
				checkingTile = possibleEnemyActions[i].agent;
				break;
			}
		}
	}
	// received array intended to store all possible actions for pieces of the opposing colour
	// NOTE only bother with this if it causes a noticeable improvement in AI performance
	else if (arguments.length == 3) {
		console.log();
	}
	
	// set inCheck property of appropriate piece
	if (inCheck) {
		kingsTile.piece.isInCheck = true;
	}
	else {
		kingsTile.piece.isInCheck = false;
	}
	board.tileOfCheckingPiece = checkingTile;
	return inCheck;
}

// TEST
/* Get the list of moves available from this board state that will checkmate.
 * Many solutions in the initial problem source provided minimal detail about the specifics of the move to perform
 * bColour the colour that is attempting to impose checkmate
 */
function getCheckmates(board, bColour) {
	var enemyKingTile = (bColour == WHITE) ? board.blackKingTile : board.whiteKingTile;
	var b, b2;
	var isCheckmate;
	var possibleMoves = [], action;
	var promotionPieceList = [], offset;
	var currentTile;
	var checkmateMoves = [];
	
	// find all the moves for the opposite colour
	for (var i = 0; i < board.occupiedTiles.length; i++) {
		currentTile = board.occupiedTiles[i];
		if (currentTile.piece.isWhite != enemyKingTile.piece.isWhite) {
			if (currentTile.piece.type == 'King') {
				possibleMoves = possibleMoves.concat(currentTile.piece.getLegalMoves(board, false, currentTile.row, currentTile.column));
			}
			else {
				possibleMoves = possibleMoves.concat(currentTile.piece.getStandardMoves(board, false, currentTile.row, currentTile.column));
			}
		}
	}
	// find the moves that checkmate the king
	for (var j = 0; j < possibleMoves.length; j++) {
		action = possibleMoves[j];
		b = new Board(board);
		isCheckmate = false;			// initialized to false in case 1st if block isn't entered
		b.movePiece(action.agent.row, action.agent.column, action.row, action.column);
		
		/* if pawn made it to promotion row, check if promotion to a Knight or Queen will allow that piece to checkmate
		 * player = white, bColour = white -> 0
		 * player = white, bColour = black -> 7
		 * player = black, bColour = white -> 7
		 * player = black, bColour = black -> 0
		 */
		var promotionRow = (playerIsWhite == bColour) ? 0 : 7;
		if (action.row == promotionRow && action.agent.piece.type == "Pawn") {
			promotionPieceList = [new Queen(bColour), new Knight(bColour)];
		}
		offset = (promotionPieceList.length > 0) ? 1 : 0;
		
		// loops twice in case of promotion to test which actions are available if promoted to a Queen or Knight
		for (var k = 0; k < 1 + (promotionPieceList.length - offset); k++) {
			if (promotionPieceList.length > 0) {
				b.addPiece(promotionPieceList[k], action.row, action.column);
			}
			
			if (inCheck(b, !bColour)) {
				isCheckmate = true;
			
			// check if all adjacent moves the King could make also result in a check ie. checkmate
			loop1:
				for (var r = enemyKingTile.row - 1; r <= enemyKingTile.row + 1; r++) {
					if (r >= 0 && r <= 7) {
				
					loop2:
						for (var c = enemyKingTile.column - 1; c <= enemyKingTile.column + 1; c++) {
							if (c >= 0 && c <= 7) {
								b2 = new Board(b);
								
								if (board.getTile(r, c) != null && board.getTile(r, c).piece.isWhite == bColour) { 	// enemy piece occupies tile
									b2.movePiece(enemyKingTile.row, enemyKingTile.column, r, c); 
								}
								else if (board.getTile(r,c) == null) {												// tile is empty
									b2.movePiece(enemyKingTile.row, enemyKingTile.column, r, c);	
								}

								if (!inCheck(b2, !bColour)) {
									isCheckmate = false;
									break loop1;
								}
							}
						}
					}
				}
				// check if any opposing piece could block the checkmate
				if (isCheckmate) {
					for (var i = 0; i < board.occupiedTiles.length; i++) {
						currentTile = b.occupiedTiles[i];
						if (currentTile.piece.isWhite == enemyKingTile.piece.isWhite) {
							if (action.agent.piece.type !== "Knight" && action.agent.piece.type !== "Pawn") {
								if (pieceCanBlock(b, action, enemyKingTile.row, enemyKingTile.column, currentTile)) {
									isCheckmate = false;
									break;
								}
							}
						}
					}
				}
			}
			if (isCheckmate) {
				var promotionResultPiece;
				/* DELETE b2.getPiece(action.row, action.column).type !== possibleMoves[j].agent.piece.type
				 * doesn't work if the piece checkmating the King is located at the southeastern corner.  King moves there and captures checking piece, resulting in a type discrepancy
				 */
				if (b2.getPiece(action.row, action.column).type !== action.agent.piece.type && b2.getPiece(action.row, action.column).isWhite != enemyKingTile.piece.isWhite) { 
					promotionResultPiece = b2.getPiece(action.row, action.column);
				}
				checkmateMoves = checkmateMoves.concat( {action : action, promotesTo : promotionResultPiece} );
				isCheckmate = false;
			}
			promotionPieceList = [];
		}
	}
	return checkmateMoves;
}
/* 
 * objDetails argument will store additional details about the game terminal conditions if the function returns true and will be unchanged by the call otherwise
 * want to know what condition the game ended with
 * 1) was it a win or a draw? which side won?
 * 2) if it was a draw, which of the following was it:
 *    fifty-move rule, threefold repetition, insufficient material to checkmate opponent, stalemate
 */
function terminalGameConditionTest(board) {
	var gameOver = false;
	var legalMoves = [];
	var colourToCheck = (isWhiteTurn) ? WHITE : BLACK;
	var returnObj = {				
		isTerminalState : false,		
		isDraw : undefined,
		details : undefined				// contains additional information about the match e.g. if it ended in a draw, what kind of draw was it
	};
	
	for (var i = 0; i < board.occupiedTiles.length; i++) {
		if (board.occupiedTiles[i].piece.isWhite === colourToCheck) {
			var currentTile = board.occupiedTiles[i];
			var potentialMoves = currentTile.piece.getStandardMoves(board, false, currentTile.row, currentTile.column);
			
			if (currentTile.piece.type == 'Pawn') {
				potentialMoves = potentialMoves.concat(getEnPassantMoves(board, false, currentTile));
			}
			else if (currentTile.piece.type == 'King') {
				// castling options
				// check right
				var castlingRookTile = board.getTile(currentTile.row, 7);
				if (castlingRookTile !== null && canCastle(currentTile, castlingRookTile)) {		
					legalMoves.push(new Action(currentTile, ActionType.MOVE, currentTile.row, currentTile.column + 2));	// can push to legal moves as canCastle checks for move legality inherently
				}
				// check left
				castlingRookTile = board.getTile(currentTile.row, 0);
				if (castlingRookTile !== null && canCastle(currentTile, castlingRookTile))	{
					legalMoves.push(new Action(currentTile, ActionType.MOVE, currentTile.row, currentTile.column - 2));
				}
			}
			
			// only allow actions that won't place the King in check
			for (var j = 0; j < potentialMoves.length; j++) {
				var futureBoardState = new Board(board);
				futureBoardState.movePiece(currentTile.row, currentTile.column, potentialMoves[j].row, potentialMoves[j].column);
				if (!inCheck(futureBoardState, currentTile.piece.isWhite)) {
					legalMoves.push(potentialMoves[j]);
				}
			}
		}
	}
	
	// (inCheck) ? win-loss : stalemate
	if (legalMoves.length == 0) {
		if (inCheck(board, colourToCheck)) {
			bDraw = false;
			if (colourToCheck == WHITE)
				sDetails = 'Black wins'
			else
				sDetails = 'Checkmate, you won!'
			
			// DEBUG
			// console.log('terminalGameStateFn return: ' + colourToCheck + ' lost!');
		}
		// stalemate
		else {
			bDraw = true;
			sDetails = 'Stalemate';
			// console.log('terminalGameStateFn return: stalemate');
		}
		returnObj.isTerminalState = true;
	}
	
	if (returnObj.isTerminalState) {
		returnObj.isDraw = bDraw;
		returnObj.details = sDetails;
	}
	return returnObj;
}

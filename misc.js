/* Billings, M. */

/* Generate random number between min (inclusive) and max (exclusive)
 * min the minimum value for the range
 * max the maximum value for the range
 */
function getRand(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;							// return random integer between min (inclusive) and max (exclusive)
}

/* Parse an algebraic notation string to extract information on the action being performed
 * Does not handle special moves or vague functionality eg. '#' for checkmates
 * bColour boolean indicating the colour that is acting this turn
 */
function parseNotation(str, board, bColour) { //getTileWithStr()
	var pieceType;										// type of the piece (provided by str)
	var fromRow; 
	var fromCol; 
	var toRow, rankMatches;
	var toCol, fileMatches;
	var miscMatches;
	var parsedMove;										// contains data parsed from the string
	var regex = /[PRNSBQK]?(?:[a-h][1-8](?:-|x[a-h][1-8])?(?:\+{0,2}|#)?)|~/;		// test if string's in parsable form
	var pieceRx = /^(?:[PRNSBQK]|[a-h])/;						// match char indicating piece. -1 if no piece indicating char is found
	var canParse = regex.test(str);						// unused
	var fileRx = /[a-h]/;								// need more testing on this 1 		/(?:[a-h](?!\d-|x))|~/;
	var rankRx = /[1-8]/;								// last digit with no digit after it in the following string 		/(?:\d(?!.*\d.*))|~/;
	var miscRx = /~|\+$|\+\+|#/;						// identify presence of non-rank, non-file symbols
	
	// infer piece type
	pieceMatch = str.match(pieceRx);
	if (pieceMatch != null)	{	//&& str.match(pieceRx)[0] != -1
		// test if a letter indicated the piece type was provided
		if (pieceMatch[0] == pieceMatch[0].toUpperCase()) {
			pieceType = convertCharToPieceType(str.match(pieceRx)[0]);
		}
		else {
			pieceType = "Pawn";
		}
	}

	if (pieceType != undefined) {
		fileMatches = str.match(fileRx);
		rankMatches = str.match(rankRx);
//		miscMatches = str.match(miscRx);
		
		// there is some specification as to the rank and file the piece is being moved to
		if (fileMatches != null && fileMatches.length > 0) {
			if (fileMatches.length == 1) {
				toCol = convertFileToColumn(fileMatches[0]);
			}
			else if (fileMatches.length == 2) {
				fromCol = convertFileToColumn(fileMatches[0]);
				toCol = convertFileToColumn(fileMatches[1]);
			}
		}
		if (rankMatches != null && rankMatches.length > 0) {
			if (rankMatches.length == 1) {
				toRow = convertRankToRow(rankMatches[0]);
			}
			else if (rankMatches.length == 2) {
				fromRow = convertRankToRow(rankMatches[0]);
				toRow = convertRankToRow(rankMatches[1]);
			}
		}
//		if (miscMatches != null && miscMatches.length > 0) {
//			// should be at most 1 match if I accounted for everything
//			for (var i = 0; i < miscMatches.length; i++) {
//				if (miscMatches[i] == '~') {
//					// move could be anything
//				}
//				else if (miscMatches[i] == '++' || miscMatches[i] == '#') {
//					// find move(s) that checkmate enemy king
//					// candidates = getCheckmates(board, bColour);
//				}
//				else if (miscMatches[i] == '+') {
//					// make sure enemy king is put in check
//				}
//			}
//			
//			if (candidates != undefined) {
//				for (var i = 0; i < candidates.length; i++) {
//					// returnObjects.push( {
//						// type :
//					// });
//				}
//			}
//		}
	}
	
	parsedMove = {
		type : pieceType,
		fromRow : fromRow,
		fromCol : fromCol,
		toRow : toRow,
		toCol : toCol
	}
	// move can be unambiguously determined
	// if (pieceType != undefined && toRow != undefined && toCol != undefined) {
		// if (fromRow != undefined || fromCol != undefined) {
			// for (var i = 0; i < candidates.length; i++) {
				// // both row and column match
				// if (fromRow != undefined && fromCol != undefined) {
					// if (candidates[i].row == fromRow && candidates[i].column == fromCol) {
						// possibleMatches.push({
							// type : pieceType,
							// fromRow : fromRow,
							// fromCol : fromCol,
							// toRow : toRow,
							// toCol : toCol
						// });
					// }
				// }
				// else if (fromRow != undefined) {
					// if (candidates[i].row == fromRow) {
						// possibleMatches.push({
							// type : pieceType,
							// fromRow : fromRow,
							// fromCol : fromCol,
							// toRow : toRow,
							// toCol : toCol
						// });
					// }
				// }
				// else if (fromCol != undefined) {
					// if (candidates[i].column == fromCol) {
						// possibleMatches.push({
							// type : pieceType,
							// fromRow : fromRow,
							// fromCol : fromCol,
							// toRow : toRow,
							// toCol : toCol
						// });
					// }
				// }
			// }
		// }
		
		// else {
			// // if the check is being done for the player then the piece hasn't move yet; search for piece that can perform the prescribed move
			// if (bColour == playerIsWhite) {
				
			// }
			// // the move has already been taken by Black
			// else {
				// possibleMatches.push({
					// type : pieceType,
					// fromRow : undefined, 				
					// fromCol : undefined,
					// toRow : toRow,
					// toCol : toCol
				// })
			// }
	
			
			// // BUG doesn't work
			// // var possibleCandidateTiles = getCandidateTiles(board, bColour, pieceType, toRow, toCol);
			// // for (var i = 0; i < possibleCandidateTiles.length; i++) {
				// // possibleMatches.push({
					// // type : pieceType,
					// // fromRow : possibleCandidateTiles[i].row,
					// // fromCol : possibleCandidateTiles[i].column,
					// // toRow : toRow,
					// // toCol : toCol
				// // })
			// // }
		// }
	// }
	
	// DEBUG
	// console.log("String entered: " + str);
	// console.log("Can parse? " + canParse);
	// console.log("Char/Piece type: " + ((str.match(pieceRx) != null) ? str.match(pieceRx)[0] : '-') + "/" + type);
	// console.log("File/Column: " + str.match(fileRx)[0] + "/" + toCol);
	// console.log("Rank/Row: " + str.match(rankRx)[0] + "/" + toRow);
	
	return parsedMove;
}

function convertFileToColumn(c) {
	var column;
	
	if (c == 'a') {
		column = 0;
	}
	else if (c == 'b') {
		column = 1;
	}
	else if (c == 'c') {
		column = 2;
	}
	else if (c == 'd') {
		column = 3;
	}
	else if (c == 'e') {
		column = 4;
	}
	else if (c == 'f') {
		column = 5;
	}
	else if (c == 'g') {
		column = 6;
	}
	else if (c == 'h') {
		column = 7;
	}
	else {
		column = '~';
	}
	
	return column;
}

function convertRankToRow(n) {
	if (n >= 1 && n <= 8) {
		return Math.abs(n - 8);
	}
	else if (n == '~') {
		return '~';
	}
	else
		throw 'invalid argument';
}

/* Return the piece type that corresponds to the argument char
 *
 */
function convertCharToPieceType(c) {
	var pieceChar = c;
	var type;
	
	if (pieceChar == 'P') {
		type = "Pawn";
	}
	else if (pieceChar == 'R') {
		type = "Rook";
	}
	else if (pieceChar == 'N' || pieceChar == 'S') {
		type = "Knight";
	}
	else if (pieceChar == 'B') {
		type = "Bishop";
	}
	else if (pieceChar == 'Q') {
		type = "Queen";
	}
	else if (pieceChar == 'K') {
		type = "King";
	}
	
	return type;
}

/* Return all tiles capable of reaching a specific location
 *
 */
function getCandidateTiles(board, bColour, pieceType, destinationRow, destinationColumn) {
	var tiles = [];
	var current;
	var possibleMoves = [];
	
	for (var i = 0; i < board.occupiedTiles.length; i++) {
		current = board.occupiedTiles[i];
		// determine if candidate can move to the desired position
		if (current.piece.type == pieceType && bColour == current.piece.isWhite) {
			possibleMoves = possibleMoves.concat(current.piece.getStandardMoves(board, false, current.row, current.column));
			
			// add any additional moves required of the piece
			
		}
		
		for (var j = 0; j < possibleMoves.length; j++) {
			if (possibleMoves[j].row == destinationRow && possibleMoves[j].column == destinationColumn)
				tiles.push(current);
		}
		possibleMoves = [];
	}
	
	return tiles;
}

/* Returns true if recognized as a letter
 *
 */
function isLetter(x) {
	return x.toLowerCase() != x.toUpperCase();
}

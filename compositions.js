/* Billings, M. 
 * Compositions
 */

/* Represents chess puzzles
  * id used to identify the composition
  * board the board object used to represent the initial state of the composition
  * solution array of potential solutions
  * validStates stores list of objects with setID and board properties. This is used to store the info necessary to determine whether a solution can be reached for the puzzle.
				This is then used by the hint function.
	setID used to link board states with the same solution path. A solution requires a series of moves that culminate to an inescapable checkmate.
			this property ensures that sets of moves are of the same group of moves that will lead to this scenario.
	board a board state which will lead to a solution
  */
function Composition(id, board, solution) {
	this.id = id;
	this.initialState = new Board(board);
	this.states = [];						// record of the board states reached through player action (excludes initial state). Used when player move is undone.  does not contain initial board state. contains n-1 boards
	this.solution = solution;
	// this.nodeId = undefined;
	// this.currentSolutionNode = undefined;	// stores last turn before the composition commit to a solution branch
}

/* Represent a type of composition e.g. mate in 1, mate in 2, etc.
 *
 */
function CompositionGroup(id) {
	this.id = id
	this.unsolvedProblems = [];
	this.solvedProblems = [];
}

/*
 * nodeId used to determine the successive actions that will lead to a solution. Elements of group x will only lead to a solution if followed by other elements of group x.  Root node always has an id of 0.
 * prevAction the move taken by the CPU
 */
function SolutionElement(id, playerAction, prevAction, promotesTo) {
	this.id = id;					// provide simple way to compare nodes based on their position in the solution heirarchy
	this.playerAction = playerAction;
	this.prevAction = prevAction;
	this.promotesTo = promotesTo;
}

/* Determine whether the current board state can lead to a solution. Returns a boolean
 * does not eliminate duplicate states
 */
function isValidHintState(composition) {										// cases where there is a difference between the piece expected on a tile and what is actually there
	var isValid = false;
	
	if (currentComposition.lastValidTurnForHint == getTurnLimit(currentComposition.composition.id) - parseInt(document.getElementById('turnsRemaining').innerHTML)) {
		isValid = true;
	}
	
	return isValid;
}

/* Update the data that shows whether the current composition and still be solved, ie. the player is guaranteed to win if they play optimally from the current state.
 *
 */
function updateHintStateValidity() {
	var isValidHintState = false;
	var parsedSolution;
	var currentNode;
	var enemyAction;
	var previousEnemyMove = (playerIsWhite) ? previousBlackMove : previousWhiteMove;
	// 1st turn
	if (currentComposition.turn == 0) {
		// compare player action to hint actions
		for (var i = 0; i < currentComposition.composition.solution.length; i++) {
			currentNode = currentComposition.composition.solution[i].root;
			parsedSolution = parseNotation(currentNode.data.playerAction, currentComposition.composition.initialState, playerIsWhite);
			
			if (parsedSolution.type == objLogData.agent.piece.type && parsedSolution.toRow == objLogData.row && parsedSolution.toCol == objLogData.column) {
				isValidHintState = true;
				break;
			}	
			else { throw "invalid length for parsed solution"; }
		}
	}
	// all other turns
	else if (currentComposition.lastValidTurnForHint == currentComposition.turn) {
		for (var i = 0; i < currentComposition.currentSolutionNode.children.length; i++) {
			currentNode = currentComposition.currentSolutionNode.children[i];
			parsedSolution = parseNotation(currentNode.data.playerAction, board);
			enemyAction = parseNotation(currentNode.data.prevAction, board, !playerIsWhite);
			
			/* check to make that action taken matches a solution path
			 * BUG only checks player action; if there are multiple CPU actions for which the player action doesn't change this can choose the wrong block
			 */
			if ((parsedSolution.type == objLogData.agent.piece.type || currentNode.promotesTo != null && currentNode.promotesTo.type == objLogData.agent.piece.type) 
				&& parsedSolution.toRow == objLogData.row && parsedSolution.toCol == objLogData.column
				// && (currentComposition.currentNodeId == undefined || currentComposition.currentNodeId == currentComposition.composition.solution[currentComposition.turn][i].currentNodeId))
				&& enemyAction.toCol == previousEnemyMove.column && enemyAction.toRow == previousEnemyMove.row)
			{
				isValidHintState = true;
				break;
			}
		}
	}
	
	if (isValidHintState) {
		currentComposition.currentSolutionNode = currentNode;
		currentComposition.lastValidTurnForHint++;
	}
}

/* Returns the composition with the provided group and composition ID, or null if no such composition can be found.
 * groupID
 * compositionID 
 */
function getComposition(groupID, compositionID) {
	var desiredComposition = null;
	var problemType;

	for (var prop in compositions.problemTypes) {
		if (compositions.problemTypes[prop].id == groupID)
			problemType = compositions.problemTypes[prop];
	}

	// search through unsolved problems
	for (var i = 0; i < problemType.unsolvedProblems.length; i++) {
		if (problemType.unsolvedProblems[i].id == compositionID) {
			desiredComposition = problemType.unsolvedProblems[i];
		}
	}
	// search for the problem in the collection of unsolved problems
	if (desiredComposition == null) {
		for (var i = 0; i < problemType.solvedProblems.length; i++) {
			if (problemType.solvedProblems[i].id == compositionID) {
				desiredComposition = problemType.solvedProblems[i];
			}
		}
	}

	return desiredComposition;
}

function getTurnLimit(compositionID, groupID) {
	var turnLimit;
	var composition;
	var problemType;
	
	// only compositionID as arg
	if (arguments.length == 1) {
		// find group of composition
		for (var prop in compositions.problemTypes) {
			composition = search(0, compositions.problemTypes[prop].solvedProblems.length, currentComposition.composition.id, compositions.problemTypes[prop], true);
			if (composition == undefined)
				composition = search(0, compositions.problemTypes[prop].unsolvedProblems.length, currentComposition.composition.id, compositions.problemTypes[prop], false);
			
			if (composition !== undefined) {
				problemType = compositions.problemTypes[prop];
				break;
			}
		}
	}
	if (arguments.length == 2) {
		for (var prop in compositions.problemTypes) {
			if (compositions.problemTypes[prop].id == id) {
				problemType = compositions.problemTypes[prop];
				break;
			}
		}
	}
	
	if (problemType.id >= 1 && problemType.id <= 4) {
		turnLimit = problemType.id;
	}

	return turnLimit;
}

/* search for a composition by id
 *
 */
function search(s, e, id, problemType, isProblemSolved) {
	var middle = Math.floor((s + e) / 2);
	var p = (isProblemSolved) ? problemType.solvedProblems : problemType.unsolvedProblems;
	
	while (s < e) {
		if (p[middle].id == id) {
			return p[middle];
		}
		else if (p[middle].id > id) {
			return search(s, middle - 1, id, problemType, isProblemSolved);
		}
		else {
			return search(middle + 1, e, id, problemType, isProblemSolved);
		}
	}
}

/* Sets the board to a random composition and draws it to the canvas.  
 * 
 */
function loadRandomComposition() {
	var problemType;
	var problemTypeSelector;
	var problemTypeSelectorValue;
	// var min, max, rand;
	var problemTypeString;
	var turnsRemaining;

	// randomly select problem from a particular group using the dropdown
	problemTypeSelector = document.getElementById('problemTypeSelector');
	problemTypeSelectorValue = problemTypeSelector.value;
	
	if (problemTypeSelectorValue >= 1 && problemTypeSelectorValue <= 4) {
		problemTypeString = 'checkmate in ' + problemTypeSelectorValue + ' ' + ((problemTypeSelectorValue == 1) ? 'move' : 'moves');
		currentComposition.groupId = problemTypeSelectorValue;
		turnsRemaining = problemTypeSelectorValue;
	}
	
	switch (problemTypeSelector.value) {
		case '1':
			problemType = compositions.problemTypes.checkmateInOne;
			break;
		case '2':
			problemType = compositions.problemTypes.checkmateInTwo;
			break;
		case '3':
			problemType = compositions.problemTypes.checkmateInThree;
			break;
		case '4':
			problemType = compositions.problemTypes.checkmateInFour;
			break;
		default:
			throw "case " + problemTypeSelector.value + " not currently supported by loadRandomComposition()";
			break;
	}
	
	// randomly select a composition
	if (problemType !== undefined) {
		if (problemType.unsolvedProblems.length > 0) {
			if (problemType.unsolvedProblems.length > 1) {
				while (rand == undefined || problemType.unsolvedProblems[rand].id == currentComposition.composition.id) {
					rand = getRand(0, problemType.unsolvedProblems.length);
				}
			}
			else
				rand = getRand(0, problemType.unsolvedProblems.length);
			
			currentComposition.composition = problemType.unsolvedProblems[rand];
			currentComposition.currentSolutionNode = currentComposition.composition.solution.root;
			currentComposition.turn = 0;
			board = new Board(currentComposition.composition.initialState);
			draw(board);
		}
		// DEBUG
		else if (problemType.unsolvedProblems.length + problemType.solvedProblems.length == 0) { 
			alert("There currently aren't any " + problemTypeSelector.options[problemTypeSelector.selectedIndex].text + " problems for you to solve."); 
		}
		else {
			alert("You've solved all " + problemTypeSelector.options[problemTypeSelector.selectedIndex].text + " problems! Refresh the page to go again.");
		}
	}
	
	document.getElementById('typeProperty').innerHTML = "Current Problem Type";
	document.getElementById('currentProblemType').innerHTML = problemTypeString;
	document.getElementById('turnsRemainingProperty').innerHTML = "Moves remaining";
	document.getElementById('turnsRemaining').innerHTML = turnsRemaining;
}

// NOTE check usage
/* Return the appropriate property for the selected group
 * id the group id
 */
function getGroup(id) {
	var problemType;
	
	for (var prop in compositions.problemTypes) {
		if (compositions.problemTypes[prop].id == id) {
			problemType = compositions.problemTypes[prop];
			break;
		}
	}
	
	return problemType;
}

/* Creates list of compositions to be accessed
 * solution elements for mating move are not present
 */
function populateCompositionList() {
	var c;						// board
	var composition;
	var tree;					// store solution trees
	
	// =========================================================================================
	// checkmate in one problems
	// =========================================================================================
	
	// 1 WORKS
	// c = new Board();
	// c.addPiece(new Rook(WHITE), 0, 4);
	// c.addPiece(new Bishop(WHITE), 2, 2);
	// c.addPiece(new Knight(WHITE), 2, 6);
	// c.addPiece(new Pawn(BLACK), 3, 5);
	// c.addPiece(new Pawn(BLACK), 3, 6);
	// c.addPiece(new King(BLACK), 4, 6);
	// c.addPiece(new Pawn(WHITE), 6, 4);
	// c.addPiece(new King(WHITE), 6, 7);	
	// s = [	
		// [ new SolutionElement(undefined, 'Bf3') ] 
	// ];
	// composition = new Composition(compositions.nextID++, c, s);
	// compositions.problemTypes.checkmateInOne.unsolvedProblems.push(composition);
	
	// =========================================================================================
	// checkmate in two problems
	// =========================================================================================
	
	// 1 undo from final move doesn't work properly
	// c = new Board();
	// c.addPiece(new Rook(WHITE), 0, 7);
	// c.addPiece(new Bishop(WHITE), 1, 1);
	// c.addPiece(new Knight(WHITE), 1, 3);
	// c.addPiece(new Rook(BLACK), 3, 3);
	// c.addPiece(new King(WHITE), 4, 1);
	// c.addPiece(new King(BLACK), 4, 4);
	// c.addPiece(new Queen(WHITE), 6, 5);
	
	// composition = new Composition(compositions.nextID++, c, []);
	// compositions.problemTypes.checkmateInTwo.unsolvedProblems.push(composition);
	
	// 2	WORKS
	// think there was a problem with this one
	// c = new Board();
	// c.addPiece(new King(BLACK), 0, 3);
	// c.addPiece(new Pawn(WHITE), 1, 3);
	// c.addPiece(new Queen(WHITE), 2, 3);
	// c.addPiece(new King(WHITE), 7, 4);
	// s = [
		// [ new SolutionElement(undefined, 'Qd5') ],	//new Action(c.getTile(2, 3), ActionType.MOVE, 3, 3)
		// [ new SolutionElement(1, 'd7', 'K~', new Queen(WHITE)) ]	//new Action(c.getTile(1, 3), ActionType.MOVE, 0, 3)
	// ];
	// composition = new Composition(compositions.nextID++, c, s);
	// compositions.problemTypes.checkmateInTwo.unsolvedProblems.push(composition);
	
	// 3
	// c = new Board();
	// c.addPiece(new King(WHITE), 1, 4);
	// c.addPiece(new Queen(WHITE), 1, 5);
	// c.addPiece(new King(BLACK), 4, 4);
	// c.addPiece(new Pawn(WHITE), 5, 4);
	// c.addPiece(new Bishop(WHITE), 6, 1);
	// c.addPiece(new Knight(WHITE), 7, 2);
	// s = [
		// [
			// new SolutionElement(undefined, 'Be5')		// new Action(c.getTile(6, 1), ActionType.MOVE, 3, 4)
		// ],
		// [
			// new SolutionElement(1, 'Qe6', 'Ke5'),			// new Action(c.getTile(1, 5), ActionType.MOVE, 2, 4)
			// new SolutionElement(1, 'Qf4', 'Ke3')					// new Action(c.getTile(1, 5), ActionType.MOVE, 4, 5)
		// ]
	// ];
	// composition = new Composition(compositions.nextID++, c, s);
	// compositions.problemTypes.checkmateInTwo.unsolvedProblems.push(composition);
	
	// 3
	// c = new Board();
	// c.addPiece(new King(WHITE), 1, 4);
	// c.addPiece(new Queen(WHITE), 1, 5);
	// c.addPiece(new King(BLACK), 4, 4);
	// c.addPiece(new Pawn(WHITE), 5, 4);
	// c.addPiece(new Bishop(WHITE), 6, 1);
	// c.addPiece(new Knight(WHITE), 7, 2);
	// s = [
		// [
			// new SolutionElement(undefined, 'Be5')		// new Action(c.getTile(6, 1), ActionType.MOVE, 3, 4)
		// ],
		// [
			// new SolutionElement(1, 'Qe6', 'Ke5'),			// new Action(c.getTile(1, 5), ActionType.MOVE, 2, 4)
			// new SolutionElement(1, 'Qf4', 'Ke3')					// new Action(c.getTile(1, 5), ActionType.MOVE, 4, 5)
		// ]
	// ];
	// composition = new Composition(compositions.nextID++, c, s);
	// compositions.problemTypes.checkmateInTwo.unsolvedProblems.push(composition);
	
	// =========================================================================================
	// checkmate in three problems
	// =========================================================================================
	// 1
	// c = new Board();
	// c.addPiece(new King(WHITE), 2, 3);
	// c.addPiece(new Rook(WHITE), 3, 2);
	// c.addPiece(new Pawn(WHITE), 5, 2);
	// c.addPiece(new King(BLACK), 5, 3);
	// c.addPiece(new Queen(WHITE), 6, 5);
	// s = [
		// [ new SolutionElement(undefined, 'Kd7')],		
		// [ new SolutionElement(1, 'Rd5', 'Ke4') ],		
		// [ new SolutionElement(1, 'Qd4', 'Kxd5') ]	
	// ]
	// composition = new Composition(compositions.nextID++, c, s);
	// compositions.problemTypes.checkmateInThree.unsolvedProblems.push(composition);
	
	// 3
	// take out - invalid via Santo
	// c = new Board();
	// c.addPiece(new King(BLACK), 1, 3);
	// c.addPiece(new Pawn(WHITE), 1, 4);
	// c.addPiece(new Queen(WHITE), 3, 2);
	// c.addPiece(new King(WHITE), 7, 0);
	// s = [
		// [
			// new SolutionElement(undefined, 'Ka2'),	//new Action(c.getTile(7, 0), ActionType.MOVE, 6, 0)
			// new SolutionElement(undefined, 'Kb1'),	//new Action(c.getTile(7, 0), ActionType.MOVE, 6, 1)
			// new SolutionElement(undefined, 'Kb2')	//new Action(c.getTile(7, 0), ActionType.MOVE, 7, 1)
		// ],
		// [
			// new SolutionElement(1, 'Qe5', 'Ke8'),	//new Action(c.getTile(3, 2), ActionType.MOVE, 3, 4)
			// new SolutionElement(2, 'e8', 'Ke6', new Queen(WHITE))	//new Action(c.getTile(1, 4), ActionType.MOVE, 0, 4)
		// ],
		// [
			// new SolutionElement(1, 'e8', 'K~', new Queen(WHITE)),	//new Action(c.getTile(1, 4), ActionType.MOVE, 0, 4)
			// new SolutionElement(2, 'Qc5-e5', 'Kf6')	//new Action(c.getTile(3, 2), ActionType.MOVE, 3, 4)
		// ]
	// ];
	// composition = new Composition(compositions.nextID++, c, s);
	// compositions.problemTypes.checkmateInThree.unsolvedProblems.push(composition);
	
	// 3
	// c = new Board();
	// c.addPiece(new King(BLACK), 3, 5);
	// c.addPiece(new Pawn(WHITE), 3, 6);
	// c.addPiece(new Queen(WHITE), 5, 4);
	// c.addPiece(new King(WHITE), 7, 0);
	// c.addPiece(new Bishop(WHITE), 7, 3);
	// s = [
		// [ new SolutionElement(undefined, 'Bf3') ],
		// [ new SolutionElement(1, 'Qe7', 'Kg6')],
		// [ new SolutionElement(4, 'Qf6', 'Kf5')]
	// ];
	// composition = new Composition(compositions.nextID++, c, s);
	// compositions.problemTypes.checkmateInThree.unsolvedProblems.push(composition);
	
	// 4
	// c = new Board();
	// c.addPiece(new King(WHITE), 0, 4);
	// c.addPiece(new Knight(WHITE), 2, 2);
	// c.addPiece(new Queen(WHITE), 3, 7);
	// c.addPiece(new Knight(WHITE), 4, 0);
	// c.addPiece(new King(BLACK), 4, 2);
	// s = [
		// [ new SolutionElement(undefined, 'Qd1') ],
		// [ new SolutionElement(1, 'Qd4', 'Kb5') ],
		// [ new SolutionElement(1, 'Qd7', 'K~') ]
	// ];
	// composition = new Composition(compositions.nextID++, c, s);
	// compositions.problemTypes.checkmateInThree.unsolvedProblems.push(composition);
	
	// =========================================================================================
	// checkmate in four problems
	// =========================================================================================
	// 1
	// c = new Board();
	// c.addPiece(new Pawn(BLACK), 2, 4);
	// c.addPiece(new Pawn(WHITE), 3, 1);
	// c.addPiece(new Pawn(BLACK), 3, 3);
	// c.addPiece(new King(WHITE), 4, 1);
	// c.addPiece(new King(BLACK), 4, 3);
	// c.addPiece(new Bishop(WHITE), 4, 4);
	// c.addPiece(new Knight(WHITE), 5, 3);
	// c.addPiece(new Rook(WHITE), 7, 4);
	// s = [
		// [ 
			// new SolutionElement(1, 'Bh7'), 
			// new SolutionElement(1, 'Bg6')
		// ],
		// [ 
			// new SolutionElement(1, 'Be4', 'e5') 
		// ],
		// [ 
			// new SolutionElement(1, 'Sc5', 'dxe4') 
		// ],
		// [ 
			// new SolutionElement(1, 'Rd1', 'Kd5')
		// ]
	// ];
	// composition = new Composition(compositions.nextID++, c, s);
	// compositions.problemTypes.checkmateInFour.unsolvedProblems.push(composition);
	
	// not sure if this has solution if Black does Kd7 on 1st most and Kd8 on 2nd
	// c = new Board();
	// c.addPiece(new Bishop(WHITE), 0, 5);
	// c.addPiece(new King(BLACK), 2, 4);
	// c.addPiece(new Pawn(BLACK), 2, 5);
	// c.addPiece(new King(WHITE), 2, 6);
	// c.addPiece(new Rook(WHITE), 4, 2);
	// c.addPiece(new Pawn(BLACK), 5, 6);
	// c.addPiece(new Pawn(WHITE), 6, 3);
	// c.addPiece(new Knight(WHITE), 6, 4);
	// c.addPiece(new Pawn(WHITE), 6, 6);
	// s = [
		// [
			// new SolutionElement(undefined, 'Sf4')
		// ],
		// [
			// new SolutionElement(1, 'Ra4', 'Ke5'),
			// new SolutionElement(2, 'Kf7', 'Kd7')
		// ],
		// [
			// new SolutionElement(1, 'Bb4', 'f5'),
			// new SolutionElement(2, 'Se6', 'f5')
		// ],
		// [
			// new SolutionElement(1, 'Bd6', 'K~'),
			// new SolutionElement(1, 'Rc7', 'f4')
		// ]
	// ];
	// composition = new Composition(compositions.nextID++, c, s);
	// compositions.problemTypes.checkmateInFour.unsolvedProblems.push(composition);
	
	// 3 
	// c = new Board();
	// c.addPiece(new Queen(WHITE), 0, 5);
	// c.addPiece(new Pawn(BLACK), 1, 0);
	// c.addPiece(new Pawn(WHITE), 2, 0);
	// c.addPiece(new Pawn(BLACK), 2, 3);
	// c.addPiece(new King(BLACK), 2, 4);
	// c.addPiece(new Pawn(BLACK), 3, 3);
	// c.addPiece(new Knight(WHITE), 5, 2);
	// c.addPiece(new Knight(WHITE), 5, 3);
	// c.addPiece(new Pawn(BLACK), 5, 6);
	// c.addPiece(new Pawn(WHITE), 6, 6);
	// c.addPiece(new King(WHITE), 7, 7);

	// tree = new Tree(new SolutionElement(1, 'Kg1'));
	// tree.add(new SolutionElement(2, 'Sd5', 'd4'), 1);
	// tree.add(new SolutionElement(3, 'Qf7', 'Kd5'), 2);
	// tree.add(new SolutionElement(12, 'Qf7', 'Kd7'), 1);
	// tree.add(new SolutionElement(131, 'Qe8', 'Kc8'), 12);
	// tree.add(new SolutionElement(132, 'Qb7', 'Kc6'), 12);
	// tree.add(new SolutionElement(133, 'Sd5', 'Kd8'), 12);
	// composition = new Composition(compositions.nextID++, c, [tree]);
	// compositions.problemTypes.checkmateInFour.unsolvedProblems.push(composition);
	
	// 4
	// c = new Board();
	// c.addPiece(new King(BLACK), 0, 4);
	// c.addPiece(new King(WHITE), 0, 7);
	// c.addPiece(new Bishop(BLACK), 1, 1);
	// c.addPiece(new Bishop(BLACK), 1, 4);
	// c.addPiece(new Pawn(BLACK), 1, 6);
	// c.addPiece(new Knight(WHITE), 3, 2);
	// c.addPiece(new Bishop(WHITE), 5, 3);
	// c.addPiece(new Rook(WHITE), 7, 4);
	// c.addPiece(new Rook(WHITE), 7, 5);
	// tree = new Tree(new SolutionElement(1, 'Rf8');
	// tree.add(new SolutionElement(2, 'Bg6', 'Bc8'), 1);
	// composition = new Composition(compositions.nextID++, c);
	// compositions.problemTypes.checkmateInFour.unsolvedProblems.push(composition);
	
	// 5
	c = new Board();
	c.addPiece(new Rook(BLACK), 0, 0);
	c.addPiece(new Queen(BLACK), 0, 6);
	c.addPiece(new Rook(WHITE), 1, 4);
	c.addPiece(new Bishop(BLACK), 1, 5);
	c.addPiece(new Pawn(BLACK), 2, 3);
	c.addPiece(new Pawn(BLACK), 3, 6);
	c.addPiece(new Rook(BLACK), 4, 7);
	c.addPiece(new King(BLACK), 5, 1);
	c.addPiece(new Pawn(BLACK), 5, 7);
	c.addPiece(new Pawn(WHITE), 6, 1);
	c.addPiece(new Knight(WHITE), 6, 2);
	c.addPiece(new Queen(WHITE), 6, 5);
	c.addPiece(new King(WHITE), 6, 7);
	
	tree = new Tree(new SolutionElement(1, 'Rb7'));
	tree.add(new SolutionElement(2, 'Qf1', 'Kc4'), 1);	
	tree.add(new SolutionElement(3, 'Qf5', 'Kd5'), 2);
	tree.add(new SolutionElement(12, 'Qf1', 'Ka4'), 1);
	tree.add(new SolutionElement(13, 'Qc4', 'Ra5'), 12);
	tree.add(new SolutionElement(131, 'Qb5', 'Ka5'), 12);
	tree.add(new SolutionElement(132, 'Rb4', 'Rb4'), 12);
	tree.add(new SolutionElement(142, 'Qb5', 'Ka5'), 132);
	tree.add(new SolutionElement(33, 'b3', 'Bc4'), 12);
	tree.add(new SolutionElement(42, 'Rb4', 'Rb4'), 1)
	tree.add(new SolutionElement(43, 'Qe1', 'Ka2'), 42);
	composition = new Composition(compositions.nextID++, c, [tree]);
	compositions.problemTypes.checkmateInFour.unsolvedProblems.push(composition);
	
	// DEBUG
	//console.log("depth of " + cNode.data.playerAction + ": " + cNode.getDepth());
	
	// 6
	// c = new Board();
	// c.addPiece(new Knight(WHITE), 0, 5);
	// c.addPiece(new Bishop(WHITE), 1, 1);
	// c.addPiece(new Knight(BLACK), 1, 3);
	// c.addPiece(new Bishop(BLACK), 1, 4);
	// c.addPiece(new Bishop(BLACK), 1, 5);
	// c.addPiece(new Knight(WHITE), 1, 6);
	// c.addPiece(new Pawn(WHITE), 2, 2);
	// c.addPiece(new King(BLACK), 2, 3);
	// c.addPiece(new Pawn(BLACK), 3, 4);
	// c.addPiece(new Pawn(BLACK), 4, 2);
	// c.addPiece(new Queen(WHITE), 5, 5);
	// c.addPiece(new Queen(BLACK), 6, 0);
	// c.addPiece(new Bishop(WHITE), 7, 6);
	// c.addPiece(new King(WHITE), 7, 7);
	// composition = new Composition(compositions.nextID++, c);
	// compositions.problemTypes.checkmateInFour.unsolvedProblems.push(composition);
	
	// 7
	// c = new Board();
	// c.addPiece(new King(WHITE), 1, 4);
	// c.addPiece(new Knight(BLACK), 2, 0);
	// c.addPiece(new Knight(WHITE), 2, 5);
	// c.addPiece(new Pawn(BLACK), 2, 6);
	// c.addPiece(new Pawn(BLACK), 3, 2);
	// c.addPiece(new King(BLACK), 3, 4);
	// c.addPiece(new Pawn(BLACK), 4, 1);
	// c.addPiece(new Pawn(WHITE), 4, 6);
	// c.addPiece(new Bishop(WHITE), 5, 4);
	// c.addPiece(new Bishop(BLACK), 5, 6);
	// c.addPiece(new Bishop(BLACK), 6, 0);
	// c.addPiece(new Pawn(WHITE), 6, 1);
	// c.addPiece(new Knight(WHITE), 6, 2);
	// c.addPiece(new Rook(WHITE), 7, 5);
	// composition = new Composition(compositions.nextID++, c);
	// compositions.problemTypes.checkmateInFour.unsolvedProblems.push(composition);
	
	// 8
	// c = new Board();
	// c.addPiece(new Pawn(BLACK), 2, 6);
	// c.addPiece(new Knight(WHITE), 3, 2);
	// c.addPiece(new Pawn(BLACK), 3, 4);
	// c.addPiece(new Pawn(BLACK), 3, 5);
	// c.addPiece(new King(WHITE), 3, 6);
	// c.addPiece(new Rook(WHITE), 5, 3);
	// c.addPiece(new Knight(BLACK), 5, 4);
	// c.addPiece(new King(BLACK), 5, 5);
	// c.addPiece(new Rook(WHITE), 6, 0);
	// c.addPiece(new Pawn(WHITE), 6, 7);
	// composition = new Composition(compositions.nextID++, c);
	// compositions.problemTypes.checkmateInFour.unsolvedProblems.push(composition);
}

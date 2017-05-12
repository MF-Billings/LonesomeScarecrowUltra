/* Creates list of compositions to be accessed
 */
function populateCompositionList() {
	var c;						// board
	var composition;
	
	// =========================================================================================
	// checkmate in one problems
	// =========================================================================================
	
	// 1 WORKS
	c = new Board();
	c.addPiece(new Rook(WHITE), 0, 4);
	c.addPiece(new Bishop(WHITE), 2, 2);
	c.addPiece(new Knight(WHITE), 2, 6);
	c.addPiece(new Pawn(BLACK), 3, 5);
	c.addPiece(new Pawn(BLACK), 3, 6);
	c.addPiece(new King(BLACK), 4, 6);
	c.addPiece(new Pawn(WHITE), 6, 4);
	c.addPiece(new King(WHITE), 6, 7);	

	composition = new Composition(compositions.nextID++, c);
	compositions.problemTypes.checkmateInOne.unsolvedProblems.push(composition);
	
	// 2 
	c = new Board();
	c.addPiece(new Rook(WHITE), 0, 3);
	c.addPiece(new Bishop(WHITE), 1, 1);
	c.addPiece(new Knight(WHITE), 1, 3);
	c.addPiece(new Rook(BLACK), 3, 3);
	c.addPiece(new King(WHITE), 4, 1);
	c.addPiece(new King(BLACK), 5, 3);
	c.addPiece(new Queen(WHITE), 6, 5);

	composition = new Composition(compositions.nextID++, c);
	compositions.problemTypes.checkmateInOne.unsolvedProblems.push(composition);

 	// 3
	c = new Board();
	c.addPiece(new King(BLACK), 1, 2);
	c.addPiece(new Pawn(WHITE), 1, 3);
	c.addPiece(new Queen(WHITE), 3, 3);
	c.addPiece(new King(WHITE), 7, 4);

	composition = new Composition(compositions.nextID++, c);
	compositions.problemTypes.checkmateInOne.unsolvedProblems.push(composition);

	// 4 
	c = new Board();
	c.addPiece(new King(WHITE), 1, 4);
	c.addPiece(new Queen(WHITE), 1, 5);
	c.addPiece(new Bishop(WHITE), 3, 4);
	c.addPiece(new King(BLACK), 4, 4);
	c.addPiece(new Pawn(WHITE), 5, 4);
	c.addPiece(new Knight(WHITE), 7, 2);

	composition = new Composition(compositions.nextID++, c);
	compositions.problemTypes.checkmateInOne.unsolvedProblems.push(composition);
  
	// 5
	c = new Board();
	c.addPiece(new King(BLACK), 0, 2);
	c.addPiece(new Bishop(WHITE), 1, 4);
	c.addPiece(new King(WHITE), 1, 5);
	c.addPiece(new Bishop(BLACK), 3, 6);
	c.addPiece(new Queen(WHITE), 4, 4);
	c.addPiece(new Rook(WHITE), 1, 3);

	composition = new Composition(compositions.nextID++, c);
	compositions.problemTypes.checkmateInOne.unsolvedProblems.push(composition);
  
	// 6
	c = new Board();
	c.addPiece(new Pawn(BLACK), 2, 3);
	c.addPiece(new Queen(WHITE), 1, 5);
	c.addPiece(new Pawn(BLACK), 2, 6);
	c.addPiece(new Knight(BLACK), 3, 0);
	c.addPiece(new Rook(WHITE), 3, 6);
	c.addPiece(new Bishop(WHITE), 4, 3);
	c.addPiece(new King(BLACK), 4, 3);
	c.addPiece(new King(WHITE), 6, 2);

	composition = new Composition(compositions.nextID++, c);
	compositions.problemTypes.checkmateInOne.unsolvedProblems.push(composition);

    // 7
	c = new Board();
	c.addPiece(new Bishop(WHITE), 1, 5);
	c.addPiece(new Bishop(WHITE), 2, 3);
	c.addPiece(new Rook(WHITE), 5, 7);
	c.addPiece(new Rook(BLACK), 3, 3);
	c.addPiece(new King(BLACK), 5, 1);
	c.addPiece(new Knight(BLACK), 5, 4);
	c.addPiece(new Pawn(BLACK), 6, 2);
	c.addPiece(new Queen(WHITE), 6, 7);
	c.addPiece(new King(WHITE), 7, 2);

	composition = new Composition(compositions.nextID++, c);
	compositions.problemTypes.checkmateInOne.unsolvedProblems.push(composition);

    // 8
	c = new Board();
    c.addPiece(new Rook(BLACK), 0, 4);
    c.addPiece(new Bishop(WHITE), 0, 7);
    c.addPiece(new Bishop(BLACK), 2, 4);
    c.addPiece(new Knight(WHITE), 4, 1);
    c.addPiece(new Rook(WHITE), 4, 3);
    c.addPiece(new Pawn(WHITE), 5, 0);
    c.addPiece(new Pawn(BLACK), 5, 1);
    c.addPiece(new King(BLACK), 5, 2);
    c.addPiece(new King(WHITE), 7, 1);
    c.addPiece(new Knight(WHITE), 7, 2);
	
	composition = new Composition(compositions.nextID++, c);
	compositions.problemTypes.checkmateInOne.unsolvedProblems.push(composition);

    // 9
	c = new Board();
	c.addPiece(new King(WHITE), 1, 3);
	c.addPiece(new Knight(WHITE), 2, 3);
	c.addPiece(new Knight(BLACK), 2, 7);
	c.addPiece(new Pawn(BLACK), 3, 2);
	c.addPiece(new King(BLACK), 3, 3);
	c.addPiece(new Knight(BLACK), 1, 5);
	c.addPiece(new Pawn(BLACK), 4, 5);
	c.addPiece(new Pawn(WHITE), 5, 2);
	c.addPiece(new Queen(WHITE), 7, 0);

	composition = new Composition(compositions.nextID++, c);
	compositions.problemTypes.checkmateInOne.unsolvedProblems.push(composition);

    // 10
	c = new Board();
	c.addPiece(new Bishop(BLACK), 1, 0);
	c.addPiece(new Rook(WHITE), 1, 2);
	c.addPiece(new Pawn(BLACK), 3, 5);
	c.addPiece(new Knight(BLACK), 3, 2);
	c.addPiece(new King(BLACK), 4, 2);
	c.addPiece(new Knight(WHITE), 4, 3);
	c.addPiece(new Pawn(WHITE), 5, 2);
	c.addPiece(new King(WHITE), 6, 3);
	c.addPiece(new Queen(WHITE), 0, 0);

	composition = new Composition(compositions.nextID++, c);
	compositions.problemTypes.checkmateInOne.unsolvedProblems.push(composition);

    // 11
	c = new Board();
	c.addPiece(new Queen(WHITE), 2, 0);
	c.addPiece(new Bishop(BLACK), 2, 4);
	c.addPiece(new Knight(BLACK), 3, 6);
	c.addPiece(new Pawn(WHITE), 4, 1);
	c.addPiece(new Knight(BLACK), 4, 2);
	c.addPiece(new King(BLACK), 3, 3);
	c.addPiece(new Bishop(WHITE), 4, 5);
	c.addPiece(new Pawn(WHITE), 5, 2);
	c.addPiece(new Pawn(BLACK), 5, 5);
	c.addPiece(new King(WHITE), 5, 6);
	c.addPiece(new Pawn(WHITE), 6, 5);

	composition = new Composition(compositions.nextID++, c);
	compositions.problemTypes.checkmateInOne.unsolvedProblems.push(composition);

    // 12
	c = new Board();
	c.addPiece(new Rook(WHITE), 0, 1);
	c.addPiece(new Knight(BLACK), 0, 2);
	c.addPiece(new Pawn(BLACK), 2, 0);
	c.addPiece(new Bishop(BLACK), 1, 2);
	c.addPiece(new King(BLACK), 3, 0);
	c.addPiece(new Pawn(BLACK), 3, 3);
	c.addPiece(new Knight(WHITE), 4, 1);
	c.addPiece(new Pawn(WHITE), 4, 3);
	c.addPiece(new King(WHITE), 6, 4);
	c.addPiece(new Bishop(WHITE), 7, 3);

	composition = new Composition(compositions.nextID++, c);
	compositions.problemTypes.checkmateInOne.unsolvedProblems.push(composition);

    // 13
	c = new Board();
	c.addPiece(new Queen(BLACK), 0, 2);
	c.addPiece(new Bishop(WHITE), 1, 2);
	c.addPiece(new Pawn(BLACK), 3, 7);
	c.addPiece(new Bishop(BLACK), 4, 1);
	c.addPiece(new Rook(WHITE), 4, 4);
	c.addPiece(new King(BLACK), 5, 2);
	c.addPiece(new Knight(WHITE), 5, 3);
	c.addPiece(new Pawn(WHITE), 6, 2);
	c.addPiece(new King(WHITE), 7, 3);
	
	composition = new Composition(compositions.nextID++, c);
	compositions.problemTypes.checkmateInOne.unsolvedProblems.push(composition);

    // 14
	c = new Board();
	c.addPiece(new King(BLACK), 0, 3);
	c.addPiece(new Knight(BLACK), 0, 4);
	c.addPiece(new Rook(WHITE), 0, 7);
	c.addPiece(new Pawn(BLACK), 1, 2);
	c.addPiece(new Knight(WHITE), 2, 1);
	c.addPiece(new Queen(WHITE), 7, 2);
	c.addPiece(new Bishop(BLACK), 2, 4);
	c.addPiece(new Pawn(BLACK), 4, 6);
	c.addPiece(new King(WHITE), 5, 6);

	composition = new Composition(compositions.nextID++, c);
	compositions.problemTypes.checkmateInOne.unsolvedProblems.push(composition);

    // 15
	c = new Board();
	c.addPiece(new King(BLACK), 0, 3);
	c.addPiece(new Knight(BLACK), 0, 4);
	c.addPiece(new Rook(WHITE), 0, 7);
	c.addPiece(new Pawn(BLACK), 2, 1);
	c.addPiece(new Queen(WHITE), 2, 2);
	c.addPiece(new Bishop(BLACK), 3, 5);
	c.addPiece(new Pawn(BLACK), 4, 6);
	c.addPiece(new King(WHITE), 5, 6);
	c.addPiece(new Bishop(WHITE), 6, 0);

	composition = new Composition(compositions.nextID++, c);
	compositions.problemTypes.checkmateInOne.unsolvedProblems.push(composition);

    // 16
	c = new Board();
	c.addPiece(new Pawn(BLACK), 3, 2);
	c.addPiece(new Knight(WHITE), 3, 4);
	c.addPiece(new Pawn(BLACK), 3, 7);
	c.addPiece(new Pawn(WHITE), 4, 2);
	c.addPiece(new Pawn(BLACK), 4, 4);
	c.addPiece(new Pawn(WHITE), 4, 7);
	c.addPiece(new King(BLACK), 4, 5);
	c.addPiece(new Knight(WHITE), 6, 1);
	c.addPiece(new King(WHITE), 7, 3);
	c.addPiece(new Queen(WHITE), 7, 6);

	composition = new Composition(compositions.nextID++, c);
	compositions.problemTypes.checkmateInOne.unsolvedProblems.push(composition);

	// 17
	c = new Board();
	c.addPiece(new Pawn(BLACK), 3, 2);
	c.addPiece(new Knight(WHITE), 3, 4);
	c.addPiece(new Pawn(BLACK), 3, 7);
	c.addPiece(new Pawn(WHITE), 4, 2);
	c.addPiece(new Pawn(BLACK), 4, 4);
	c.addPiece(new Pawn(WHITE), 4, 7);
	c.addPiece(new King(BLACK), 4, 3);
	c.addPiece(new Knight(WHITE), 6, 1);
	c.addPiece(new King(WHITE), 7, 3);
	c.addPiece(new Queen(WHITE), 2, 5);

	composition = new Composition(compositions.nextID++, c);
	compositions.problemTypes.checkmateInOne.unsolvedProblems.push(composition);

    // 18
	c = new Board();
	c.addPiece(new Bishop(BLACK), 0, 1);
	c.addPiece(new Queen(BLACK), 0, 3);
	c.addPiece(new Knight(WHITE), 1, 4);
	c.addPiece(new Bishop(BLACK), 1, 7);
	c.addPiece(new Pawn(BLACK), 2, 1);
	c.addPiece(new Pawn(BLACK), 3, 2);
	c.addPiece(new Bishop(WHITE), 4, 2);
	c.addPiece(new King(BLACK), 4, 3);
	c.addPiece(new Rook(BLACK), 5, 5);
	c.addPiece(new Knight(WHITE), 4, 6);
	c.addPiece(new King(WHITE), 5, 1);
	c.addPiece(new Pawn(WHITE), 5, 3);

	composition = new Composition(compositions.nextID++, c);
	compositions.problemTypes.checkmateInOne.unsolvedProblems.push(composition);

    // 19
	c = new Board();
 	c.addPiece(new Bishop(BLACK), 0, 7);
 	c.addPiece(new Bishop(WHITE), 0, 2);
 	c.addPiece(new Queen(WHITE), 2, 3);
 	c.addPiece(new Knight(WHITE), 2, 4);
 	c.addPiece(new King(BLACK), 3, 5);
 	c.addPiece(new Pawn(WHITE), 4, 7);
 	c.addPiece(new Pawn(BLACK), 6, 1);
 	c.addPiece(new King(WHITE), 7, 1);

	composition = new Composition(compositions.nextID++, c);
	compositions.problemTypes.checkmateInOne.unsolvedProblems.push(composition);

	// 20
	c = new Board();
	c.addPiece(new Knight(BLACK), 0, 2);
	c.addPiece(new King(WHITE), 1, 5);
	c.addPiece(new Pawn(BLACK), 2, 2);
	c.addPiece(new Bishop(WHITE), 2, 5);
	c.addPiece(new Knight(WHITE), 3, 1);
	c.addPiece(new Pawn(BLACK), 3, 2);
	c.addPiece(new King(BLACK), 3, 5);
	c.addPiece(new Bishop(BLACK), 5, 3);
	c.addPiece(new Pawn(BLACK), 4, 5);
	c.addPiece(new Pawn(WHITE), 5, 7);
	c.addPiece(new Bishop(WHITE), 7, 1);

	composition = new Composition(compositions.nextID++, c);
	compositions.problemTypes.checkmateInOne.unsolvedProblems.push(composition);

//	c = new Board();
//
//	composition = new Composition(compositions.nextID++, c);
//	compositions.problemTypes.checkmateInOne.unsolvedProblems.push(composition);
	
	// =========================================================================================
	// checkmate in two problems
	// =========================================================================================
	
	// 1 
	c = new Board();
	c.addPiece(new Rook(WHITE), 0, 7);
	c.addPiece(new Bishop(WHITE), 1, 1);
	c.addPiece(new Knight(WHITE), 1, 3);
	c.addPiece(new Rook(BLACK), 3, 3);
	c.addPiece(new King(WHITE), 4, 1);
	c.addPiece(new King(BLACK), 4, 4);
	c.addPiece(new Queen(WHITE), 6, 5);
	
	composition = new Composition(compositions.nextID++, c);
	compositions.problemTypes.checkmateInTwo.unsolvedProblems.push(composition);
  
    // 2
	c = new Board();
	c.addPiece(new King(BLACK), 0, 3);
	c.addPiece(new Pawn(WHITE), 1, 3);
	c.addPiece(new Queen(WHITE), 2, 3);
	c.addPiece(new King(WHITE), 7, 4);

	composition = new Composition(compositions.nextID++, c);
	compositions.problemTypes.checkmateInTwo.unsolvedProblems.push(composition);
	
	// 3
	c = new Board();
	c.addPiece(new King(WHITE), 1, 4);
	c.addPiece(new Queen(WHITE), 1, 5);
	c.addPiece(new King(BLACK), 4, 4);
	c.addPiece(new Pawn(WHITE), 5, 4);
	c.addPiece(new Bishop(WHITE), 6, 1);
	c.addPiece(new Knight(WHITE), 7, 2);

	composition = new Composition(compositions.nextID++, c);
	compositions.problemTypes.checkmateInTwo.unsolvedProblems.push(composition);
	
	// 4
	c = new Board();
	c.addPiece(new King(WHITE), 1, 4);
	c.addPiece(new Queen(WHITE), 1, 5);
	c.addPiece(new King(BLACK), 4, 4);
	c.addPiece(new Pawn(WHITE), 5, 4);
	c.addPiece(new Bishop(WHITE), 6, 1);
	c.addPiece(new Knight(WHITE), 7, 2);

	composition = new Composition(compositions.nextID++, c);
	compositions.problemTypes.checkmateInTwo.unsolvedProblems.push(composition);
  
    // 5
	c = new Board();
	c.addPiece(new King(BLACK), 0, 2);
	c.addPiece(new Bishop(WHITE), 1, 4);
	c.addPiece(new King(WHITE), 1, 5);
	c.addPiece(new Bishop(BLACK), 3, 6);
	c.addPiece(new Queen(WHITE), 4, 4);
	c.addPiece(new Rook(WHITE), 7, 3);

	composition = new Composition(compositions.nextID++, c);
	compositions.problemTypes.checkmateInTwo.unsolvedProblems.push(composition);
	
	// 6
	c = new Board();
	c.addPiece(new Pawn(BLACK), 2, 3);
	c.addPiece(new Queen(WHITE), 2, 5);
	c.addPiece(new Pawn(BLACK), 2, 6);
	c.addPiece(new Knight(BLACK), 3, 0);
	c.addPiece(new Rook(WHITE), 3, 6);
	c.addPiece(new Bishop(WHITE), 4, 3);
	c.addPiece(new King(BLACK), 4, 4);
	c.addPiece(new King(WHITE), 6, 2);
	
	composition = new Composition(compositions.nextID++, c);
	compositions.problemTypes.checkmateInTwo.unsolvedProblems.push(composition);
	
	// 7
	c = new Board();
	c.addPiece(new Bishop(WHITE), 1, 5);
	c.addPiece(new Bishop(WHITE), 2, 3);
	c.addPiece(new Rook(WHITE), 2, 7);
	c.addPiece(new Rook(BLACK), 3, 3);
	c.addPiece(new King(BLACK), 4, 2);
	c.addPiece(new Rook(WHITE), 5, 1);
	c.addPiece(new Knight(BLACK), 5, 4);
	c.addPiece(new Pawn(BLACK), 6, 2);
	c.addPiece(new Queen(WHITE), 6, 7);
	c.addPiece(new King(WHITE), 7, 2);
	
	composition = new Composition(compositions.nextID++, c);
	compositions.problemTypes.checkmateInTwo.unsolvedProblems.push(composition);
	
	// 8 may have wrong #
	c = new Board();
	c.addPiece(new Bishop(WHITE), 1, 5);
	c.addPiece(new Rook(WHITE), 3, 3);
	c.addPiece(new King(BLACK), 4, 2);
	c.addPiece(new Rook(BLACK), 4, 6);
	c.addPiece(new Pawn(WHITE), 5, 0);
	c.addPiece(new Pawn(WHITE), 5, 2);
	c.addPiece(new Rook(BLACK), 5, 7);
	c.addPiece(new King(WHITE), 6, 1);
	c.addPiece(new Rook(WHITE), 6, 4);
	
	composition = new Composition(compositions.nextID++, c);
	compositions.problemTypes.checkmateInTwo.unsolvedProblems.push(composition);
	
	// 9 
    c = new Board();
    c.addPiece(new Rook(BLACK), 0, 4);
    c.addPiece(new Bishop(WHITE), 0, 7);
    c.addPiece(new Bishop(BLACK), 1, 5);
    c.addPiece(new Knight(WHITE), 4, 1);
    c.addPiece(new Rook(WHITE), 4, 3);
    c.addPiece(new Bishop(WHITE), 4, 6);
    c.addPiece(new Pawn(WHITE), 5, 0);
    c.addPiece(new Pawn(BLACK), 5, 1);
    c.addPiece(new King(BLACK), 5, 2);
    c.addPiece(new King(WHITE), 7, 1);
    c.addPiece(new Knight(WHITE), 7, 2);
    
    composition = new Composition(compositions.nextID++, c);
    compositions.problemTypes.checkmateInTwo.unsolvedProblems.push(composition);
	
	// 10
	c = new Board();
	c.addPiece(new King(WHITE), 1, 3);
	c.addPiece(new Knight(WHITE), 2, 3);
	c.addPiece(new Knight(BLACK), 2, 7);
	c.addPiece(new Pawn(BLACK), 3, 2);
	c.addPiece(new King(BLACK), 3, 3);
	c.addPiece(new Knight(BLACK), 3, 6);
	c.addPiece(new Pawn(BLACK), 4, 5);
	c.addPiece(new Pawn(WHITE), 5, 2);
	c.addPiece(new Queen(WHITE), 7, 4);
	
	composition = new Composition(compositions.nextID++, c);
	compositions.problemTypes.checkmateInTwo.unsolvedProblems.push(composition);
	
	// 11
	c = new Board();
	c.addPiece(new Bishop(BLACK), 1, 0);
	c.addPiece(new Rook(WHITE), 1, 2);
	c.addPiece(new Pawn(BLACK), 1, 5);
	c.addPiece(new Knight(BLACK), 3, 2);
	c.addPiece(new King(BLACK), 4, 2);
	c.addPiece(new Knight(WHITE), 4, 3);
	c.addPiece(new Pawn(WHITE), 5, 2);
	c.addPiece(new King(WHITE), 6, 3);
	c.addPiece(new Queen(WHITE), 6, 6);
	
	composition = new Composition(compositions.nextID++, c);
	compositions.problemTypes.checkmateInTwo.unsolvedProblems.push(composition);
	
	// 12
	c = new Board();
	c.addPiece(new Queen(WHITE), 2, 3);
	c.addPiece(new Bishop(BLACK), 2, 4);
	c.addPiece(new Rook(WHITE), 3, 3);
	c.addPiece(new Knight(BLACK), 3, 6);
	c.addPiece(new Pawn(WHITE), 4, 1);
	c.addPiece(new Knight(BLACK), 4, 2);
	c.addPiece(new King(BLACK), 4, 4);
	c.addPiece(new Bishop(WHITE), 4, 5);
	c.addPiece(new Pawn(WHITE), 5, 2);
	c.addPiece(new Pawn(BLACK), 5, 5);
	c.addPiece(new King(WHITE), 5, 6);
	c.addPiece(new Pawn(WHITE), 6, 5);
	
	composition = new Composition(compositions.nextID++, c);
	compositions.problemTypes.checkmateInTwo.unsolvedProblems.push(composition);

	// 13	
	c = new Board();
	c.addPiece(new Rook(WHITE), 0, 1);
	c.addPiece(new Knight(BLACK), 0, 2);
	c.addPiece(new Pawn(BLACK), 2, 0);
	c.addPiece(new Bishop(BLACK), 2, 1);
	c.addPiece(new King(BLACK), 3, 0);
	c.addPiece(new Pawn(BLACK), 3, 3);
	c.addPiece(new Knight(WHITE), 4, 1);
	c.addPiece(new Pawn(WHITE), 4, 3);
	c.addPiece(new Queen(WHITE), 5, 6);
	c.addPiece(new King(WHITE), 6, 4);
	c.addPiece(new Bishop(WHITE), 7, 3);
	
	composition = new Composition(compositions.nextID++, c);
	compositions.problemTypes.checkmateInTwo.unsolvedProblems.push(composition);

    // 14  
	c = new Board();
	c.addPiece(new Queen(BLACK), 0, 4);
	c.addPiece(new Bishop(WHITE), 1, 2);
	c.addPiece(new Pawn(BLACK), 3, 7);
	c.addPiece(new Bishop(BLACK), 4, 1);
	c.addPiece(new Rook(WHITE), 4, 4);
	c.addPiece(new King(BLACK), 5, 2);
	c.addPiece(new Knight(WHITE), 5, 3);
	c.addPiece(new Queen(WHITE), 5, 7);
	c.addPiece(new Pawn(WHITE), 6, 2);
	c.addPiece(new King(WHITE), 7, 3);
	
	composition = new Composition(compositions.nextID++, c);
	compositions.problemTypes.checkmateInTwo.unsolvedProblems.push(composition);

	// 15 
	c = new Board();
	c.addPiece(new King(BLACK), 0, 3);
	c.addPiece(new Knight(BLACK), 0, 4);
	c.addPiece(new Rook(WHITE), 0, 7);
	c.addPiece(new Pawn(BLACK), 1, 2);
	c.addPiece(new Knight(WHITE), 2, 1);
	c.addPiece(new Queen(WHITE), 3, 2);
	c.addPiece(new Bishop(BLACK), 3, 5);
	c.addPiece(new Pawn(BLACK), 4, 6);
	c.addPiece(new King(WHITE), 5, 6);
	c.addPiece(new Bishop(WHITE), 6, 0);
	
	composition = new Composition(compositions.nextID++, c);
	compositions.problemTypes.checkmateInTwo.unsolvedProblems.push(composition);

	// 16 
	c = new Board();
	c.addPiece(new Pawn(BLACK), 3, 2);
	c.addPiece(new Knight(WHITE), 3, 4);
	c.addPiece(new Pawn(BLACK), 3, 7);
	c.addPiece(new Pawn(WHITE), 4, 2);
	c.addPiece(new Pawn(BLACK), 4, 4);
	c.addPiece(new Pawn(WHITE), 4, 7);
	c.addPiece(new King(BLACK), 5, 4);
	c.addPiece(new Knight(WHITE), 6, 1);
	c.addPiece(new King(WHITE), 7, 3);
	c.addPiece(new Queen(WHITE), 7, 5);
	
	composition = new Composition(compositions.nextID++, c);
	compositions.problemTypes.checkmateInTwo.unsolvedProblems.push(composition);

	// 17
	c = new Board();
	c.addPiece(new Bishop(BLACK), 0, 1);
	c.addPiece(new Queen(BLACK), 0, 3);
	c.addPiece(new Knight(WHITE), 1, 4);
	c.addPiece(new Bishop(BLACK), 1, 7);
	c.addPiece(new Pawn(BLACK), 2, 1);
	c.addPiece(new Queen(WHITE), 2, 2);
	c.addPiece(new Pawn(BLACK), 3, 2);
	c.addPiece(new Bishop(WHITE), 4, 2);
	c.addPiece(new King(BLACK), 4, 3);
	c.addPiece(new Rook(BLACK), 4, 5);
	c.addPiece(new Knight(WHITE), 4, 6);
	c.addPiece(new King(WHITE), 5, 1);
	c.addPiece(new Pawn(WHITE), 5, 3);
	
	composition = new Composition(compositions.nextID++, c);
	compositions.problemTypes.checkmateInTwo.unsolvedProblems.push(composition);

	// 18
	c = new Board();
 	c.addPiece(new Bishop(BLACK), 0, 7);
 	c.addPiece(new Bishop(WHITE), 1, 3);
 	c.addPiece(new Queen(WHITE), 2, 3);
 	c.addPiece(new Knight(WHITE), 2, 4);
 	c.addPiece(new King(BLACK), 2, 5);
 	c.addPiece(new Pawn(WHITE), 3, 5);
 	c.addPiece(new Pawn(WHITE), 4, 7);
 	c.addPiece(new Pawn(BLACK), 6, 1);
 	c.addPiece(new King(WHITE), 7, 1);
 	
 	composition = new Composition(compositions.nextID++, c);
 	compositions.problemTypes.checkmateInTwo.unsolvedProblems.push(composition);

	// 19
	c = new Board();
	c.addPiece(new Knight(BLACK), 0, 2);
	c.addPiece(new King(WHITE), 1, 5);
	c.addPiece(new Pawn(BLACK), 2, 2);
	c.addPiece(new Bishop(WHITE), 2, 5);
	c.addPiece(new Knight(WHITE), 3, 1);
	c.addPiece(new Pawn(BLACK), 3, 2);
	c.addPiece(new King(BLACK), 3, 5);
	c.addPiece(new Bishop(BLACK), 4, 4);
	c.addPiece(new Pawn(BLACK), 4, 5);
	c.addPiece(new Pawn(WHITE), 5, 7);
	c.addPiece(new Bishop(WHITE), 7, 1);
	c.addPiece(new Rook(WHITE), 7, 3);

	composition = new Composition(compositions.nextID++, c);
	compositions.problemTypes.checkmateInTwo.unsolvedProblems.push(composition);

	// 20 
	c = new Board()
	c.addPiece(new King(WHITE), 0, 6);
	c.addPiece(new Pawn(BLACK), 1, 0);
	c.addPiece(new Rook(WHITE), 1, 5);
	c.addPiece(new Bishop(BLACK), 2, 3);
	c.addPiece(new King(BLACK), 2, 4);
	c.addPiece(new Bishop(WHITE), 3, 4);
	c.addPiece(new Pawn(BLACK), 3, 6);
	c.addPiece(new Pawn(WHITE), 4, 2);
	c.addPiece(new Rook(WHITE), 4, 4);
	c.addPiece(new Rook(BLACK), 5, 2);
	c.addPiece(new Bishop(BLACK), 5, 7);
	c.addPiece(new Queen(BLACK), 7, 0);
	c.addPiece(new Queen(WHITE), 7, 6);
	
	composition = new Composition(compositions.nextID++, c);
	compositions.problemTypes.checkmateInTwo.unsolvedProblems.push(composition);

	//21 
	c = new Board();
	c.addPiece(new King(WHITE), 1, 5);
	c.addPiece(new Bishop(WHITE), 2, 0);
	c.addPiece(new King(BLACK), 2, 2);
	c.addPiece(new Bishop(BLACK), 2, 3);
	c.addPiece(new Knight(WHITE), 2, 4);
	c.addPiece(new Queen(WHITE), 2, 7);
	c.addPiece(new Rook(WHITE), 3, 1);
	c.addPiece(new Knight(WHITE), 5, 3);
	
	composition = new Composition(compositions.nextID++, c);
	compositions.problemTypes.checkmateInTwo.unsolvedProblems.push(composition);

	//22
	c = new Board();
	c.addPiece(new Bishop(BLACK), 0, 6);
	c.addPiece(new Pawn(BLACK), 1, 0);
	c.addPiece(new Knight(BLACK), 1, 2);
	c.addPiece(new Pawn(BLACK), 1, 3);
	c.addPiece(new King(BLACK), 2, 3);
	c.addPiece(new Pawn(BLACK), 2, 4);
	c.addPiece(new Bishop(WHITE), 2, 5);
	c.addPiece(new Pawn(BLACK), 3, 2);
	c.addPiece(new Knight(WHITE), 3, 4);
	c.addPiece(new Rook(BLACK), 4, 7);
	c.addPiece(new Bishop(WHITE), 5, 5);
	c.addPiece(new Pawn(WHITE), 6, 7);
	c.addPiece(new Queen(WHITE), 7, 1);
	c.addPiece(new King(WHITE), 7, 5);

	composition = new Composition(compositions.nextID++, c);
	compositions.problemTypes.checkmateInTwo.unsolvedProblems.push(composition);

	//23
	c = new Board();
	c.addPiece(new Knight(BLACK), 0, 2);
	c.addPiece(new King(BLACK), 0, 3);
	c.addPiece(new Rook(BLACK), 0, 5);
	c.addPiece(new Queen(BLACK), 0, 7);
	c.addPiece(new Pawn(BLACK), 2, 1);
	c.addPiece(new Bishop(BLACK), 2, 3);
	c.addPiece(new Knight(WHITE), 2, 5);
	c.addPiece(new Queen(WHITE), 4, 2);
	c.addPiece(new Knight(WHITE), 4, 3);
	c.addPiece(new Bishop(WHITE), 4, 7);
	c.addPiece(new King(WHITE), 6, 0);
	c.addPiece(new Rook(WHITE), 7, 4);
	
	composition = new Composition(compositions.nextID++, c);
	compositions.problemTypes.checkmateInTwo.unsolvedProblems.push(composition);

	//24
	c = new Board();
	c.addPiece(new Rook(BLACK), 1, 4);
	c.addPiece(new Pawn(BLACK), 1, 5);
	c.addPiece(new Pawn(BLACK), 2, 3);
	c.addPiece(new Knight(WHITE), 2, 5);
	c.addPiece(new King(BLACK), 3, 4);
	c.addPiece(new Queen(WHITE), 4, 0);
	c.addPiece(new Knight(WHITE), 4, 5);
	c.addPiece(new King(WHITE), 4, 6);
	c.addPiece(new Pawn(WHITE), 5, 3);
	c.addPiece(new Bishop(BLACK), 6, 1);
	c.addPiece(new Knight(BLACK), 6, 3);
	c.addPiece(new Bishop(WHITE), 7, 6);
	
	composition = new Composition(compositions.nextID++, c);
	compositions.problemTypes.checkmateInTwo.unsolvedProblems.push(composition);

	//26 
	c = new Board();
	c.addPiece(new Bishop(BLACK), 1, 6);
	c.addPiece(new King(BLACK), 2, 7);
	c.addPiece(new Pawn(BLACK), 3, 1);
	c.addPiece(new Pawn(BLACK), 3, 4);
	c.addPiece(new Rook(WHITE), 3, 6);
	c.addPiece(new Pawn(BLACK), 3, 7);
	c.addPiece(new Bishop(BLACK), 4, 0);
	c.addPiece(new Knight(BLACK), 4, 2);
	c.addPiece(new Queen(WHITE), 5, 4);
	c.addPiece(new Bishop(WHITE), 6, 2);
	c.addPiece(new Knight(WHITE), 6, 6);
	c.addPiece(new King(WHITE), 7, 7);
	
	composition = new Composition(compositions.nextID++, c);
	compositions.problemTypes.checkmateInTwo.unsolvedProblems.push(composition);

    //27 
	c = new Board();
	c.addPiece(new Knight(BLACK), 0, 5);
	c.addPiece(new Queen(WHITE), 1, 2);
	c.addPiece(new Pawn(BLACK), 1, 4);
	c.addPiece(new Pawn(BLACK), 2, 1);
	c.addPiece(new Rook(WHITE), 3, 1);
	c.addPiece(new Pawn(BLACK), 4, 0);
	c.addPiece(new King(BLACK), 4, 3);
	c.addPiece(new King(WHITE), 4, 6);
	c.addPiece(new Pawn(BLACK), 4, 7);
	c.addPiece(new Bishop(WHITE), 6, 2);
	c.addPiece(new Pawn(WHITE), 6, 5);
	
	composition = new Composition(compositions.nextID++, c);
	compositions.problemTypes.checkmateInTwo.unsolvedProblems.push(composition);

    //28
	c = new Board();
	c.addPiece(new Rook(WHITE), 0, 2);
	c.addPiece(new Bishop(BLACK), 2, 2);
	c.addPiece(new King(WHITE), 3, 0);
	c.addPiece(new King(BLACK), 3, 2);
	c.addPiece(new Queen(BLACK), 3, 3);
	c.addPiece(new Rook(WHITE), 3, 7);+
	c.addPiece(new Knight(WHITE), 4, 2);
	c.addPiece(new Pawn(BLACK), 5, 0);
	c.addPiece(new Pawn(BLACK), 5, 3);
	c.addPiece(new Bishop(WHITE), 6, 1);
	c.addPiece(new Queen(WHITE), 7, 2);
	
	composition = new Composition(compositions.nextID++, c);
	compositions.problemTypes.checkmateInTwo.unsolvedProblems.push(composition);

    //29
	c = new Board();
	c.addPiece(new Knight(WHITE), 0, 2);
	c.addPiece(new Rook(BLACK), 0, 7);
	c.addPiece(new Rook(BLACK), 1, 4);
	c.addPiece(new Pawn(BLACK), 2, 0);
	c.addPiece(new Pawn(BLACK), 2, 2);
	c.addPiece(new Pawn(BLACK), 2, 5);
	c.addPiece(new Pawn(BLACK), 2, 7);
	c.addPiece(new King(BLACK), 3, 2);
	c.addPiece(new Pawn(BLACK), 3, 3);
	c.addPiece(new Rook(WHITE), 4, 1);
	c.addPiece(new Knight(WHITE), 4, 5);
	c.addPiece(new King(WHITE), 4, 7);
	c.addPiece(new Pawn(WHITE), 5, 0);
	c.addPiece(new Queen(WHITE), 5, 3);
	c.addPiece(new Queen(BLACK), 7, 0);
	c.addPiece(new Bishop(BLACK), 7, 3);
	
	composition = new Composition(compositions.nextID++, c);
	compositions.problemTypes.checkmateInTwo.unsolvedProblems.push(composition);

	// 40
	c = new Board();
	c.addPiece(new King(WHITE), 0, 2);
	c.addPiece(new Knight(WHITE), 1, 3);
	c.addPiece(new Pawn(BLACK), 2, 0);
	c.addPiece(new King(BLACK), 2, 2);
	c.addPiece(new Pawn(BLACK), 2, 4);
	c.addPiece(new Knight(WHITE), 3, 5);
	c.addPiece(new Bishop(WHITE), 3, 7);
	c.addPiece(new Pawn(WHITE), 4, 2);
	c.addPiece(new Queen(WHITE), 4, 7);
	c.addPiece(new Rook(WHITE), 5, 1);
	c.addPiece(new Bishop(BLACK), 5, 4);
	c.addPiece(new Rook(BLACK), 6, 3);
	
	composition = new Composition(compositions.nextID++, c);
	compositions.problemTypes.checkmateInTwo.unsolvedProblems.push(composition);

	// =========================================================================================
	// checkmate in three problems
	// =========================================================================================

	// 1
	c = new Board();
	c.addPiece(new King(WHITE), 2, 3);
	c.addPiece(new Rook(WHITE), 3, 2);
	c.addPiece(new Pawn(WHITE), 5, 2);
	c.addPiece(new King(BLACK), 5, 3);
	c.addPiece(new Queen(WHITE), 6, 5);

	composition = new Composition(compositions.nextID++, c);
	compositions.problemTypes.checkmateInThree.unsolvedProblems.push(composition);
	
	// 2
	c = new Board();
	c.addPiece(new King(BLACK), 3, 5);
	c.addPiece(new Pawn(WHITE), 3, 6);
	c.addPiece(new Queen(WHITE), 5, 4);
	c.addPiece(new King(WHITE), 7, 0);
	c.addPiece(new Bishop(WHITE), 7, 3);

	composition = new Composition(compositions.nextID++, c);
	compositions.problemTypes.checkmateInThree.unsolvedProblems.push(composition);
	
	// 3 
	c = new Board();
	c.addPiece(new Bishop(WHITE), 1, 1);
	c.addPiece(new Pawn(BLACK), 1, 3);
	c.addPiece(new Queen(WHITE), 1, 5);
	c.addPiece(new Pawn(BLACK), 1, 6);
	c.addPiece(new Rook(WHITE), 2, 6);
	c.addPiece(new Pawn(BLACK), 3, 2);
	c.addPiece(new King(BLACK), 3, 4);
	c.addPiece(new Rook(BLACK), 4, 3);
	c.addPiece(new Pawn(BLACK), 4, 6);
	c.addPiece(new King(WHITE), 6, 0);
	c.addPiece(new Bishop(WHITE), 6, 1);

	composition = new Composition(compositions.nextID++, c);
	compositions.problemTypes.checkmateInFour.unsolvedProblems.push(composition);
	
	// 4
	c = new Board();
	c.addPiece(new King(WHITE), 0, 4);
	c.addPiece(new Knight(WHITE), 2, 2);
	c.addPiece(new Queen(WHITE), 3, 7);
	c.addPiece(new Knight(WHITE), 4, 0);
	c.addPiece(new King(BLACK), 4, 2);

	composition = new Composition(compositions.nextID++, c);
	compositions.problemTypes.checkmateInThree.unsolvedProblems.push(composition);

	// 5
	c = new Board();
	c.addPiece(new King(BLACK), 0, 0);
	c.addPiece(new Knight(WHITE), 0, 1);
	c.addPiece(new Bishop(WHITE), 4, 0);
	c.addPiece(new Knight(WHITE), 4, 2);
	c.addPiece(new Bishop(WHITE), 4, 3);
	c.addPiece(new Queen(WHITE), 5, 0);
	
	composition = new Composition(compositions.nextID++, c);
	compositions.problemTypes.checkmateInThree.unsolvedProblems.push(composition);
	
	// 6
	c = new Board();
	c.addPiece(new Rook(WHITE), 2, 2);
	c.addPiece(new Pawn(BLACK), 2, 3);
	c.addPiece(new Knight(WHITE),  2, 6);
	c.addPiece(new Bishop(WHITE), 5, 3);
	c.addPiece(new Pawn(BLACK), 3, 5);
	c.addPiece(new Pawn(WHITE), 3, 6);
	c.addPiece(new King(BLACK), 4, 4);
	c.addPiece(new King(WHITE), 5, 4);

	composition = new Composition(compositions.nextID++, c);
	compositions.problemTypes.checkmateInThree.unsolvedProblems.push(composition);

	// 7 
	c = new Board();
	c.addPiece(new Bishop(BLACK), 0, 0);
	c.addPiece(new Knight(WHITE), 2, 3);
	c.addPiece(new Bishop(WHITE), 2, 7);
	c.addPiece(new Pawn(WHITE), 3, 2);
	c.addPiece(new King(BLACK), 3, 3);
	c.addPiece(new Pawn(WHITE), 4, 0);
	c.addPiece(new Queen(WHITE), 5, 4);
	c.addPiece(new King(WHITE), 7, 6);

	composition = new Composition(compositions.nextID++, c);
	compositions.problemTypes.checkmateInThree.unsolvedProblems.push(composition);
			
	// 8 
	c = new Board();
	c.addPiece(new Knight(WHITE), 2, 3);
	c.addPiece(new King(BLACK), 3, 3);
	c.addPiece(new Bishop(BLACK), 3, 4);
	c.addPiece(new Queen(WHITE), 3, 5);
	c.addPiece(new Bishop(WHITE), 5, 0);
	c.addPiece(new Pawn(WHITE), 5, 5);
	c.addPiece(new Pawn(BLACK), 5, 7);
	c.addPiece(new King(WHITE), 7, 7);

	composition = new Composition(compositions.nextID++, c);
	compositions.problemTypes.checkmateInThree.unsolvedProblems.push(composition);

	// 20
	c = new Board();
	c.addPiece(new Bishop(WHITE), 0, 3);
	c.addPiece(new Bishop(WHITE), 0, 4);
	c.addPiece(new Bishop(BLACK), 1, 1);
	c.addPiece(new Rook(BLACK), 1, 4);
	c.addPiece(new Pawn(BLACK), 2, 0);
	c.addPiece(new Knight(BLACK), 2, 4);
	c.addPiece(new King(BLACK), 2, 4);
	c.addPiece(new King(WHITE), 2, 7);
	c.addPiece(new Pawn(BLACK), 3, 5);
	c.addPiece(new Knight(WHITE), 4, 2);
	c.addPiece(new Pawn(WHITE), 4, 5);
	c.addPiece(new Pawn(WHITE), 4, 7);
	c.addPiece(new Pawn(WHITE), 5, 2);
	c.addPiece(new Queen(WHITE), 6, 0);
	
	composition = new Composition(compositions.nextID++, c);
	compositions.problemTypes.checkmateInThree.unsolvedProblems.push(composition);

	// 30 
	c = new Board();
	c.addPiece(new Knight(WHITE), 0, 1);
	c.addPiece(new Queen(WHITE), 0, 6);
	c.addPiece(new Bishop(BLACK), 1, 2);
	c.addPiece(new Knight(BLACK), 1, 7);
	c.addPiece(new Pawn(BLACK), 2, 1);
	c.addPiece(new King(BLACK), 3, 2);
	c.addPiece(new Pawn(BLACK), 3, 3);
	c.addPiece(new Rook(BLACK), 3, 4);
	c.addPiece(new Pawn(WHITE), 4, 0);
	c.addPiece(new Pawn(WHITE), 5, 2);
	c.addPiece(new Knight(WHITE), 5, 4);
	c.addPiece(new King(WHITE), 6, 0);
	c.addPiece(new Pawn(WHITE), 6, 3);

	composition = new Composition(compositions.nextID++, c);
	compositions.problemTypes.checkmateInThree.unsolvedProblems.push(composition);
			
	// 11 
	c = new Board();
	c.addPiece(new Bishop(BLACK), 0, 7);
	c.addPiece(new Queen(WHITE), 2, 4);
	c.addPiece(new Pawn(BLACK), 3, 2);
	c.addPiece(new Pawn(BLACK), 3, 4);
	c.addPiece(new Rook(WHITE), 3, 6);
	c.addPiece(new King(BLACK), 4, 3);
	c.addPiece(new Rook(BLACK), 4, 5);
	c.addPiece(new Pawn(BLACK), 4, 6);
	c.addPiece(new Pawn(BLACK), 5, 5);
	c.addPiece(new Pawn(WHITE), 6, 3);
	c.addPiece(new King(WHITE), 7, 0);
	c.addPiece(new Bishop(WHITE), 7, 1);

	composition = new Composition(compositions.nextID++, c);
	compositions.problemTypes.checkmateInThree.unsolvedProblems.push(composition);
  	
  // 22
	c = new Board();
	c.addPiece(new Rook(WHITE), 1, 6);
	c.addPiece(new Knight(WHITE), 2, 1);
	c.addPiece(new Pawn(BLACK), 2, 2);
	c.addPiece(new Bishop(BLACK), 2, 4);
	c.addPiece(new King(WHITE), 3, 0);
	c.addPiece(new King(BLACK), 3, 2);
	c.addPiece(new Knight(BLACK), 4, 6);
	c.addPiece(new Rook(WHITE), 4, 7);
	c.addPiece(new Knight(BLACK), 5, 0);
	c.addPiece(new Queen(WHITE), 6, 4);
	c.addPiece(new Pawn(WHITE), 6, 5);
	
	composition = new Composition(compositions.nextID++, c);
	compositions.problemTypes.checkmateInThree.unsolvedProblems.push(composition);

  // 9
	c = new Board();
	c.addPiece(new Bishop(WHITE), 1, 1);
	c.addPiece(new Queen(WHITE), 1, 3);
	c.addPiece(new Pawn(BLACK), 3, 2);
	c.addPiece(new Knight(WHITE), 3, 6);
	c.addPiece(new Pawn(BLACK), 4, 2);
	c.addPiece(new King(BLACK), 4, 5);
	c.addPiece(new Bishop(BLACK), 5, 3);
	c.addPiece(new Bishop(WHITE), 6, 5);
	c.addPiece(new King(WHITE), 7, 2);
	
	composition = new Composition(compositions.nextID++, c);
	compositions.problemTypes.checkmateInThree.unsolvedProblems.push(composition);
  
  // 14
	c = new Board();
	c.addPiece(new Bishop(BLACK), 0, 0);
	c.addPiece(new Bishop(BLACK), 0, 1);
	c.addPiece(new Rook(BLACK), 0, 3);
	c.addPiece(new Rook(BLACK), 0, 7);
	c.addPiece(new Queen(WHITE), 1, 6);
	c.addPiece(new Pawn(BLACK), 2, 0);
	c.addPiece(new Pawn(BLACK), 2, 3);
	c.addPiece(new Knight(WHITE), 2, 5);
	c.addPiece(new Bishop(WHITE), 3, 0);
	c.addPiece(new Pawn(WHITE), 3, 3);
	c.addPiece(new Knight(WHITE), 3, 4);
	c.addPiece(new Rook(WHITE), 3, 7);
	c.addPiece(new King(BLACK), 4, 3);
	c.addPiece(new Pawn(BLACK), 4, 4);
	c.addPiece(new Pawn(WHITE), 5, 1);
	c.addPiece(new Pawn(BLACK), 5, 4);
	c.addPiece(new King(WHITE), 6, 4);
	
	composition = new Composition(compositions.nextID++, c);
	compositions.problemTypes.checkmateInThree.unsolvedProblems.push(composition);

	// 15 
	c = new Board();
	c.addPiece(new Knight(BLACK), 1, 2);
	c.addPiece(new Pawn(BLACK), 3, 0);
	c.addPiece(new Rook(WHITE), 3, 5);
	c.addPiece(new King(BLACK), 4, 0);
	c.addPiece(new Bishop(WHITE), 4, 2);
	c.addPiece(new Bishop(BLACK), 4, 3);
	c.addPiece(new Knight(WHITE), 4, 4);
	c.addPiece(new King(WHITE), 4, 6);
	c.addPiece(new Knight(BLACK), 5, 1);
	c.addPiece(new Knight(WHITE), 6, 2);
	
	composition = new Composition(compositions.nextID++, c);
	compositions.problemTypes.checkmateInThree.unsolvedProblems.push(composition);
	
	// 29
	c = new Board();
	c.addPiece(new Rook(WHITE), 0, 2);
	c.addPiece(new Queen(WHITE), 0, 4);
	c.addPiece(new Bishop(BLACK), 0, 7);
	c.addPiece(new Pawn(BLACK), 3, 3);
	c.addPiece(new King(WHITE), 4, 0);
	c.addPiece(new King(BLACK), 4, 3);
	c.addPiece(new Pawn(WHITE), 5, 6);
	c.addPiece(new Pawn(WHITE), 6, 1);
	c.addPiece(new Bishop(WHITE), 7, 5);
	
	composition = new Composition(compositions.nextID++, c);
	compositions.problemTypes.checkmateInThree.unsolvedProblems.push(composition);

	// 10
	c = new Board();
	c.addPiece(new Bishop(WHITE), 2, 1);
	c.addPiece(new Knight(WHITE), 2, 2);
	c.addPiece(new Pawn(WHITE), 3, 0);
	c.addPiece(new Pawn(BLACK), 3, 4);
	c.addPiece(new Pawn(BLACK), 3, 5);
	c.addPiece(new King(WHITE), 4, 2);
	c.addPiece(new King(BLACK), 4, 4);
	c.addPiece(new Bishop(BLACK), 4, 5);
	c.addPiece(new Pawn(WHITE), 4, 6);
	c.addPiece(new Queen(WHITE), 5, 0);
	c.addPiece(new Knight(BLACK), 7, 4);
	
	composition = new Composition(compositions.nextID++, c);
	compositions.problemTypes.checkmateInThree.unsolvedProblems.push(composition);

    // 11
	c = new Board();
	c.addPiece(new Bishop(BLACK), 0, 7);
	c.addPiece(new Rook(WHITE), 1, 1);
	c.addPiece(new King(WHITE), 2, 4);
	c.addPiece(new Knight(BLACK), 2, 7);
	c.addPiece(new Pawn(BLACK), 4, 0);
	c.addPiece(new Knight(WHITE), 4, 2);
	c.addPiece(new Pawn(BLACK), 4, 3);
	c.addPiece(new King(BLACK), 4, 4);
	c.addPiece(new Pawn(BLACK), 4, 7);
	c.addPiece(new Pawn(BLACK), 5, 0);
	c.addPiece(new Queen(WHITE), 6, 5);
	
	composition = new Composition(compositions.nextID++, c);
	compositions.problemTypes.checkmateInThree.unsolvedProblems.push(composition);

    // 27
	c = new Board();
	c.addPiece(new King(WHITE), 1, 4);
	c.addPiece(new Bishop(WHITE), 1, 7);
	c.addPiece(new Knight(BLACK), 3, 0);
	c.addPiece(new Pawn(BLACK), 3, 2);
	c.addPiece(new Pawn(BLACK), 3, 3);
	c.addPiece(new King(BLACK), 3, 4);
	c.addPiece(new Pawn(BLACK), 4, 5);
	c.addPiece(new Bishop(WHITE), 5, 0);
	c.addPiece(new Pawn(WHITE), 5, 2);
	c.addPiece(new Rook(WHITE), 5, 5);
	c.addPiece(new Knight(WHITE), 6, 2);
	c.addPiece(new Knight(WHITE), 6, 6);
	c.addPiece(new Knight(BLACK), 6, 7);
	
	composition = new Composition(compositions.nextID++, c);
	compositions.problemTypes.checkmateInThree.unsolvedProblems.push(composition);

    // 12
	c = new Board();
	c.addPiece(new Rook(WHITE), 2, 4);
	c.addPiece(new Knight(WHITE), 2, 6);
	c.addPiece(new King(WHITE), 3, 0);
	c.addPiece(new Pawn(WHITE), 3, 6);
	c.addPiece(new Pawn(WHITE), 4, 0);
	c.addPiece(new King(BLACK), 4, 2);
	c.addPiece(new Knight(WHITE), 5, 1);
	c.addPiece(new Pawn(BLACK), 5, 2);
	c.addPiece(new Bishop(WHITE), 6, 2);
	
	composition = new Composition(compositions.nextID++, c);
	compositions.problemTypes.checkmateInThree.unsolvedProblems.push(composition);

    // 18
	c = new Board();
	c.addPiece(new Bishop(BLACK), 0, 6);
	c.addPiece(new Rook(WHITE), 1, 3);
	c.addPiece(new Knight(BLACK), 1, 4);
	c.addPiece(new Bishop(WHITE), 2, 0);
	c.addPiece(new Pawn(WHITE), 2, 7);
	c.addPiece(new Rook(BLACK), 3, 1);
	c.addPiece(new King(BLACK), 4, 2);
	c.addPiece(new Pawn(BLACK), 4, 5);
	c.addPiece(new King(WHITE), 5, 0);
	c.addPiece(new Knight(WHITE), 5, 3);
	c.addPiece(new Pawn(WHITE), 5, 5);
	c.addPiece(new Queen(WHITE), 5, 7);
	c.addPiece(new Bishop(WHITE), 6, 3);
	
	composition = new Composition(compositions.nextID++, c);
	compositions.problemTypes.checkmateInThree.unsolvedProblems.push(composition);

    // 24
	c = new Board();
	c.addPiece(new Queen(BLACK), 0, 1);
	c.addPiece(new Rook(BLACK), 1, 3);
	c.addPiece(new Pawn(BLACK), 1, 5);
	c.addPiece(new Pawn(BLACK), 2, 1);
	c.addPiece(new King(WHITE), 3, 1);
	c.addPiece(new King(BLACK), 3, 3);
	c.addPiece(new Bishop(BLACK), 3, 4);
	c.addPiece(new Knight(WHITE), 3, 5);
	c.addPiece(new Bishop(WHITE), 5, 3);
	c.addPiece(new Knight(WHITE), 6, 4);
	c.addPiece(new Queen(WHITE), 6, 5);
	
	composition = new Composition(compositions.nextID++, c);
	compositions.problemTypes.checkmateInThree.unsolvedProblems.push(composition);

    // 16
	c = new Board();
	c.addPiece(new Rook(BLACK), 0, 3);
	c.addPiece(new Rook(BLACK), 2, 1);
	c.addPiece(new Bishop(BLACK), 2, 3);
	c.addPiece(new Queen(WHITE), 2, 7);
	c.addPiece(new Pawn(BLACK), 4, 1);
	c.addPiece(new Bishop(WHITE), 4, 2);
	c.addPiece(new King(BLACK), 4, 3);
	c.addPiece(new Knight(BLACK), 4, 5);
	c.addPiece(new King(WHITE), 5, 1);
	c.addPiece(new Knight(WHITE), 5, 6);
	c.addPiece(new Rook(WHITE), 7, 4);
	
	composition = new Composition(compositions.nextID++, c);
	compositions.problemTypes.checkmateInThree.unsolvedProblems.push(composition);

    // 13
	c = new Board();
	c.addPiece(new Bishop(WHITE), 1, 2);
	c.addPiece(new Pawn(BLACK), 2, 3);
	c.addPiece(new King(WHITE), 2, 5);
	c.addPiece(new Pawn(BLACK), 3, 0);
	c.addPiece(new King(BLACK), 3, 3);
	c.addPiece(new Knight(WHITE), 4, 3);
	c.addPiece(new Queen(WHITE), 4, 6);
	c.addPiece(new Pawn(WHITE), 5, 5);
	c.addPiece(new Pawn(WHITE), 6, 2);
	
	composition = new Composition(compositions.nextID++, c);
	compositions.problemTypes.checkmateInThree.unsolvedProblems.push(composition);

    // 25
	c = new Board();
	c.addPiece(new Bishop(WHITE), 0, 4);
	c.addPiece(new Pawn(BLACK), 1, 7);
	c.addPiece(new Pawn(WHITE), 2, 7);
	c.addPiece(new Pawn(BLACK), 3, 3);
	c.addPiece(new King(BLACK), 4, 4);
	c.addPiece(new Bishop(BLACK), 4, 5);
	c.addPiece(new Rook(WHITE), 4, 7);
	c.addPiece(new Queen(WHITE), 5, 2);
	c.addPiece(new Knight(WHITE), 5, 4);
	c.addPiece(new Pawn(WHITE), 6, 6);
	c.addPiece(new King(WHITE), 7, 0);
	
	composition = new Composition(compositions.nextID++, c);
	compositions.problemTypes.checkmateInThree.unsolvedProblems.push(composition);

    // 26
	c = new Board();
	c.addPiece(new Knight(WHITE), 1, 3);
	c.addPiece(new Pawn(BLACK), 2, 1);
	c.addPiece(new Knight(WHITE), 3, 1);
	c.addPiece(new King(BLACK), 3, 3);
	c.addPiece(new Pawn(BLACK), 4, 6);
	c.addPiece(new King(WHITE), 5, 6);
	c.addPiece(new Pawn(WHITE), 6, 6);
	c.addPiece(new Rook(WHITE), 7, 0);
	c.addPiece(new Queen(WHITE), 7, 7);
	
	composition = new Composition(compositions.nextID++, c);
	compositions.problemTypes.checkmateInThree.unsolvedProblems.push(composition);

    // 28
	c = new Board();
	c.addPiece(new Rook(WHITE), 0, 5);
	c.addPiece(new Pawn(BLACK), 1, 3);
	c.addPiece(new Pawn(BLACK), 3, 2);
	c.addPiece(new Bishop(WHITE), 3, 3);
	c.addPiece(new Bishop(BLACK), 3, 5);
	c.addPiece(new Pawn(WHITE), 4, 2);
	c.addPiece(new King(BLACK), 4, 5);
	c.addPiece(new King(WHITE), 6, 0);
	c.addPiece(new Bishop(WHITE), 6, 1);
	c.addPiece(new Pawn(WHITE), 6, 3);
	c.addPiece(new Rook(WHITE), 7, 6);
	
	composition = new Composition(compositions.nextID++, c);
	compositions.problemTypes.checkmateInThree.unsolvedProblems.push(composition);

    // 15
	c = new Board();
	c.addPiece(new Pawn(BLACK), 1, 2);
	c.addPiece(new Pawn(BLACK), 1, 6);
	c.addPiece(new Rook(WHITE), 2, 4);
	c.addPiece(new Pawn(WHITE), 2, 6);
	c.addPiece(new Pawn(WHITE), 3, 2);
	c.addPiece(new Pawn(BLACK), 3, 5);
	c.addPiece(new King(WHITE), 4, 1);
	c.addPiece(new King(BLACK), 4, 3);
	c.addPiece(new Pawn(BLACK), 4, 5);
	c.addPiece(new Pawn(WHITE), 5, 3);
	c.addPiece(new Bishop(WHITE), 6, 6);
	c.addPiece(new Knight(WHITE), 7, 4);
	
	composition = new Composition(compositions.nextID++, c);
	compositions.problemTypes.checkmateInThree.unsolvedProblems.push(composition);

    // 17
	c = new Board();
	c.addPiece(new Knight(WHITE), 0, 5);
	c.addPiece(new Pawn(BLACK), 2, 3);
	c.addPiece(new Knight(WHITE), 3, 3);
	c.addPiece(new Pawn(BLACK), 3, 4);
	c.addPiece(new Pawn(BLACK), 3, 5);
	c.addPiece(new King(WHITE), 4, 2);
	c.addPiece(new Pawn(WHITE), 4, 3);
	c.addPiece(new King(BLACK), 4, 4);
	c.addPiece(new Bishop(WHITE), 5, 4);
	c.addPiece(new Knight(BLACK), 5, 5);
	c.addPiece(new Bishop(WHITE), 6, 6);
	
	composition = new Composition(compositions.nextID++, c);
	compositions.problemTypes.checkmateInThree.unsolvedProblems.push(composition);

    // 30
	c = new Board();
	c.addPiece(new Bishop(WHITE), 0, 1);
	c.addPiece(new Rook(BLACK), 1, 2);
	c.addPiece(new King(BLACK), 2, 3);
	c.addPiece(new Pawn(WHITE), 2, 5);
	c.addPiece(new Knight(WHITE), 2, 7);
	c.addPiece(new Pawn(BLACK), 3, 6);
	c.addPiece(new Bishop(BLACK), 3, 7);
	c.addPiece(new Pawn(BLACK), 4, 2);
	c.addPiece(new Queen(WHITE), 4, 4);
	c.addPiece(new King(WHITE), 5, 2);
	c.addPiece(new Pawn(BLACK), 5, 3);
	c.addPiece(new Pawn(BLACK), 5, 4);
	
	composition = new Composition(compositions.nextID++, c);
	compositions.problemTypes.checkmateInThree.unsolvedProblems.push(composition);

    // 23
	c = new Board();
	c.addPiece(new Pawn(BLACK), 2, 3);
	c.addPiece(new King(WHITE), 2, 5);
	c.addPiece(new Pawn(BLACK), 3, 2);
	c.addPiece(new King(BLACK), 3, 3);
	c.addPiece(new Bishop(WHITE), 4, 0);
	c.addPiece(new Pawn(WHITE), 5, 2);
	c.addPiece(new Knight(WHITE), 5, 3);
	c.addPiece(new Pawn(BLACK), 5, 4);
	c.addPiece(new Bishop(BLACK), 5, 7);
	c.addPiece(new Rook(WHITE), 6, 3);
	c.addPiece(new Knight(WHITE), 7, 3);
	
	composition = new Composition(compositions.nextID++, c);
	compositions.problemTypes.checkmateInThree.unsolvedProblems.push(composition);

    // 76
	c = new Board();
	c.addPiece(new Knight(BLACK), 0, 7);
	c.addPiece(new Knight(WHITE), 1, 1);
	c.addPiece(new Pawn(BLACK), 1, 2);
	c.addPiece(new Pawn(WHITE), 2, 2);
	c.addPiece(new Bishop(WHITE), 3, 2);
	c.addPiece(new King(BLACK), 3, 3);
	c.addPiece(new Pawn(WHITE), 3, 5);
	c.addPiece(new Pawn(BLACK), 4, 4);
	c.addPiece(new King(WHITE), 5, 4);
	c.addPiece(new Pawn(BLACK), 5, 7);
	c.addPiece(new Queen(WHITE), 7, 6);
	
	composition = new Composition(compositions.nextID++, c);
	compositions.problemTypes.checkmateInThree.unsolvedProblems.push(composition);

    // 77
	c = new Board();
	c.addPiece(new Rook(BLACK), 0, 5);
	c.addPiece(new Bishop(BLACK), 2, 3);
	c.addPiece(new Bishop(WHITE), 3, 1);
	c.addPiece(new Pawn(WHITE), 3, 3);
	c.addPiece(new King(BLACK), 3, 4);
	c.addPiece(new Knight(WHITE), 4, 7);
	c.addPiece(new Rook(WHITE), 5, 2);
	c.addPiece(new Pawn(WHITE), 5, 4);
	c.addPiece(new Bishop(WHITE), 6, 1);
	c.addPiece(new King(WHITE), 6, 4);
	c.addPiece(new Knight(BLACK), 6, 5);
	
	composition = new Composition(compositions.nextID++, c);
	compositions.problemTypes.checkmateInThree.unsolvedProblems.push(composition);

    // 78
	c = new Board();
	c.addPiece(new Bishop(BLACK), 1, 2);
	c.addPiece(new Rook(BLACK), 1, 7);
	c.addPiece(new King(WHITE), 2, 0);
	c.addPiece(new Pawn(BLACK), 2, 2);
	c.addPiece(new Pawn(BLACK), 2, 4);
	c.addPiece(new Knight(WHITE), 2, 5);
	c.addPiece(new King(BLACK), 3, 4);
	c.addPiece(new Pawn(BLACK), 3, 6);
	c.addPiece(new Pawn(BLACK), 3, 7);
	c.addPiece(new Pawn(WHITE), 5, 2);
	c.addPiece(new Rook(WHITE), 5, 3);
	c.addPiece(new Bishop(WHITE), 6, 0);
	c.addPiece(new Queen(WHITE), 6, 5);
	c.addPiece(new Knight(BLACK), 7, 5);
	
	composition = new Composition(compositions.nextID++, c);
	compositions.problemTypes.checkmateInThree.unsolvedProblems.push(composition);

    // 79
	c = new Board();
	c.addPiece(new Rook(WHITE), 1, 1);
	c.addPiece(new Pawn(BLACK), 2, 2);
	c.addPiece(new King(BLACK), 2, 3);
	c.addPiece(new Pawn(BLACK), 3, 1);
	c.addPiece(new Rook(WHITE), 3, 7);
	c.addPiece(new Pawn(WHITE), 4, 6);
	c.addPiece(new Pawn(WHITE), 5, 0);
	c.addPiece(new Bishop(WHITE), 5, 1);
	c.addPiece(new Knight(WHITE), 5, 4);
	c.addPiece(new King(WHITE), 7, 7); 
	
	composition = new Composition(compositions.nextID++, c);
	compositions.problemTypes.checkmateInThree.unsolvedProblems.push(composition);

    // 80
	c = new Board();
	c.addPiece(new Knight(WHITE), 0, 1);
	c.addPiece(new King(WHITE), 0, 3);
	c.addPiece(new Knight(BLACK), 2, 1);
	c.addPiece(new Pawn(BLACK), 2, 5);
	c.addPiece(new Rook(BLACK), 3, 0);
	c.addPiece(new King(BLACK), 3, 2);
	c.addPiece(new Bishop(BLACK), 3, 3);
	c.addPiece(new Pawn(WHITE), 3, 5);
	c.addPiece(new Pawn(BLACK), 4, 0);
	c.addPiece(new Pawn(BLACK), 4, 2);
	c.addPiece(new Knight(WHITE), 5, 0);
	c.addPiece(new Pawn(WHITE), 5, 2);
	c.addPiece(new Pawn(WHITE), 5, 4);
	c.addPiece(new Queen(WHITE), 6, 3);
	
	composition = new Composition(compositions.nextID++, c);
	compositions.problemTypes.checkmateInThree.unsolvedProblems.push(composition);

    // 81
	c = new Board();
	c.addPiece(new Bishop(BLACK), 0, 0);
	c.addPiece(new Knight(WHITE), 0, 2);
	c.addPiece(new Knight(BLACK), 0, 7);
	c.addPiece(new Queen(WHITE), 1, 0);
	c.addPiece(new Pawn(BLACK), 1, 2);
	c.addPiece(new Pawn(BLACK), 1, 3);
	c.addPiece(new Knight(WHITE), 3, 0);
	c.addPiece(new King(BLACK), 3, 3);
	c.addPiece(new King(WHITE), 3, 5);
	c.addPiece(new Pawn(WHITE), 5, 1);
	c.addPiece(new Knight(BLACK), 6, 5);
	
	composition = new Composition(compositions.nextID++, c);
	compositions.problemTypes.checkmateInThree.unsolvedProblems.push(composition);

	// 82
	c = new Board();
	c.addPiece(new Bishop(BLACK), 0, 1);
	c.addPiece(new Rook(WHITE), 1, 4);
	c.addPiece(new Knight(BLACK), 1, 5);
	c.addPiece(new Pawn(BLACK), 2, 2);
	c.addPiece(new Bishop(BLACK), 3, 3);
	c.addPiece(new Pawn(BLACK), 3, 6);
	c.addPiece(new Pawn(WHITE), 4, 0);
	c.addPiece(new Pawn(BLACK), 4, 1);
	c.addPiece(new King(BLACK), 4, 2);
	c.addPiece(new Knight(WHITE), 4, 3);
	c.addPiece(new Pawn(Pawn), 4, 6);
	c.addPiece(new Knight(WHITE), 5, 1);
	c.addPiece(new Pawn(BLACK), 5, 4);
	c.addPiece(new King(WHITE), 6, 0);
	c.addPiece(new King(WHITE), 6, 1);
	c.addPiece(new Pawn(WHITE), 6, 4);
	
	composition = new Composition(compositions.nextID++, c);
	compositions.problemTypes.checkmateInThree.unsolvedProblems.push(composition);

    // 83
	c = new Board();
	c.addPiece(new Knight(WHITE), 0, 2);
	c.addPiece(new Bishop(BLACK), 0, 4);
	c.addPiece(new Queen(WHITE), 1, 0);
	c.addPiece(new Pawn(BLACK), 1, 5);
	c.addPiece(new King(BLACK), 3, 4);
	c.addPiece(new Knight(WHITE), 3, 6);
	c.addPiece(new Pawn(BLACK), 3, 7);
	c.addPiece(new Pawn(WHITE), 4, 4);
	c.addPiece(new King(WHITE), 5, 5);
	c.addPiece(new Knight(BLACK), 6, 1);
	
	composition = new Composition(compositions.nextID++, c);
	compositions.problemTypes.checkmateInThree.unsolvedProblems.push(composition);

    // 40
	c = new Board();
	c.addPiece(new Rook(BLACK), 0, 1);
	c.addPiece(new Pawn(BLACK), 1, 4);
	c.addPiece(new Bishop(WHITE), 1, 5);
	c.addPiece(new Pawn(BLACK), 1, 7);
	c.addPiece(new Knight(WHITE), 2, 4);
	c.addPiece(new Pawn(BLACK), 2, 5);
	c.addPiece(new King(BLACK), 2, 7);
	c.addPiece(new Queen(WHITE), 3, 3);
	c.addPiece(new Pawn(BLACK), 3, 6);
	c.addPiece(new Knight(BLACK), 5, 0);
	c.addPiece(new Pawn(WHITE), 5, 5);
	c.addPiece(new Knight(WHITE), 7, 5);
	c.addPiece(new King(WHITE), 7, 7);
	
	composition = new Composition(compositions.nextID++, c);
	compositions.problemTypes.checkmateInThree.unsolvedProblems.push(composition);

    // 41
	c = new Board();
	c.addPiece(new Rook(BLACK), 1, 3);
	c.addPiece(new Pawn(BLACK), 2, 0);
	c.addPiece(new Rook(BLACK), 2, 4);
	c.addPiece(new Knight(WHITE), 2, 7);
	c.addPiece(new Knight(WHITE), 3, 4);
	c.addPiece(new Pawn(BLACK), 3, 6);
	c.addPiece(new Pawn(BLACK), 3, 7);
	c.addPiece(new King(BLACK), 4, 5);
	c.addPiece(new Queen(WHITE), 5, 0);
	c.addPiece(new Pawn(BLACK), 5, 3);
	c.addPiece(new Pawn(WHITE), 5, 7);
	c.addPiece(new Pawn(WHITE), 6, 5);
	c.addPiece(new King(WHITE), 7, 0);
	c.addPiece(new Bishop(WHITE), 7, 7);
	
	composition = new Composition(compositions.nextID++, c);
	compositions.problemTypes.checkmateInThree.unsolvedProblems.push(composition);

    // 42
    c = new Board();
    c.addPiece(new Rook(BLACK), 1, 5);
    c.addPiece(new Rook(BLACK), 1, 7);
    c.addPiece(new Knight(WHITE), 2, 1);
    c.addPiece(new Pawn(BLACK), 2, 2);
    c.addPiece(new Rook(WHITE), 2, 3);
    c.addPiece(new Pawn(WHITE), 3, 0);
    c.addPiece(new King(BLACK), 3, 2);
    c.addPiece(new Bishop(BLACK), 3, 4)
    c.addPiece(new Knight(BLACK), 3, 7);
    c.addPiece(new Pawn(WHITE), 4, 0);
    c.addPiece(new Rook(WHITE), 4, 3);
    c.addPiece(new Knight(BLACK), 4, 5);
    c.addPiece(new Pawn(BLACK), 5, 2);
    c.addPiece(new Pawn(WHITE), 5, 5);
    c.addPiece(new Bishop(WHITE), 6, 7); 
    c.addPiece(new King(WHITE), 7, 0);
    c.addPiece(new Knight(WHITE), 7, 4);
    
    composition = new Composition(compositions.nextID++, c);
    compositions.problemTypes.checkmateInThree.unsolvedProblems.push(composition);

    // 43
  	c = new Board();
	c.addPiece(new Bishop(WHITE), 0, 0);
	c.addPiece(new Knight(WHITE), 0, 2);
	c.addPiece(new Knight(BLACK), 1, 7);
	c.addPiece(new Queen(WHITE), 2, 0);
	c.addPiece(new Pawn(WHITE), 2, 7);
	c.addPiece(new Pawn(BLACK), 3, 5);
	c.addPiece(new Knight(BLACK), 3, 7);
	c.addPiece(new Knight(WHITE), 4, 2);
	c.addPiece(new Bishop(BLACK), 4, 4);
	c.addPiece(new King(BLACK), 4, 5);
	c.addPiece(new King(WHITE), 4, 7);
	c.addPiece(new Pawn(WHITE), 5, 1);
	c.addPiece(new Pawn(WHITE), 6, 3);
	
	composition = new Composition(compositions.nextID++, c);
	compositions.problemTypes.checkmateInThree.unsolvedProblems.push(composition);

	// =========================================================================================
	// checkmate in four problems
	// =========================================================================================
	// 1
	c = new Board();
	c.addPiece(new Pawn(BLACK), 2, 4);
	c.addPiece(new Pawn(WHITE), 3, 1);
	c.addPiece(new Pawn(BLACK), 3, 3);
	c.addPiece(new King(WHITE), 4, 1);
	c.addPiece(new King(BLACK), 4, 3);
	c.addPiece(new Bishop(WHITE), 4, 4);
	c.addPiece(new Knight(WHITE), 5, 3);
	c.addPiece(new Rook(WHITE), 7, 4);

	composition = new Composition(compositions.nextID++, c);
	compositions.problemTypes.checkmateInFour.unsolvedProblems.push(composition);
	
	// 26
	c = new Board();
	c.addPiece(new Knight(WHITE), 0, 4);
	c.addPiece(new Bishop(WHITE), 0, 7);
	c.addPiece(new Knight(BLACK), 1, 1);
	c.addPiece(new Rook(BLACK), 2, 0);
	c.addPiece(new Bishop(BLACK), 2, 1);
	c.addPiece(new Pawn(BLACK), 2, 2);
	c.addPiece(new Knight(BLACK), 2, 4);
	c.addPiece(new King(WHITE), 2, 7);
	c.addPiece(new Rook(BLACK), 3, 0);
	c.addPiece(new Pawn(BLACK), 3, 4);
	c.addPiece(new King(BLACK), 3, 5);
	c.addPiece(new Pawn(BLACK), 3, 6);
	c.addPiece(new Knight(WHITE), 4, 6);
	c.addPiece(new Pawn(WHITE), 5, 5);
	c.addPiece(new Pawn(WHITE), 5, 6);
	c.addPiece(new Pawn(WHITE), 5, 7);
	c.addPiece(new Queen(BLACK), 7, 1);
	c.addPiece(new Bishop(BLACK), 7, 3);
	c.addPiece(new Queen(WHITE), 7, 4);

	composition = new Composition(compositions.nextID++, c);
	compositions.problemTypes.checkmateInFour.unsolvedProblems.push(composition);
	
	// 3 
	c = new Board();
	c.addPiece(new Queen(WHITE), 0, 5);
	c.addPiece(new Pawn(BLACK), 1, 0);
	c.addPiece(new Pawn(WHITE), 2, 0);
	c.addPiece(new Pawn(BLACK), 2, 3);
	c.addPiece(new King(BLACK), 2, 4);
	c.addPiece(new Pawn(BLACK), 3, 3);
	c.addPiece(new Knight(WHITE), 5, 2);
	c.addPiece(new Knight(WHITE), 5, 3);
	c.addPiece(new Pawn(BLACK), 5, 6);
	c.addPiece(new Pawn(WHITE), 6, 6);
	c.addPiece(new King(WHITE), 7, 7);

	composition = new Composition(compositions.nextID++, c);
	compositions.problemTypes.checkmateInFour.unsolvedProblems.push(composition);
	
	// 4
	c = new Board();
	c.addPiece(new King(BLACK), 0, 4);
	c.addPiece(new King(WHITE), 0, 7);
	c.addPiece(new Bishop(BLACK), 1, 1);
	c.addPiece(new Bishop(BLACK), 1, 4);
	c.addPiece(new Pawn(BLACK), 1, 6);
	c.addPiece(new Knight(WHITE), 3, 2);
	c.addPiece(new Bishop(WHITE), 5, 3);
	c.addPiece(new Rook(WHITE), 7, 4);
	c.addPiece(new Rook(WHITE), 7, 5);

	composition = new Composition(compositions.nextID++, c);
	compositions.problemTypes.checkmateInFour.unsolvedProblems.push(composition);
	
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
	
	composition = new Composition(compositions.nextID++, c);
	compositions.problemTypes.checkmateInFour.unsolvedProblems.push(composition);
 
	 // 6
	 c = new Board();
	 c.addPiece(new Knight(WHITE), 0, 5);
	 c.addPiece(new Bishop(WHITE), 1, 1);
	 c.addPiece(new Knight(BLACK), 1, 3);
	 c.addPiece(new Bishop(BLACK), 1, 4);
	 c.addPiece(new Bishop(BLACK), 1, 5);
	 c.addPiece(new Knight(WHITE), 1, 6);
	 c.addPiece(new Pawn(WHITE), 2, 2);
	 c.addPiece(new King(BLACK), 2, 3);
	 c.addPiece(new Pawn(BLACK), 3, 4);
	 c.addPiece(new Pawn(BLACK), 4, 2);
	 c.addPiece(new Queen(WHITE), 5, 5);
	 c.addPiece(new Queen(BLACK), 6, 0);
	 c.addPiece(new Bishop(WHITE), 7, 6);
	 c.addPiece(new King(WHITE), 7, 7);
	 composition = new Composition(compositions.nextID++, c);
	 compositions.problemTypes.checkmateInFour.unsolvedProblems.push(composition);
	 
	 // 7
	 c = new Board();
	 c.addPiece(new King(WHITE), 1, 4);
	 c.addPiece(new Knight(BLACK), 2, 0);
	 c.addPiece(new Knight(WHITE), 2, 5);
	 c.addPiece(new Pawn(BLACK), 2, 6);
	 c.addPiece(new Pawn(BLACK), 3, 2);
	 c.addPiece(new King(BLACK), 3, 4);
	 c.addPiece(new Pawn(BLACK), 4, 1);
	 c.addPiece(new Pawn(WHITE), 4, 6);
	 c.addPiece(new Bishop(WHITE), 5, 4);
	 c.addPiece(new Bishop(BLACK), 5, 6);
	 c.addPiece(new Bishop(BLACK), 6, 0);
	 c.addPiece(new Pawn(WHITE), 6, 1);
	 c.addPiece(new Knight(WHITE), 6, 2);
	 c.addPiece(new Rook(WHITE), 7, 5);
	 composition = new Composition(compositions.nextID++, c);
	 compositions.problemTypes.checkmateInFour.unsolvedProblems.push(composition);
 
	 // 8
	 c = new Board();
	 c.addPiece(new Pawn(BLACK), 2, 6);
	 c.addPiece(new Knight(WHITE), 3, 2);
	 c.addPiece(new Pawn(BLACK), 3, 4);
	 c.addPiece(new Pawn(BLACK), 3, 5);
	 c.addPiece(new King(WHITE), 3, 6);
	 c.addPiece(new Rook(WHITE), 5, 3);
	 c.addPiece(new Knight(BLACK), 5, 4);
	 c.addPiece(new King(BLACK), 5, 5);
	 c.addPiece(new Rook(WHITE), 6, 0);
	 c.addPiece(new Pawn(WHITE), 6, 7);
	 composition = new Composition(compositions.nextID++, c);
	 compositions.problemTypes.checkmateInFour.unsolvedProblems.push(composition);
 
	 // 9
	 c = new Board();
	 c.addPiece(new Rook(BLACK), 0, 6);
	 c.addPiece(new Knight(WHITE), 1, 3);
	 c.addPiece(new Pawn(BLACK), 1, 4);
	 c.addPiece(new Knight(BLACK), 2, 1);
	 c.addPiece(new Pawn(BLACK), 2, 2);
	 c.addPiece(new King(BLACK), 4, 3);
	 c.addPiece(new Pawn(WHITE), 4, 4);
	 c.addPiece(new Knight(WHITE), 4, 6);
	 c.addPiece(new Pawn(BLACK), 5, 0);
	 c.addPiece(new King(WHITE), 5, 5);
	 c.addPiece(new Pawn(WHITE), 6, 0);
	 c.addPiece(new Queen(WHITE), 6, 2);
	
	 composition = new Composition(compositions.nextID++, c);
   	 compositions.problemTypes.checkmateInFour.unsolvedProblems.push(composition);

	 // 10 
	 c = new Board();
	 c.addPiece(new Bishop(BLACK), 0, 5);
	 c.addPiece(new Pawn(BLACK), 1, 7);
	 c.addPiece(new Rook(BLACK), 2, 2);
	 c.addPiece(new Rook(BLACK), 2, 3);
	 c.addPiece(new Bishop(WHITE), 3, 0);
	 c.addPiece(new Knight(WHITE), 3, 4);
	 c.addPiece(new King(WHITE), 4, 3);
	 c.addPiece(new Knight(WHITE), 4, 5);
	 c.addPiece(new Queen(WHITE), 4, 7);
	 c.addPiece(new Pawn(WHITE), 5, 3);
	 c.addPiece(new Pawn(BLACK), 5, 5);
	 c.addPiece(new King(WHITE), 6, 0);
	 c.addPiece(new Pawn(WHITE), 6, 1);
	 c.addPiece(new Pawn(WHITE), 6, 5);
	 c.addPiece(new Bishop(BLACK), 7, 7);
	
	 composition = new Composition(compositions.nextID++, c);
	 compositions.problemTypes.checkmateInFour.unsolvedProblems.push(composition);

	 // 15
	 c = new Board();
	 c.addPiece(new Queen(BLACK), 0, 0);
	 c.addPiece(new King(BLACK), 0, 4);
	 c.addPiece(new King(WHITE), 0, 6);
	 c.addPiece(new Rook(WHITE), 1, 3);
	 c.addPiece(new Pawn(BLACK), 1, 4);
	 c.addPiece(new Knight(WHITE), 2, 2);
	 c.addPiece(new Bishop(BLACK), 2, 5);
	 c.addPiece(new Bishop(WHITE), 3, 1);
	 c.addPiece(new Knight(BLACK), 5, 6);
	
	 composition = new Composition(compositions.nextID++, c);
	 compositions.problemTypes.checkmateInFour.unsolvedProblems.push(composition);
	
	 // 14 multiple solutions
	 c = new Board();
	 c.addPiece(new Knight(WHITE), 0, 0);
	 c.addPiece(new Knight(BLACK), 0, 3);
	 c.addPiece(new Knight(BLACK), 0, 4);
	 c.addPiece(new Rook(BLACK), 0, 5);
	 c.addPiece(new Pawn(BLACK), 1, 0);
	 c.addPiece(new Rook(WHITE), 1, 2);
	 c.addPiece(new Bishop(WHITE), 1, 5);
	 c.addPiece(new Pawn(BLACK), 2, 1);
	 c.addPiece(new Pawn(BLACK), 2, 5);
	 c.addPiece(new Queen(WHITE), 2, 7);
	 c.addPiece(new Bishop(BLACK), 3, 2);
	 c.addPiece(new Queen(BLACK), 3, 3);
	 c.addPiece(new King(BLACK), 4, 2);
	 c.addPiece(new Knight(WHITE), 4, 3);
	 c.addPiece(new Pawn(WHITE), 5, 2);
	 c.addPiece(new King(WHITE), 6, 3);
	
	 composition = new Composition(compositions.nextID++, c);
	 compositions.problemTypes.checkmateInFour.unsolvedProblems.push(composition);
	
	 // 19 
	 c = new Board();
	 c.addPiece(new Rook(WHITE), 1, 2);
	 c.addPiece(new Bishop(WHITE), 2, 1);
	 c.addPiece(new King(BLACK), 2, 3);
	 c.addPiece(new Pawn(BLACK), 3, 2);
	 c.addPiece(new Pawn(WHITE), 3, 5);
	 c.addPiece(new Pawn(WHITE), 3, 6);
	 c.addPiece(new Pawn(BLACK), 4, 2);
	 c.addPiece(new Bishop(WHITE), 4, 4);
	 c.addPiece(new Knight(WHITE), 5, 2);
	 c.addPiece(new Pawn(BLACK), 5, 5);
	 c.addPiece(new Pawn(WHITE), 6, 5);
	 c.addPiece(new King(WHITE), 7, 7);
	
	 composition = new Composition(compositions.nextID++, c);
	 compositions.problemTypes.checkmateInFour.unsolvedProblems.push(composition);
	
	 // 33
	 c = new Board();
	 c.addPiece(new Rook(BLACK), 0, 1);
	 c.addPiece(new Bishop(BLACK), 0, 3);
	 c.addPiece(new Queen(WHITE), 0, 6);
	 c.addPiece(new Knight(WHITE), 1, 3);
	 c.addPiece(new Pawn(BLACK), 2, 1);
	 c.addPiece(new Pawn(BLACK), 2, 5);
	 c.addPiece(new Knight(WHITE), 4, 0);
	 c.addPiece(new Pawn(BLACK), 4, 2);
	 c.addPiece(new King(BLACK), 4, 3);
	 c.addPiece(new Bishop(BLACK), 5, 5);
	 c.addPiece(new King(WHITE), 6, 7);
	 c.addPiece(new Bishop(WHITE), 7, 1);
	 c.addPiece(new Rook(WHITE), 7, 4);
	
	 composition = new Composition(compositions.nextID++, c);
	   compositions.problemTypes.checkmateInFour.unsolvedProblems.push(composition);
	
	 // 27
	 c = new Board();
	 c.addPiece(new Knight(BLACK), 0, 7);
	 c.addPiece(new Bishop(WHITE), 1, 1);
	 c.addPiece(new Bishop(BLACK), 1, 3);
	 c.addPiece(new Knight(WHITE), 1, 4);
	 c.addPiece(new Pawn(BLACK),  2, 3);
	 c.addPiece(new Pawn(BLACK), 2, 5);
	 c.addPiece(new Pawn(BLACK), 3, 2);
	 c.addPiece(new Rook(WHITE), 3, 3);
	 c.addPiece(new Pawn(WHITE), 3, 7);
	 c.addPiece(new Bishop(BLACK), 4, 1);
	 c.addPiece(new Knight(BLACK), 4, 4);
	 c.addPiece(new King(BLACK), 4, 5);
	 c.addPiece(new King(WHITE), 4, 7);
	 c.addPiece(new Pawn(BLACK), 5, 2);
	 c.addPiece(new Rook(WHITE), 5, 3);
	 c.addPiece(new Pawn(BLACK), 5, 5);
	 c.addPiece(new Pawn(BLACK), 5, 6);
	 c.addPiece(new Pawn(BLACK), 5, 7);
	 c.addPiece(new Queen(WHITE), 6, 0);
	 c.addPiece(new Rook(BLACK), 6, 7);
	
	 composition = new Composition(compositions.nextID++, c);
	   compositions.problemTypes.checkmateInFour.unsolvedProblems.push(composition);
	
	 // 21
	 c = new Board();
	 c.addPiece(new Bishop(BLACK), 2, 1);
	 c.addPiece(new Rook(BLACK), 3, 5);
	 c.addPiece(new Pawn(BLACK), 3, 7);
	 c.addPiece(new Pawn(BLACK), 4, 4);
	 c.addPiece(new Pawn(WHITE), 4, 7);
	 c.addPiece(new Queen(WHITE), 5, 0);
	 c.addPiece(new Bishop(WHITE), 5, 1);
	 c.addPiece(new King(BLACK), 5, 5);
	 c.addPiece(new Pawn(WHITE), 5, 6);
	 c.addPiece(new King(WHITE), 5, 7);
	 c.addPiece(new Rook(BLACK), 6, 4);
	 c.addPiece(new Pawn(BLACK), 6, 7);
	 c.addPiece(new Knight(WHITE), 7, 3);
	 c.addPiece(new Knight(WHITE), 7, 7);
	
	 composition = new Composition(compositions.nextID++, c);
	 compositions.problemTypes.checkmateInFour.unsolvedProblems.push(composition);
	
	 // 31
	 c = new Board();
	 c.addPiece(new King(BLACK), 0, 5);
	 c.addPiece(new Queen(BLACK), 0, 6);
	 c.addPiece(new Rook(BLACK), 1, 0);
	 c.addPiece(new Rook(BLACK), 1, 2);
	 c.addPiece(new Pawn(BLACK), 1, 5);
	 c.addPiece(new Pawn(BLACK), 1, 7);
	 c.addPiece(new Pawn(BLACK), 3, 0);
	 c.addPiece(new King(WHITE), 3, 4);
	 c.addPiece(new Pawn(WHITE), 3, 7);
	 c.addPiece(new Pawn(BLACK), 4, 2);
	 c.addPiece(new Pawn(WHITE), 4, 5);
	 c.addPiece(new Bishop(WHITE), 5, 2);
	 c.addPiece(new Bishop(WHITE), 5, 7);
	 c.addPiece(new King(WHITE), 7, 0);
	 c.addPiece(new Bishop(BLACK), 7, 6);
	
	 composition = new Composition(compositions.nextID++, c);
	 compositions.problemTypes.checkmateInFour.unsolvedProblems.push(composition);
	
	 //  37 
	 c = new Board();
	 c.addPiece(new Knight(WHITE), 0, 2);
	 c.addPiece(new Bishop(BLACK), 0, 5);
	 c.addPiece(new Pawn(BLACK), 1, 0);
	 c.addPiece(new Queen(WHITE), 1, 7);
	 c.addPiece(new King(WHITE), 2, 0);
	 c.addPiece(new Rook(WHITE), 2, 4);
	 c.addPiece(new Knight(BLACK), 2, 7);
	 c.addPiece(new Pawn(BLACK), 3, 3);
	 c.addPiece(new Pawn(BLACK), 4, 2);
	 c.addPiece(new King(BLACK), 4, 3);
	 c.addPiece(new Bishop(WHITE), 4, 5);
	 c.addPiece(new Pawn(BLACK), 5, 2);
	 c.addPiece(new Knight(WHITE), 5, 6);
	 c.addPiece(new Bishop(BLACK), 6, 4);
	 c.addPiece(new Queen(BLACK), 6, 7);
	 c.addPiece(new Knight(BLACK), 7, 5);
	
	 composition = new Composition(compositions.nextID++, c);
	 compositions.problemTypes.checkmateInFour.unsolvedProblems.push(composition);
	
	 // 38
	 c = new Board();
	 c.addPiece(new Rook(WHITE), 0, 4);
	 c.addPiece(new Pawn(BLACK), 1, 6);
	 c.addPiece(new Pawn(BLACK), 2, 2);
	 c.addPiece(new Pawn(WHITE), 2, 6);
	 c.addPiece(new Knight(WHITE), 3, 2);
	 c.addPiece(new Pawn(BLACK), 3, 3);
	 c.addPiece(new Bishop(WHITE), 4, 1);
	 c.addPiece(new King(BLACK), 4, 3);
	 c.addPiece(new King(WHITE), 4, 7);
	 c.addPiece(new Pawn(WHITE), 5, 1);
	 c.addPiece(new Pawn(WHITE), 6, 3);
	
	 composition = new Composition(compositions.nextID++, c);
	 compositions.problemTypes.checkmateInFour.unsolvedProblems.push(composition);
	
	 // 20
	 c = new Board();
	 c.addPiece(new Rook(WHITE), 0, 2);
	 c.addPiece(new Pawn(BLACK), 1, 3);
	 c.addPiece(new Bishop(BLACK), 1, 6);
	 c.addPiece(new Knight(BLACK), 2, 2);
	 c.addPiece(new Bishop(WHITE), 3, 0);
	 c.addPiece(new Pawn(BLACK), 3, 1);
	 c.addPiece(new King(BLACK), 3, 2);
	 c.addPiece(new Bishop(BLACK), 3, 3);
	 c.addPiece(new Pawn(BLACK), 3, 4);
	 c.addPiece(new Knight(WHITE), 4, 5);
	 c.addPiece(new Pawn(BLACK), 5, 2);
	 c.addPiece(new Rook(BLACK), 5, 6);
	 c.addPiece(new Knight(WHITE), 6, 3);
	 c.addPiece(new Pawn(BLACK), 6, 6);
	 c.addPiece(new Queen(WHITE), 7, 3);
	 c.addPiece(new King(WHITE), 7, 6);
	
	 composition = new Composition(compositions.nextID++, c);
	 compositions.problemTypes.checkmateInFour.unsolvedProblems.push(composition);
	
	 // 32
	 c = new Board();
	 c.addPiece(new Rook(BLACK), 0, 0);
	 c.addPiece(new Knight(BLACK), 0, 1);
	 c.addPiece(new Queen(WHITE), 1, 5);
	 c.addPiece(new Pawn(BLACK), 3, 2);
	 c.addPiece(new Pawn(BLACK), 3, 4);
	 c.addPiece(new Bishop(BLACK), 3, 6);
	 c.addPiece(new Pawn(BLACK), 4, 0);
	 c.addPiece(new King(BLACK), 4, 3);
	 c.addPiece(new Knight(WHITE), 4, 6);
	 c.addPiece(new King(WHITE), 5, 7);
	 c.addPiece(new Bishop(WHITE), 6, 2);
	 c.addPiece(new Knight(WHITE), 7, 3);
	
	 composition = new Composition(compositions.nextID++, c);
	 compositions.problemTypes.checkmateInFour.unsolvedProblems.push(composition);
	
	 // 17
	 c = new Board();
	 c.addPiece(new Rook(BLACK), 0, 6);
	 c.addPiece(new Pawn(BLACK), 1, 0);
	 c.addPiece(new Bishop(BLACK), 1, 4);
	 c.addPiece(new Bishop(BLACK), 1, 7);
	 c.addPiece(new King(WHITE), 2, 0);
	 c.addPiece(new Knight(WHITE), 2, 2);
	 c.addPiece(new Rook(WHITE), 2, 6);
	 c.addPiece(new Pawn(BLACK), 2, 7);
	 c.addPiece(new King(BLACK), 3, 2);
	 c.addPiece(new Pawn(BLACK), 4, 1);
	 c.addPiece(new Pawn(BLACK), 4, 3);
	 c.addPiece(new Knight(BLACK), 5, 0);
	 c.addPiece(new Bishop(WHITE), 5, 5);
	 c.addPiece(new Rook(WHITE), 5, 6);
	 c.addPiece(new Knight(WHITE), 6, 3);
	 c.addPiece(new Bishop(WHITE), 6, 7);
	
	 composition = new Composition(compositions.nextID++, c);
	   compositions.problemTypes.checkmateInFour.unsolvedProblems.push(composition);
	
	 // 34
	 c = new Board();
	 c.addPiece(new Rook(BLACK), 1, 4);
	 c.addPiece(new Knight(BLACK), 1, 6);
	 c.addPiece(new Pawn(BLACK), 2, 4);
	 c.addPiece(new Bishop(BLACK), 3, 3);
	 c.addPiece(new King(BLACK), 3, 4);
	 c.addPiece(new King(WHITE), 3, 6);
	 c.addPiece(new Bishop(WHITE), 4, 1);
	 c.addPiece(new Pawn(WHITE), 5, 4);
	 c.addPiece(new Pawn(WHITE), 6, 3);
	 c.addPiece(new Knight(WHITE), 6, 4);
	 c.addPiece(new Rook(WHITE), 7, 5);
	
	 composition = new Composition(compositions.nextID++, c);
	   compositions.problemTypes.checkmateInFour.unsolvedProblems.push(composition);
	
	 // 12 
	 c = new Board();
	 c.addPiece(new Bishop(WHITE), 0, 4);
	 c.addPiece(new Pawn(BLACK), 1, 1);   
	 c.addPiece(new Queen(WHITE), 1, 7);
	 c.addPiece(new Pawn(BLACK), 2, 0);
	 c.addPiece(new Knight(WHITE), 2, 1);
	 c.addPiece(new Queen(BLACK), 2, 2);
	 c.addPiece(new Pawn(BLACK), 2, 7);
	 c.addPiece(new Pawn(BLACK), 3, 3);
	 c.addPiece(new Pawn(WHITE), 3, 5);
	 c.addPiece(new Pawn(BLACK), 4, 1);
	 c.addPiece(new King(BLACK), 5, 1);
	 c.addPiece(new Pawn(WHITE), 6, 1);
	 c.addPiece(new Bishop(BLACK), 6, 2)
	 c.addPiece(new King(WHITE), 7, 0);
	
	 composition = new Composition(compositions.nextID++, c);
	 compositions.problemTypes.checkmateInFour.unsolvedProblems.push(composition);
	
	 // 25
	 c = new Board();
	 c.addPiece(new Rook(BLACK), 0, 0);
	 c.addPiece(new Bishop(BLACK), 0, 3);
	 c.addPiece(new Rook(WHITE), 2, 2);
	 c.addPiece(new Pawn(BLACK), 3, 3);
	 c.addPiece(new Rook(WHITE), 3, 4);
	 c.addPiece(new Knight(BLACK), 4, 5);
	 c.addPiece(new Knight(WHITE), 4, 6);
	 c.addPiece(new Pawn(BLACK), 5, 0);
	 c.addPiece(new King(BLACK), 5, 3);
	 c.addPiece(new Pawn(WHITE), 6, 6);
	 c.addPiece(new King(WHITE), 7, 0);
	 c.addPiece(new Knight(WHITE), 7, 3);
	
	 composition = new Composition(compositions.nextID++, c);
	 compositions.problemTypes.checkmateInFour.unsolvedProblems.push(composition);
	
	
	 // 24
	 c = new Board();
	 c.addPiece(new Rook(BLACK), 0, 1);
	 c.addPiece(new Knight(WHITE), 1, 4);
	 c.addPiece(new Knight(WHITE), 3, 0);
	 c.addPiece(new Bishop(BLACK), 3, 1);
	 c.addPiece(new Rook(WHITE), 3, 3);
	 c.addPiece(new Pawn(BLACK), 3, 6);
	 c.addPiece(new Pawn(BLACK), 3, 7);
	 c.addPiece(new Pawn(BLACK), 4, 0);
	 c.addPiece(new King(BLACK), 4, 4);
	 c.addPiece(new Pawn(BLACK), 4, 6);
	 c.addPiece(new Pawn(BLACK), 5, 2);
	 c.addPiece(new Rook(WHITE), 5, 6);
	 c.addPiece(new Pawn(WHITE), 6, 4);
	 c.addPiece(new Pawn(WHITE), 6, 7);
	 c.addPiece(new King(WHITE), 7, 4);
	
	 composition = new Composition(compositions.nextID++, c);
	 compositions.problemTypes.checkmateInFour.unsolvedProblems.push(composition);
	
	 // 11
	 c = new Board();
	 c.addPiece(new Rook(BLACK), 0, 4);
	 c.addPiece(new Rook(BLACK), 0, 6);
	 c.addPiece(new Pawn(BLACK), 1, 0);
	 c.addPiece(new Bishop(BLACK), 1, 1);
	 c.addPiece(new Knight(WHITE), 1, 2);
	 c.addPiece(new Knight(BLACK), 1, 5);
	 c.addPiece(new Rook(WHITE), 3, 1);
	 c.addPiece(new Pawn(BLACK), 3, 3);
	 c.addPiece(new Pawn(BLACK), 3, 4);
	 c.addPiece(new Knight(WHITE), 3, 7);
	 c.addPiece(new King(BLACK), 4, 3);
	 c.addPiece(new Pawn(WHITE), 5, 3);
	 c.addPiece(new Queen(WHITE), 5, 7);
	 c.addPiece(new King(WHITE), 6, 3);
	 c.addPiece(new Knight(BLACK), 6, 6);
	 c.addPiece(new Pawn(BLACK), 6, 7);
	
	 composition = new Composition(compositions.nextID++, c);
	 compositions.problemTypes.checkmateInFour.unsolvedProblems.push(composition);
	
	 // 18
	 c = new Board();
	 c.addPiece(new Rook(BLACK), 0, 7);
	 c.addPiece(new Bishop(WHITE), 1, 0);
	 c.addPiece(new Bishop(BLACK), 1, 2);
	 c.addPiece(new Knight(WHITE), 1, 4);
	 c.addPiece(new Knight(WHITE), 1, 5);
	 c.addPiece(new Bishop(BLACK), 1, 7);
	 c.addPiece(new Pawn(BLACK), 2, 6);
	 c.addPiece(new Pawn(BLACK), 2, 7);
	 c.addPiece(new Pawn(BLACK), 3, 0);
	 c.addPiece(new Knight(BLACK), 3, 1);
	 c.addPiece(new Pawn(BLACK), 4, 1);
	 c.addPiece(new King(BLACK), 4, 4);
	 c.addPiece(new Bishop(WHITE), 4, 6);
	 c.addPiece(new Pawn(BLACK), 5, 3);
	 c.addPiece(new Rook(BLACK), 5, 6);
	 c.addPiece(new Pawn(WHITE), 6, 1);
	 c.addPiece(new Queen(WHITE), 6, 5);
	 c.addPiece(new King(WHITE), 7, 0);
	 c.addPiece(new Knight(BLACK), 7, 5);
	
	 composition = new Composition(compositions.nextID++, c);
	 compositions.problemTypes.checkmateInFour.unsolvedProblems.push(composition);
	 
	 // 30 
	 c = new Board();
	 c.addPiece(new Rook(BLACK), 0, 2);
	 c.addPiece(new Knight(WHITE), 0, 3);
	 c.addPiece(new Rook(BLACK), 1, 2);
	 c.addPiece(new Queen(BLACK), 1, 5);
	 c.addPiece(new Pawn(BLACK), 2, 4);
	 c.addPiece(new Bishop(WHITE), 3, 0);
	 c.addPiece(new King(BLACK), 3, 4);
	 c.addPiece(new Pawn(WHITE), 3, 6);
	 c.addPiece(new Queen(WHITE), 4, 0);
	 c.addPiece(new Pawn(WHITE), 4, 2);
	 c.addPiece(new Pawn(BLACK), 4, 3);
	 c.addPiece(new Knight(WHITE), 4, 5);
	 c.addPiece(new Bishop(WHITE), 5, 3);
	 c.addPiece(new Pawn(WHITE), 5, 7);
	 c.addPiece(new King(WHITE), 7, 6);
	
	 composition = new Composition(compositions.nextID++, c);
	 compositions.problemTypes.checkmateInFour.unsolvedProblems.push(composition);
	 
	 // 16
	 c = new Board();
	 c.addPiece(new Knight(WHITE), 0, 0);
	 c.addPiece(new Rook(BLACK), 0, 7);
	 c.addPiece(new Queen(WHITE), 1, 1);
	 c.addPiece(new Pawn(BLACK), 2, 0);
	 c.addPiece(new Pawn(BLACK), 2, 3);
	 c.addPiece(new Rook(BLACK), 2, 4);
	 c.addPiece(new Knight(WHITE), 3, 3);
	 c.addPiece(new Bishop(BLACK), 3, 6);
	 c.addPiece(new King(WHITE), 4, 0);
	 c.addPiece(new King(BLACK), 4, 4);
	 c.addPiece(new Pawn(WHITE), 4, 6);
	 c.addPiece(new Pawn(BLACK), 5, 2);
	 c.addPiece(new Knight(BLACK), 6, 0);
	 c.addPiece(new Pawn(WHITE), 6, 4);
	 c.addPiece(new Bishop(WHITE), 6, 5);
	 c.addPiece(new Bishop(BLACK), 7, 7);
	                                                                                
	 composition = new Composition(compositions.nextID++, c);
	 compositions.problemTypes.checkmateInFour.unsolvedProblems.push(composition);
	
	 // 35
	 c = new Board();
	 c.addPiece(new Queen(BLACK), 0, 3);
	 c.addPiece(new Knight(BLACK), 0, 7);
	 c.addPiece(new Pawn(BLACK), 1, 2);
	 c.addPiece(new Queen(WHITE), 1, 7);
	 c.addPiece(new Bishop(WHITE), 2, 1);
	 c.addPiece(new Bishop(BLACK), 2, 3);
	 c.addPiece(new Knight(WHITE), 2, 6);
	 c.addPiece(new Pawn(WHITE), 3, 1);
	 c.addPiece(new Pawn(BLACK), 3, 4);
	 c.addPiece(new Pawn(BLACK), 3, 6);
	 c.addPiece(new Pawn(BLACK), 4, 4);
	 c.addPiece(new Pawn(BLACK), 4, 6);
	 c.addPiece(new Rook(BLACK), 5, 1);
	 c.addPiece(new King(BLACK), 5, 3);
	 c.addPiece(new Knight(WHITE), 5, 4);
	 c.addPiece(new Knight(BLACK), 6, 0);
	 c.addPiece(new Pawn(WHITE), 6, 3);
	 c.addPiece(new Rook(WHITE), 7, 2);
	 c.addPiece(new Queen(WHITE), 7, 4);
	 c.addPiece(new Bishop(BLACK), 7, 7);
	                                                                                
	 composition = new Composition(compositions.nextID++, c);
	 compositions.problemTypes.checkmateInFour.unsolvedProblems.push(composition);
	
	 // 28
	 c = new Board();
	 c.addPiece(new Bishop(BLACK), 0, 5);
	 c.addPiece(new Pawn(BLACK), 1, 0);
	 c.addPiece(new Bishop(WHITE), 1, 1);
	 c.addPiece(new Pawn(BLACK), 1, 3);
	 c.addPiece(new Knight(WHITE), 1, 4);
	 c.addPiece(new King(BLACK), 2, 3);
	 c.addPiece(new Knight(BLACK), 2, 6);
	 c.addPiece(new Queen(BLACK), 2, 7);
	 c.addPiece(new Pawn(WHITE), 3, 5);
	 c.addPiece(new Pawn(WHITE), 4, 3);
	 c.addPiece(new Pawn(BLACK), 4, 5);
	 c.addPiece(new Bishop(BLACK), 6, 0);
	 c.addPiece(new Queen(WHITE), 6, 1);
	 c.addPiece(new Pawn(BLACK), 6, 7);
	 c.addPiece(new Queen(WHITE), 7, 4);
	                                                                                
	 composition = new Composition(compositions.nextID++, c);
	 compositions.problemTypes.checkmateInFour.unsolvedProblems.push(composition);
	 
	 // 13
	 c = new Board();
	 c.addPiece(new Rook(WHITE), 0, 5);
	 c.addPiece(new Pawn(BLACK), 1, 1);
	 c.addPiece(new King(WHITE), 1, 2);
	 c.addPiece(new Bishop(BLACK), 2, 0);
	 c.addPiece(new Pawn(BLACK), 2, 4);
	 c.addPiece(new Knight(BLACK), 2, 7);
	 c.addPiece(new King(BLACK), 3, 4);
	 c.addPiece(new Knight(BLACK), 3, 5);
	 c.addPiece(new Pawn(BLACK), 4, 2);
	 c.addPiece(new Bishop(BLACK), 4, 3);
	 c.addPiece(new Bishop(WHITE), 5, 2);
	 c.addPiece(new Knight(WHITE), 5, 4);
	 c.addPiece(new Pawn(WHITE), 5, 6);
	 c.addPiece(new Pawn(WHITE), 6, 4);
	 c.addPiece(new Pawn(BLACK), 6, 7);
	 c.addPiece(new Rook(WHITE), 7, 1);
	 c.addPiece(new Knight(WHITE), 7, 4);
	 c.addPiece(new Bishop(WHITE), 7, 7);
	 
	 composition = new Composition(compositions.nextID++, c);
	 compositions.problemTypes.checkmateInFour.unsolvedProblems.push(composition);
	 
	 // 24
	 c = new Board();
	 c.addPiece(new Knight(WHITE), 0, 2);
	 c.addPiece(new Knight(BLACK), 1, 0);
	 c.addPiece(new Rook(WHITE), 1, 1);
	 c.addPiece(new Knight(WHITE), 1, 5);
	 c.addPiece(new Queen(BLACK), 1, 6);
	 c.addPiece(new King(BLACK), 2, 4);
	 c.addPiece(new Pawn(BLACK), 2, 5);
	 c.addPiece(new Pawn(BLACK), 2, 1);
	 c.addPiece(new Bishop(BLACK), 3, 4);
	 c.addPiece(new Knight(BLACK), 3, 6);
	 c.addPiece(new Pawn(WHITE), 4, 1);
	 c.addPiece(new Pawn(WHITE), 5, 2);
	 c.addPiece(new Bishop(WHITE), 5, 3);
	 c.addPiece(new Pawn(WHITE), 5, 5);
	
	 composition = new Composition(compositions.nextID++, c);
	 compositions.problemTypes.checkmateInFour.unsolvedProblems.push(composition);
	 
	 // 29
	 c = new Board();
	 c.addPiece(new King(WHITE), 1, 4);
	 c.addPiece(new Pawn(BLACK), 2, 2);
	 c.addPiece(new Rook(BLACK), 3, 2);
	 c.addPiece(new King(BLACK), 3, 4);
	 c.addPiece(new Pawn(BLACK), 3, 5);
	 c.addPiece(new Bishop(BLACK), 3, 7);
	 c.addPiece(new Bishop(WHITE), 4, 1);
	 c.addPiece(new Rook(BLACK), 4, 2);
	 c.addPiece(new Pawn(BLACK), 5, 0);
	 c.addPiece(new Knight(WHITE), 5, 4);
	 c.addPiece(new Knight(BLACK), 5, 5);
	 c.addPiece(new Pawn(WHITE), 5, 6);
	 c.addPiece(new Knight(WHITE), 6, 5);
	 c.addPiece(new Queen(WHITE), 7, 7);
	                                                                                
	 composition = new Composition(compositions.nextID++, c);
	 compositions.problemTypes.checkmateInFour.unsolvedProblems.push(composition);
	
	 // 22
	 c = new Board();
	 c.addPiece(new Knight(WHITE), 0, 4);
	 c.addPiece(new Bishop(WHITE), 0, 7);
	 c.addPiece(new Knight(BLACK), 1, 1);
	 c.addPiece(new Rook(BLACK), 2, 0);
	 c.addPiece(new Bishop(BLACK), 2, 1);
	 c.addPiece(new Pawn(BLACK), 2, 3);
	 c.addPiece(new Knight(BLACK), 2, 4);
	 c.addPiece(new King(WHITE), 2, 7);
	 c.addPiece(new Rook(BLACK), 3, 0);
	 c.addPiece(new Pawn(BLACK), 3, 4);
	 c.addPiece(new King(BLACK), 3, 5);
	 c.addPiece(new Pawn(BLACK), 3, 6);
	 c.addPiece(new Knight(WHITE), 4, 6);
	 c.addPiece(new Pawn(WHITE), 5, 5);
	 c.addPiece(new Pawn(WHITE), 5, 6);
	 c.addPiece(new Pawn(WHITE), 5, 7);
	 c.addPiece(new Queen(BLACK), 7, 1);
	 c.addPiece(new Bishop(BLACK), 7, 3);
	 c.addPiece(new Queen(WHITE), 7, 4);
	                                                                                
	 composition = new Composition(compositions.nextID++, c);
	 compositions.problemTypes.checkmateInFour.unsolvedProblems.push(composition);
	
	 // 36
	 c = new Board();
	 c.addPiece(new Knight(WHITE), 0, 2);
	 c.addPiece(new King(WHITE), 1, 1);
	 c.addPiece(new Pawn(BLACK), 2, 3);
	 c.addPiece(new Bishop(WHITE), 2, 5);
	 c.addPiece(new Pawn(BLACK), 3, 0);
	 c.addPiece(new King(BLACK), 3, 3);
	 c.addPiece(new Knight(BLACK), 4, 1);
	 c.addPiece(new Bishop(BLACK), 4, 2);
	 c.addPiece(new Pawn(BLACK), 4, 4);
	 c.addPiece(new Queen(WHITE), 5, 7);
	 c.addPiece(new Bishop(BLACK), 6, 1);
	 c.addPiece(new Knight(WHITE), 6, 4);
	                                                                                
	 composition = new Composition(compositions.nextID++, c);
	 compositions.problemTypes.checkmateInFour.unsolvedProblems.push(composition);
}

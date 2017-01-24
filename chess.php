<script type="text/javascript">
	// add CSS stylesheet to head through javascript
	var temp = document.getElementsByTagName('head')[0];
	var linkNode = document.createElement('LINK');
	linkNode.setAttribute('rel', 'stylesheet');
	linkNode.setAttribute('type', 'text/css');
	linkNode.setAttribute('href', 'chess/chessboardStyle.css');
	temp.appendChild(linkNode);
	
	// add jQuery dialog link (caused page jank for nav)
	// linkNode = document.createElement('LINK');
	// linkNode.setAttribute('rel', 'stylesheet');
	// linkNode.setAttribute('href', 'chess/jquery-ui/jquery-ui.css');
	// temp.appendChild(linkNode);
</script>
<!-- <link rel="stylesheet" href="jquery-ui/jquery-ui.css"> -->								<!-- for dialog -->
 <!-- <script src="../includes/js/jquery-2.1.4.min.js"></script>	-->
 <!-- <script src="chess/jquery-ui/external/jquery/jquery.js"></script> --> 	<!-- v1.10.2 -->
 <script type="text/javascript" src="chess/global.js"></script>
 <!-- <script src="chess/jquery-ui/jquery-ui.js"></script> -->
 <script type="text/javascript" src="chess/caribouContests.js"></script>
 <script type="text/javascript" src="chess/AI.js"></script>
 <script type="text/javascript" src="chess/board.js"></script>
 <script type="text/javascript" src="chess/listeners.js"></script>
 <script type="text/javascript" src="chess/piece.js"></script>
 <script type="text/javascript" src="chess/action.js"></script>
 <script type="text/javascript" src="chess/rules.js"></script>
 <script type="text/javascript" src="chess/chessboardScript.js" ></script>

<div id="gameArea">
	<h3 id="turn">Turn: White</h3>
	<div id="fileNotation">
		<!-- 01234567 --> ABCDEFGH
	</div>
	<div id="rankNotation">
		<!-- 01234567 --> 87654321
	</div>
	<div id="boardAndInfo">
		<div id="board">
			<canvas id="chessboard" width="600" height="600"></canvas>
			<canvas id="highlight" width="600" height="600"></canvas>
			<canvas id="chesspieceCanvas" width="600" height="600">
				<p>Your browser doesn't support the HTML5 canvas. Please consider updating your browser or using one which supports canvas.</p>
			</canvas>
		</div>
		<fieldset id="gameInfo">
			<legend>Options</legend>
			<label>Problem Type:</label>
			<select id="problemTypeSelector">
				<option value="1" selected>checkmate in 1 move</option>
				<option value="2" >checkmate in 2 moves</option>
				<option value="3" >checkmate in 3 moves</option>
				<option value="4" >checkmate in 4 moves</option>
			</select>
			<br /><br />
			<label id="typeProperty" class="problemProperty"></label>
			<label id="currentProblemType" class="problemPropertyValue"></label>
			<br/>
			<label id="turnsRemainingProperty" class="problemProperty"></label>
			<label id="turnsRemaining"></label>

			<div id="gameControlWidgets">
				<input type="button" id="uiNext" value="Next Problem">
				<input type="button" id="uiUndo" value="Undo" disabled>	
				<input type="button" id="uiReset" class="uiReset" value="Reset board" disabled>
			</div>
		</fieldset>
	</div>
</div>

<div id="promotion2" class="promotionPopup">
	<input type="button" id="btnClose" value="Close">
	<label>&#9813;&#9814;&#9815;&#9816;</label>
	<div id="promoteOptions">
		<input type="radio" name="promotionPick" value="Queen" checked>Queen
		<input type="radio" name="promotionPick" value="Rook">Rook
		<input type="radio" name="promotionPick" value="Bishop">Bishop
		<input type="radio" name="promotionPick" value="Knight">Knight
	</div>
</div>

<div id="promotion">
	<label>&#9813;&#9814;&#9815;&#9816;</label>
	<!--<div id="promoteOptions">
		<input type="radio" name="promotionPick" value="Queen" checked>Queen
		<input type="radio" name="promotionPick" value="Rook">Rook
		<input type="radio" name="promotionPick" value="Bishop">Bishop
		<input type="radio" name="promotionPick" value="Knight">Knight
	</div>
	-->
</div>
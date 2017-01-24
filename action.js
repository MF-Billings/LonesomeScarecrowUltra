/* Billings, M. */
// consider adding colour data to Action

/* Contains data necessary to determine legal actions for a given piece at a given point in time.
 * agent tile of the agent performing the action
 * actionType object used to convey the proper behaviour requried of the action
 * row the row the agent will move to as a result of the action
 * column (look above)
 */
function Action(agent, actionType, row, column) {
	var objIsActionType = false;
	
	for (property in ActionType) {
		if (actionType === ActionType[property]) {		//check if arg is in fact an ActionType property
			this.actionType = actionType;
			objIsActionType = true;
			break;
		}
	}
	if (!(objIsActionType || actionType == null))
		throw "incorrect object type for argument 'actionType': " +  typeof actionType + ".  Requires property of type ActionType.";
	this.agent = agent;
	this.row = row;
	this.column = column;
}

/* Effectively an enum used to determine whether an action a piece takes is a result of pure movement or an attack.  Used for hightlighting the tiles the proper colour.
 *
 */
const ActionType = {
	MOVE : Symbol("MOVE"),
	ATTACK : Symbol("ATTACK"),
	ENPASSANT : Symbol("EN PASSANT")
};
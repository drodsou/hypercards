//import DrsAppCtrl from './drsLib/drsAppCtrl2'
import DrsAppCtrl from 'lib/DrsAppCtrl'		


// -- ACTIONS
class AppCtrl extends DrsAppCtrl {
	constructor () {
		super();   	// important!
		
		this.actions.addCard = (cNdx) => {	// 'this' is bound
			// TODO:
			let newState = this.getState();
			newState.chainCards.push(cNdx)
			this.setState({chainCards : newState.chainCards}, 'ADD_CARD');
		}
		
		this.actions.removeCard = (rNdx) => {	
			let newState = this.getState();
			newState.chainCards.splice(rNdx,1)
			this.setState(newState, 'REMOVE_CARD');
		}
		
		// this should raise error as actions is non writable
		// this.actions = {
		// 	uno: "UNO"
		// }
		
	}

}

var appCtrl = new AppCtrl();
export default appCtrl;
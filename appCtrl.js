import DrsAppCtrl from './drsLib/drsAppCtrl'


// -- ACTIONS
class AppCtrl extends DrsAppCtrl {
	constructor () {
		super();   	//binds doXXX methods to new instance
	}
	
	doAddCard (cNdx) {	//can type it
		let newState = this.getState();
		newState.chainCards.push(cNdx)
		this.setState(newState, 'ADD_CARD');
	}
	
	doRemoveCard (rNdx) {	
		let newState = this.getState();
		newState.chainCards.splice(rNdx,1)
		this.setState(newState, 'REMOVE_CARD');
	}
	
}


var appCtrl = new AppCtrl();
export default appCtrl;
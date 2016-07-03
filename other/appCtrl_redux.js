import {createStore as createReduxStore} from 'redux'
import cardsdb from './cardsdb'



const appInitialState = {
	maxID : 0,
	draggedCard : null,
	allCards : cardsdb,
	chainCards : []
}

const appActionsDispatcher = (state = appInitialState, action) => {
	let newState = {};
	
	switch (action.type) {
		
		/* action.ndx: index of state.allCards */
		case 'ADD_CARD':
			//console.log(action.type, action.ndx)
			newState = Object.assign({}, state,
				{chainCards: [...state.chainCards, action.ndx] }
			); 
			return newState;
		
		/* action: rNdx : index of state.chainCards	*/	
		case 'REMOVE_CARD':
			
			let newChainCards = [...state.chainCards.slice(0,action.rNdx), ...state.chainCards.slice(action.rNdx+1)]
			newState = Object.assign({}, state,
					{chainCards: newChainCards }
			); 
			return newState;		
			
		default :
			newState = state;
	}
	
	return newState;
}

const appCtrl = createReduxStore(appActionsDispatcher)
//console.log('appCtrl.js:1:',appCtrl);

export default appCtrl;
/*
Pseudo redux-like store
provides:
 - a state object
 - a subscriptors calback
 - an actions object (to add actions there in children) in this fashion:
 
 			| class AppCtrl extends DrsAppCtrl {
			|	 	constructor () {
			|	 		super();   	// important!
			|	 		
			|	 		this.actions.addCard = (cNdx) => {	// autobound 'this', important
			|	 			let newState = this.getState();
			|			[...]
 
*/
class DrsAppCtrl {
	
	constructor () {
		/**/console.log('DrsAppCtrl constructor')
		let _state = {}					// private to constructo function: accessed via closure
		let _subscriptors = [];
		let _lastState = {}
		
		// create the actions object and prevent it to be replaced, only mutated adding new actions
		Object.defineProperty( this, "actions", {value: {}, writable: false, enumerable: true, configurable: true} );
		
		this.getState = () => {  // 'this' is bound. Also defined here has access to private variables of constructor
			return JSON.parse(JSON.stringify( _state )) 
		}
		
		this.setState = (newState) => {
			_lastState = JSON.parse(JSON.stringify( _state ));
			//blend passed newState, allowing passing partial state updates
			Object.assign( _state, JSON.parse(JSON.stringify( newState )) )

			
			this.broadcast();
		}
		
		this.undo = () => {
			this.setState( _lastState )
		}
		
		this.subscribe = (fn) => {
			_subscriptors.push(fn) 
			// TODO: devuelve un unsubscriptor
		}
		
		this.broadcast = () => {
			_subscriptors.forEach( fn => {
				fn( JSON.parse(JSON.stringify( _state )), this.actions );  // fn( state, actions)
			})
		}
		
		//this.bindActions();  // called on super() also on sibling binds its methods too
	}
	
	// bindActions () {
	// 	/**/console.log('bindAll:this', this)
	// 	Object.getOwnPropertyNames(this.__proto__).forEach( fnName =>{
	// 		if (fnName.match(/^do/)) {
	// 			this[fnName] = this[fnName].bind(this)
	// 		}
	// 	})
	// }

}

export default DrsAppCtrl;
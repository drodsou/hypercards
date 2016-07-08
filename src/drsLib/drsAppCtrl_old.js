class DrsAppCtrl {
	
	constructor () {
		this._state = {}
		this._subscriptors = [];
		this._lastState = {}
		this.bindActions();
	}
	
	bindActions () {
		/**/console.log('bindAll:this', this)
		Object.getOwnPropertyNames(this.__proto__).forEach( fnName =>{
			if (fnName.match(/^do/)) {
				this[fnName] = this[fnName].bind(this)
			}
		})
	}
	
	getState () {
		return JSON.parse(JSON.stringify( this._state )) 
		//return _state;
	}
	
	setState (newState) {
		this._lastState = JSON.parse(JSON.stringify( this._state ));
		this._state = JSON.parse(JSON.stringify( newState ));
		
		this.broadcast();
	}
	
	undo () {
		this.setState(this._lastState)
	}
	
	subscribe (fn) {
		this._subscriptors.push(fn) 
		// TODO: devuelve un unsubscriptor
	}
	
	broadcast() {
		this._subscriptors.forEach( fn => {
			fn( JSON.parse(JSON.stringify( this._state )), this );
		})
	}
		
}

export default DrsAppCtrl;
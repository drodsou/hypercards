/*
------------------
The idea of slowing the rate and using css transition linear to interpolate, doest work well


----------------------
*/


import React from 'react';

class Animation extends React.Component {
	//TODO: props solo enteros
	
	constructor() {
		super()
		
		this.componentUpdate = true
		
		this.curState = {
			rate : 1000/60,			
			duration : 1000,
			repeat : 'no',		// no, yes, bounce
			enabled : true,
			reverse : false,			
			t : 0,
			firstRender : true
		}
		
	}
	
	// Jumps directly to the last frame of this cycle 
	skipAnimation() {
			this.curState.t = this.curState.duration
	}
	
	// Enable/disable animation
	toggleAnimation() {
		// MOTE: is ok to have to toggle twice if Animation stoped by itself at the end of repeat=no (as its still enable if another call happens)
		//console.log('toggleAnimation')
		if (this.curState.enabled) {
			this.curState.enabled = false
		}
		else {
			this.curState.enabled = true
			this.forceUpdate()
		}
	}
	
		
	requiredAnotherRender() {
		//let st = this.curState
		let curState = this.curState
		//let again = false

				
		if (!curState.enabled) return false;
		
		if (curState.t >= curState.duration && curState.repeat == 'no') {
			// end forward no repeat
			curState.t = 0
			return false
			// don't disable Animation (curState.enabled == true)
		}
		
		
		if (!curState.reverse) { // forward middle
			if (curState.t < curState.duration) {	// may overflow, corrected bellow
				curState.t = curState.t + curState.rate
				// again = true
			}	
			
			if (curState.t >= curState.duration) { // forward end
				if (curState.repeat == 'no') {
					curState.t = curState.duration
					// again = true
				}
				else if (curState.repeat == 'yes') {
					curState.t = curState.t - curState.duration 
					// again = true
				}
				else if (curState.repeat == 'bounce') {
					curState.reverse = true
					curState.t = (curState.duration - (curState.t - curState.duration)) 
					// again = true
				} 
			}
		}
		else { //reverse middle
			if (curState.t > 0 ) {
				curState.t = curState.t - curState.rate	// may overflow, we correct it bellow
				// again = true
			}	
			
			if (curState.t <= 0) { // reverse start
				curState.reverse = false
				curState.t = -curState.t //curState.rate
				// again = true
			}
		}
		
		//curState.enabled = again
		return true;
	}
	
	shouldComponentUpdate (nextProps, nextState) {
		return this.componentUpdate
		
	}
	
	componentWillMount() {
		//console.log('Animation',this.props)
		Object.assign(this.curState, this.props.newState)
		//console.log('drs-react-animation:state', this.curState)
	}
	
	render() {
		
		//console.log('drs-react-animation:rendering',this.curState.t)
		const renderedChildren = this.props.children({
			x: this.curState.t/this.curState.duration,
			rate : this.curState.rate,
			firstRender : this.curState.firstRender,
			firstFrame : this.curState.t === 0, 
			lastFrame : this.curState.t === this.curState.duration,
			skip : this.skipAnimation.bind(this),
			toggle : this.toggleAnimation.bind(this),
			
		})
		
		// once rendered...
		this.curState.firstRender = false
		
		if (this.requiredAnotherRender()) {
			setTimeout(()=>{
				this.forceUpdate() 
			}, this.curState.rate)
		}
		
		//console.log('drs-react-animator',this.state)
		
    return renderedChildren && React.Children.only(renderedChildren);	// ensure only one children is returned
		
	}
	
}

export default Animation;
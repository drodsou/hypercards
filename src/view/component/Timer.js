/*
------------------
The idea of slowing the rate and using css transition linear to interpolate, doest work well


----------------------
*/


import React from 'react';

class Timer extends React.Component {
	//TODO: props solo enteros
	
	constructor() {
		super()
		this.state = {
			rate : 1000/60,			
			duration : 1000,
			repeat : 'no',		// no, yes, bounce
			enabled : true,
			reverse : false,			
			t : 0
		}
		
	}
	
	toggleTimer() {
		// MOTE: is ok to have to toggle twice if timer stoped by itself at the end of repeat=no (as its still enable if another call happens)
		//console.log('toggleTimer')
		if (this.state.enabled) {
			this.state.enabled = false
		}
		else {
			
			this.setState( {
				enabled : true		
			})
		}
	}
	
		
	requiredAnotherRender() {
		let st = this.state
		if (!st.enabled) return false;
		let again = false
		
		if (st.t >= st.duration && st.repeat == 'no') {
			// end forward no repeat
			st.t = 0
			return false
			// don't disable timer
		}
		
		
		if (!st.reverse) { // forward middle
			if (st.t < st.duration) {	// may overflow, corrected bellow
				st.t = st.t + st.rate
				again = true
			}	
			
			if (st.t >= st.duration) { // forward end
				if (st.repeat == 'no') {
					st.t = st.duration
					again = true
				}
				else if (st.repeat == 'yes') {
					st.t = st.t - st.duration 
					again = true
				}
				else if (st.repeat == 'bounce') {
					st.reverse = true
					st.t = (st.duration - (st.t - st.duration)) 
					again = true
				} 
			}
		}
		else { //reverse middle
			if (st.t > 0 ) {
				st.t = st.t - st.rate	// may overflow, we correct it bellow
				again = true
			}	
			
			if (st.t <= 0) { // reverse start
				st.reverse = false
				st.t = -st.t //st.rate
				again = true
			}
		}
		
		this.state.enabled = again
		//console.log('Timer:rerender',st.t,again, this.state.enabled)
		return again;
	}
	
	componentWillMount() {
		//console.log('Timer',this.props)
		Object.assign(this.state, this.props.newState)
		console.log('timer:state', this.state)
	}
	
	render() {
		console.log('Timer:rendering',this.state.t)
		const renderedChildren = this.props.children({
			x: this.state.t/this.state.duration, 
			toggle : this.toggleTimer.bind(this) 
		})
		
		if (this.requiredAnotherRender()) {
			setTimeout(()=>{
				this.setState(this.state)  // works with null?
			}, this.state.rate)
		}
		
    return renderedChildren && React.Children.only(renderedChildren);	// ensure only one children is returned
		
	}
	
}

export default Timer;
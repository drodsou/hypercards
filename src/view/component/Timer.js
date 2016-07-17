import React from 'react';

class Timer extends React.Component {
	//TODO: props solo enteros
	
	constructor() {
		super()
		this.state = {
			enabled : true,
			t : 0,
			time : 1000,
			delay : 1000/60,			
			repeat : 'no',		// no, yes, bounce
			reverse : false
		}
		
	}
	
	toggleTimer() {
		console.log('toggleTimer')
		if (this.state.enabled) {
			this.state.enabled = false
		}
		else {
			
			this.setState( {
				enabled : true,
				t : this.state.repeat=='no' && this.state.t >= this.state.time ? 0 : this.state.t
			})
		}
	}
	
		
	calculateNextValue() {
		let st = this.state
		if (!st.enabled) return false;
		
		let again = false
		
		if (!st.reverse) { // forward middle
			if (st.t < st.time) {
				st.t = st.t + st.delay
				again = true
			}	
			else { // forward end
				if (st.repeat == 'yes') {
					st.t = 0
					again = true
				}
				else if (st.repeat == 'bounce') {
					st.reverse = true
					st.t = st.t - st.delay
					again = true
				} 
			}
		}
		else { //reverse middle
			if (st.t > 0) {
				st.t = st.t - st.delay
				again = true
			}	
			else { // reverse start
				st.reverse = false
				st.t = st.t + st.delay
				again = true
			}
		}
		
		this.state.enabled = again
		return again;
	}
	
	componentWillMount() {
		//console.log('Timer',this.props)
		Object.assign(this.state, this.props.newState)
	}
	
	render() {

		const renderedChildren = this.props.children({
			x: this.state.t/this.state.time, 
			toggle : this.toggleTimer.bind(this) 
		})
		
		if (this.calculateNextValue()) {
			setTimeout(()=>{
				this.setState(this.state)  // works with null?
			}, this.state.delay)
		}
		
    return renderedChildren && React.Children.only(renderedChildren);	// ensure only one children is returned
		
	}
	
}

export default Timer;
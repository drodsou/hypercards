import React from 'react';

class Loop extends React.Component {
	//props solo enteros
	
	constructor() {
		super()
		this.state = {
			enabled : false,
			t : 0,
			time : 1000,
			delay : 1000/60,			
			repeat : 'bounce',		// no, yes, bounce
			reverse : false
		}
	}
	
	toggleLoop() {
		//console.log('toggleLoop')
		if (this.state.enabled) {
			this.state.enabled = false
		}
		else {
			this.setState( {enabled : true} )
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
		
		return again;
	}
	
	render() {

		const renderedChildren = this.props.children({
			x: this.state.t/this.state.time, 
			toggle : this.toggleLoop.bind(this) 
		})
		
		if (this.calculateNextValue()) {
			setTimeout(()=>{
				this.setState(this.state)  // works with null?
			},this.state.delay)
		}
		
    return renderedChildren && React.Children.only(renderedChildren);	// ensure only one children is returned
		
	}
	
}

export default Loop;
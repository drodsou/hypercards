import React from 'react';

class Loop extends React.Component {
	//props solo enteros
	
	constructor() {
		super()
		this.state = {
			enabled : true,
			x : 0,
			from : 0,
			to : 59,
			step : 1,
			repeat : 'no',
			delay : 1000/60   // no, circular, bounce
		}
	}
	
	toggleLoop() {
		this.setState( {enabled : !this.state.enabled} )
	}
	
	preset
	
	calculateNextValue() {
		let st = this.state
		if (!st.enabled) return false;
		
		let again = false
		
		if (st.x != st.to) {
			st.x = st.x + st.step
			again = true
		} 
		else if (st.x == st.to) {
			if (st.repeat == 'bounce') {
				let tmpfrom = st.from
				st.from = st.to
				st.to = tmpfrom
				
				st.step = -st.step
				
				st.x = st.x + st.step
				again = true
			} 
			else if (st.repeat == 'circular') {
				st.x = st.from
				again = true
			}
		}
		return again;
	}
	
	render() {
		const renderedChildren = this.props.children({
			x: this.state.x, 
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
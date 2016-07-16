import React from 'react';
import ReactDOM from 'react-dom';

import {Motion, spring} from 'react-motion';
// In your render...

function renderTest () {
	/**/console.log('renderTest')
	
	const fn = (value) => {
		let styl= {
			width : '100px',
			height : '100px',
			overflow : 'hidden',
			transform: `rotate(${-50+value.x*5}deg)`,
			marginLeft : 10*value.x + 'px',
			backgroundColor : 'white',
			boxShadow: ' 0px 10px 10px 0px rgba(0, 0, 0, 0.2)'
		}
		return <div style={styl}>{value.x}</div>
	}
	
	ReactDOM.render( 
		<Motion 
				defaultStyle={{x: 0}} 
				style={ {x: spring(10,{stiffness: 100, damping: 10, precision:1})} }
		>
		  {fn}
		</Motion>
		,
		document.getElementById('container')
	);
}

// ----------------------------------------
class Ani extends React.Component {
	
	constructor() {
		super()
		this.state = {
			x : 0
		}
	}
	
	componentDidMount() {
		setInterval (()=>{
			this.setState({x:this.state.x+10})
			
		},500)
	}
	
	render() {
		return this.props.children(this.state)
	}
}


function renderTest2 () {
	/**/console.log('renderTest2')
	
	const fn = (value) => {
		console.log('value',value)
		let styl= {
			width : '30px',
			overflow : 'hidden',
			marginLeft : 10*value.x + 'px'
		}
		return <button style={styl}>{value.x}</button>
	}
	
	ReactDOM.render( 
		<Ani>
		  <button>{this.value.x}</button>
		</Ani>
		,
		document.getElementById('container')
	);
}

// ------------------------------------------

renderTest();	
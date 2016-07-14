import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

function renderTest (test) {
	ReactDOM.render( 
		(
		<MuiThemeProvider>
			{test}
		</MuiThemeProvider>
		),
		document.getElementById('container')
	);
}

// ------------------------------------------ TEST
// import test from 'view/component/Card-test'
// 
// //console.log('test.js', test.tested[0])
// renderTest(test.tested[0])

// ---------------





class Chirme extends React.Component {
	
	constructor () {
		console.log('constructor')
		super();
		console.log('constructor after super')
		this.state = {
			count : 0
		}
		
	}

	buttonClick(n) {
		console.log('buttonClick')
		this.setState({count : this.state.count+n})
	}
	
	render () {
		console.log('render')
		return(
			<div>
				<h1>{this.state.count}{this.props.count}</h1>
				{console.log('rendering\n-----------')}
				<button onClick={this.buttonClick.bind(this,1)}>Dalle 1</button>
				<button onClick={renderit.bind(this.state.count+2)}>Dalle 2</button>
			</div>
		)
	}
}

function renderit(n) {
	ReactDOM.render(<Chirme count={1}/>,	document.getElementById('container'))
	ReactDOM.render(<Chirme count={2}/>,	document.getElementById('container'))
}

renderit()



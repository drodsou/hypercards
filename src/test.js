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
import test from 'view/component/Card-test'

//console.log('test.js', test.tested[0])
renderTest(test.tested[0])




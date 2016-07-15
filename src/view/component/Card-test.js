import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
//import ReactDOMServer from 'react-dom/server';

import Test from './Card';   // <-----
if (!Test) throw ('UPPS: Error importing Test')



// ---------------------------------------- test props	
let props = {
	state : {
		id:1, 
		title:'titulo', 
		text:`
<p>textorellamente textuado; textorellamente textuado; textorellamente textuado; textorellamente textuado; textorellamente textuado; textorellamente textuado; textorellamente textuado; </p>

textorellamente textuado; textorellamente textuado; textorellamente textuado; textorellamente textuado; textorellamente textuado; textorellamente textuado; 
`, 
		open:true
	},
	
	action : {
		onClickCard : (e)=>{
			console.log('onClickCard')
		},	
		onClickButton : (e)=>{
			console.log('onClickButton')
			e.stopPropagation()
			props.state.open = !props.state.open 
			renderTest()
		} 		
	},
	
	style : {
		header : {
			
		}
	}
// ----------------------------------------------------	
}



function renderTest () {
	/**/console.log('renderTest')
	ReactDOM.render( 
		(
		<MuiThemeProvider>

			<Test 
				state={props.state} 
				action={props.action} 
				style={props.style}
			/>

		</MuiThemeProvider>
		),
		document.getElementById('container')
	);
}


renderTest();	


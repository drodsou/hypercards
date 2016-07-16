import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
//import ReactDOMServer from 'react-dom/server';

import Test from './Card';   // <-----
if (!Test) throw ('UPPS: Error importing Test')



// ---------------------------------------- test props	
let props = {
	nextState : [
		{
			id:0,
			title:'titulo1', 
			text:'textorellamente textuado; textorellamente textuado; textorellamente textuado; textorellamente textuado; textorellamente textuado; textorellamente textuado; textorellamente textuado. FIN',
			open:true
		},
		{
			id:1,
			title:'titulo2', 
			text:'gloperantemente le tex. gloperantemente le tex. gloperantemente le tex. gloperantemente le tex. gloperantemente le tex. gloperantemente le tex. gloperantemente le tex. gloperantemente le tex. gloperantemente le tex. gloperantemente le tex. gloperantemente le tex. gloperantemente le tex. gloperantemente le tex. gloperantemente le tex. gloperantemente le tex. gloperantemente le tex. gloperantemente le tex. gloperantemente le tex. FIN',
			open:true
		}	
	]	
	,
	
	action : {
		onClickCard : (e, ...args)=>{
			console.log('onClickCard', args)
		},	
		onClickButton : (e, id)=>{
			console.log('onClickButton', id)
			e.stopPropagation()
			props.nextState[id].open = !props.nextState[id].open 
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
			<div>
			<Test 
				nextState={props.nextState[0]} 
				action={props.action} 
				style={props.style}
			/>
			
			<Test 
				nextState={props.nextState[1]} 
				action={props.action} 
				style={props.style}
			/>
			</div>

		</MuiThemeProvider>
		),
		document.getElementById('container')
	);
}


renderTest();	


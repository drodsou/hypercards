import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
//import ReactDOMServer from 'react-dom/server';

import Test from './Card';   // <-----
if (!Test) throw ('UPPS: Error importing Test')



// ---------------------------------------- test props	
let props = {
	newState : [
		{
			id:0,
			title:'titulo0', 
			text:'textorellamente textuado; textorellamente textuado; textorellamente textuado; textorellamente textuado; textorellamente textuado; textorellamente textuado; textorellamente textuado. FIN',
			open:true
		}
		,
		{
			id:1,
			title:'titulo1', 
			text:'gloperantemente le tex. gloperantemente le tex. gloperantemente le tex. gloperantemente le tex. gloperantemente le tex. gloperantemente le tex. gloperantemente le tex. gloperantemente le tex. gloperantemente le tex. gloperantemente le tex. gloperantemente le tex. gloperantemente le tex. gloperantemente le tex. gloperantemente le tex. gloperantemente le tex. gloperantemente le tex. gloperantemente le tex. gloperantemente le tex. FIN',
			open:false
		}	
		,
		{
			id:2,
			title:'titulo2', 
			text:'gloperantemente le tex. gloperantemente le tex. gloperantemente le tex. gloperantemente le tex. gloperantemente le tex. gloperantemente le tex. gloperantemente le tex. gloperantemente le tex. gloperantemente le tex. gloperantemente le tex. gloperantemente le tex. gloperantemente le tex. gloperantemente le tex. gloperantemente le tex. gloperantemente le tex. gloperantemente le tex. gloperantemente le tex. gloperantemente le tex. FIN',
			open:true
		}			
		,
		{
			id:3,
			title:'titulo3', 
			text:'gloperantemente le tex. gloperantemente le tex. gloperantemente le tex. gloperantemente le tex. gloperantemente le tex. gloperantemente le tex. gloperantemente le tex. gloperantemente le tex. gloperantemente le tex. gloperantemente le tex. gloperantemente le tex. gloperantemente le tex. gloperantemente le tex. gloperantemente le tex. gloperantemente le tex. gloperantemente le tex. gloperantemente le tex. gloperantemente le tex. FIN',
			open:false
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
			props.newState[id].open = !props.newState[id].open 
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
	//console.log('Card-test:renderTest')
	ReactDOM.render( 
		(
		<MuiThemeProvider>
			<div>

			<Test 
				newState={props.newState[0]} 
				action={props.action} 
				style={props.style}
			/>		
			
			<Test 
				newState={props.newState[1]} 
				action={props.action} 
				style={props.style}
			/>

			<Test 
				newState={props.newState[2]} 
				action={props.action} 
				style={props.style}
			/>
			
			<Test 
				newState={props.newState[3]} 
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


import React from 'react';
import tester from 'lib/tester'
//import ReactDOMServer from 'react-dom/server';

import Card from './Card'
console.log('Card',Card)
// ------------------------------------------- 
let props = {
	
	state : {
		id:1, 
		title:'titulo', 
		text:'textorellamente textuado', 
		open:true
	},
	
	action : {
		onClickCard : tester.makeHandler('onClickCard') ,	// open/close
		onClickButton : tester.makeHandler('onClickButton') 		//add remove
	},
	
	style : {
		header : {
			backgroundColor: 'cyan'
		}
	}
	
}

tester.tested.push(
	<Card 
		state={props.state} 
		action={props.action} 
		style={props.style}
	/>
);
tester.expected.push('')

// -------------------------------------------

export default tester
	
	


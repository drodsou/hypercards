import React from 'react';
//import ReactDOMServer from 'react-dom/server';
let tested = []
let expected = []


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
		onClick : (a)=>console.log('onClick',a) ,	// open/close
		onDoubleClick : (a)=>console.log('onDoubleClick',a) 		//add remove
	},
	style : {
		container : {
			border: '1px solid red',
			backgroundColor : 'green' 	
		}
	}
}

tested.push(
	<Card 
		state={props.state} 
		action={props.action} 
		style={props.style}
	/>
);
expected.push('')

// -------------------------------------------

export default {tested, expected}
	
	


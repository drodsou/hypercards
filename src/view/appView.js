import React from 'react';
import ReactDOM from 'react-dom';
import themeColor from 'view/theme/color'

import {ChainCards, AllCards} from './appViewComponents'

//console.log('appView:AllCards',AllCards)

let style = {
	app : {
		display : 'flex',
		flexDirection : 'row',
		border : '10px solid ' + themeColor.primary
	},
	
	chaincards : {
		width : '50%',
		border : '10px solid red',
	},
	
	allcards : {
		width  : '50%'
	}
	
}


const render = (state, actions) => {
	
	ReactDOM.render(
		(
			<div id="app" style={style.app}>
				<ChainCards 
				  style = {style.chaincards}
					allCards = {state.allCards}
					chainCards = {state.chainCards}
					onMouseDown = {actions.removeCard}
				/>
				<AllCards 
					style = {style.allcards}
					allCards = {state.allCards}
					onMouseDown = {actions.addCard}		
				/>			
			</div>
		),
		document.getElementById('container')
	);
	
};

export default {render}

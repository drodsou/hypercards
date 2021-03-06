import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import themeColor from 'view/theme/color'
import {ChainCards, AllCards} from './appViewComponents'



//console.log('appView:AllCards',AllCards)

let style = {
	app : {
		display : 'flex',
		flexDirection : 'row',
		//border : '10px solid ' + themeColor.primary
	},
	
	chaincards : {
		flex:1,
		//width : '50%',
		borderRight : '1px solid grey'
	},
	
	allcards : {
		flex:1
		//width  : '50%'
	}
	
}


const render = (state, actions) => {
	
	ReactDOM.render(
		(
		<MuiThemeProvider>
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
		</MuiThemeProvider>
		),
		document.getElementById('container')
	);
	
};

export default {render}

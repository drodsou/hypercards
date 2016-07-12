import React from 'react';

export class Card extends React.Component {
	props : {
		state : {
			id:number, 
			title:string, 
			text:string, 
			open:boolean
		},
		action : {
			onClick : Function,	// open/close
			onDoubleClick :Function		//add remove
		}
	}
	
	react() {
		//style={height : this.props.cardData.open ? '' : '30px'}
		let state = this.props.state;
		let action = this.props.action;
		
		let text = '';
		if (state.open) {
			text = <p>{state.text}</p>
		} 
		
		return(
			<div 	
						onClick={ ()=>action.onClick(state.id) }
						onDoubleClick={ ()=>action.onDoubleClick(state.id) }>
				<h1>{state.title}</h1>
				{text}
			</div>
		)
	}
	
}
import React from 'react';
import deepExtend from 'deep-extend'

export default class Card extends React.Component {
	
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
		},
		style : Object
	}
	
	constructor() {
		_state = this.props.state;
		let action = this.props.action;
		
	  _style = 
		let style = {
			container : {
				backgroundColor : 'yellow',
				width : '400px'
			},
			header : {
				display:'flex',
				flexDirection : 'row',
				border: '1px solid black'
			},
			title : {
				width : '50%'
			},
			button :{
				width : '50px'
			},
			text : {}
		}
		deepExtend(style, this.props.style);

	}
	
	render() {
		//style={height : this.props.cardData.open ? '' : '30px'}

	
		
		/**/console.log('Card:sytle-assign', style)

		let text;
		if (state.open) {
			text = (
				<div style={style.text}>
					<p>{state.text}</p>
				</div>
			);
		} 

		//onDoubleClick={ ()=>action.onDoubleClick(state.id) }>		
		return (
			<div style={style.container}	
						onClick={ ()=>action.onClick(state.id) }
			>
				<div style={style.header}>
					<div style={style.title}>
						<h1>{state.title}</h1>
					</div>
					<div style={style.button}>
						<button>##</button>
					</div>
				</div>
				{text}
			</div>
		)
	}
	
}
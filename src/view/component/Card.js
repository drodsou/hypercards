import React from 'react';
import deepExtend from 'deep-extend'
import Icon1 from 'material-ui/svg-icons/action/eject';

// _priv = {	defaultStyle : {...} }

export default class Card extends React.Component {
	
	props : {
		state : {
			id:number, 
			title:string, 
			text:string, 
			open:boolean
		},
		action : {
			onClickCard : Function,	// open/close
			onClickButton :Function		//add remove
		},
		style : Object
	}
	
	// -----------------------------------
	//constructor() {}
	
	
	// -----------------------------------
	render() {
		//style={height : this.props.cardData.open ? '' : '30px'}
		const state = this.props.state;
		const action = this.props.action;
		let style = this.getDefaultStyle();	// 
		deepExtend(style, this.props.style);
			
		/**/console.log('Card:deepExtend', style)

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
						onClick={ (e)=>action.onClickCard(e,state.id,"patata") }
			>
				<div style={style.header}>
					<div style={style.title}>
						<h1>{state.title}</h1>
					</div>
					<div style={style.button}>
						<button onClick={ (e)=>action.onClickButton(e,state.id) }>
							<Icon1 style={ {width:'100%'} }/>
						</button>
					</div>
				</div>
				{text}
			</div>
		)
	}
	
	// -----------------------------------
	getDefaultStyle() {
		return {
				container : {
					backgroundColor : '#cccccc',
					width : '400px'
				},
				header : {
					display:'flex',
					flexDirection : 'row',
					border: '1px solid black'
				},
				title : {
					flex : 8
				},
				button :{
					flex : 2,					
					display:'flex',
					justifyContent: 'flex-end',
					backgroundColor : 'green'
				},
				text : {}
			}
	}
	
} // class

// Card.prototype.defaultStyle

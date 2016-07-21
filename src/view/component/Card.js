'use strict';

import React from 'react';
import deepExtend from 'deep-extend'
import Icon1 from 'material-ui/svg-icons/action/eject';

import Animation from 'lib/drs-react-animation';
import ease from 'lib/easing-functions-jquery'

// _priv = {	defaultStyle : {...} }

export default class Card extends React.Component {
	
	// Flow types
	props : {
		newState : {
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
	constructor() {
		//console.log('Card:constructor')
		super()
		this.state = {
			maxTextHeight : 200,
			open : false,
			animDirection : 0
		}
	}

	getDefaultStyle() {
		return {
				container : {
					marginTop : '20px',
					backgroundColor : 'white',
					boxShadow: ' 0px 10px 10px 0px rgba(0, 0, 0, 0.2)',
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
				text : {
					overflow: 'hidden',
					height : `${this.state.open ? this.state.maxTextHeight : 0}px`
					
				}
			}
	}

	
	// -----------------------------------
	render() {
		//style={height : this.props.cardData.open ? '' : '30px'}
		const newState = this.props.newState;
		const action = this.props.action;
		let style = this.getDefaultStyle();	// 
		deepExtend(style, this.props.style);

		

		return (
			<div style={style.container}	
						onClick={ (e)=>action.onClickCard(e,newState.id,"patata") }
			>
				<div style={style.header}>
					<div style={style.title}>
						<h1>{newState.title}</h1>
					</div>
					<div style={style.button}>
						<button onClick={ (e)=>action.onClickButton(e,newState.id) }>
							<Icon1 style={ {width:'100%'} }/>
						</button>
					</div>
				</div>
				
				<Animation newState={ {duration:3000, rate: 1000/60} }>
					{ (anim) => { 
							let newStyleText = {}
							Object.assign(newStyleText, style.text)  // prevent mutation warning
							
							if (anim.firstRender) {
								// firstRender
								this.state.open = newState.open;
								this.state.animDirection = 0
								newStyleText.height = newState.open ? this.state.maxTextHeight : 0
								anim.skip()
							} else {
								if (anim.firstFrame) {
									// first frame
									//console.log('Card:firstFrame', newState.open, this.state.open)
									this.state.animDirection = 0
									if (newState.open && !this.state.open) this.state.animDirection = 1
									if (!newState.open && this.state.open) this.state.animDirection = -1
									this.state.open = newState.open;
									//console.log('Card:animDirection', this.state.animDirection)
									if (this.state.animDirection == 0) {
										//style.text.height = newState.open ? this.state.maxTextHeight : 0
										anim.skip()
										console.log('Card:skipping',newState.id)
									}
								} else {
									// rest of frames
									//let y = (this.state.animDirection == 1) ? anim.x : (1-anim.x)
									let y = (this.state.animDirection == 1) ? ease.easeOutBounce(anim.x) : ease.easeInBounce(1-anim.x)
									newStyleText.height = y * this.state.maxTextHeight
								}
								
							}

							return (
								<div style={newStyleText}>
									<p>{newState.text}</p>
								</div>
							)
						} 
					}
				</Animation>
				
			</div>
		)
	}
	
	// -----------------------------------
	
	
} // class

// Card.prototype.defaultStyle

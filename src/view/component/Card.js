import React from 'react';
import deepExtend from 'deep-extend'
import Icon1 from 'material-ui/svg-icons/action/eject';

import Timer from 'view/component/Timer';
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
		/**/console.log('Card:constructor')
		super()
		this.state = {
			maxTextHeight : 200,
			open : false,
			opening : false,
			firstTime : true
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
				
				<Timer newState={ {duration:1000, t:1000, rate: 1000/5} }>
					{ (timer)=>{ 
							// first time always rendered even if timer == disabled
							if (!this.state.open && newState.open) this.state.opening = true
							if (this.state.open && !newState.open) this.state.opening = false
							this.state.open = newState.open
							
							if (false && this.state.firstTime) {
								this.state.firstTime = false
							} else {
								let y = this.state.opening ? ease.easeOutBounce(timer.x) : ease.easeInBounce(1-timer.x)
								style.text.height = y * this.state.maxTextHeight
								this.state.firstTime = false
							}
							//style.text.transform = `rotate(${MAXTEXT-motion.v}deg)`
							return (
								<div style={style.text}>
									<p>{newState.text}</p>
								</div>
							)
						} 
					}
				</Timer>
				
			</div>
		)
	}
	
	// -----------------------------------
	
	
} // class

// Card.prototype.defaultStyle

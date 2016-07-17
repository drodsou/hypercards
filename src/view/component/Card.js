import React from 'react';
import deepExtend from 'deep-extend'
import Icon1 from 'material-ui/svg-icons/action/eject';
import {Motion, spring} from 'react-motion';

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
			textOpen : 100,
			isTextOpen : false
		}
	}
	
	// animate () {
	// 	let v = this.state.textOpen;
	// 	//console.log('animate',v)
	// 	if (this.props.newState.open) this.setState({textOpen: v+10})
	// 	if (!this.props.newState.open) this.setState({textOpen: v-10})
	// }
	
	// -----------------------------------
	render() {
		//style={height : this.props.cardData.open ? '' : '30px'}
		const newState = this.props.newState;
		const action = this.props.action;
		let style = this.getDefaultStyle();	// 
		deepExtend(style, this.props.style);
		
		//console.log('Card:deepExtend', style)

		const MAXTEXT = 200;
		let textAnim = {start:0, end:0, stiffness:1000, damping:50}
		if (this.state.isTextOpen) textAnim.start = MAXTEXT
		if (newState.open) {
				textAnim.end = MAXTEXT
				textAnim.stiffness=200
				textAnim.damping = 30
		}
		

		//onDoubleClick={ ()=>action.onDoubleClick(newState.id) }>		
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
				<Motion 
						defaultStyle={{v: textAnim.start}} 
						style={ {v: spring(textAnim.end,{stiffness: textAnim.stiffness, damping: textAnim.damping, precision:10})} }
				>
					{ (motion)=>{ 
							style.text.height = motion.v
							if (motion.v < MAXTEXT/2) style.text.marginLeft = '400px'
							else style.text.marginLeft = `${MAXTEXT+40-motion.v}`
							//style.text.transform = `rotate(${MAXTEXT-motion.v}deg)`
							return (
								<div style={style.text}>
									<p>{newState.text}</p>
								</div>
							)
						} 
					}
				</Motion>
				
			</div>
		)
	}
	
	// -----------------------------------
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
					overflow: 'hidden'
					
				}
			}
	}
	
} // class

// Card.prototype.defaultStyle

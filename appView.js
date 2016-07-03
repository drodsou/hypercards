import React from 'react';
import ReactDOM from 'react-dom';

// ----------------------------------- REACT COMPONENTS DEFINITION

/*********************
Props:
  allCards: [{title, txt}]
	onMouseDown : fn (ndx: allCardsArrayIndex)
*/
class AllCards extends React.Component {
	
	render() {
		let rows = []
		this.props.allCards.forEach( 
			(r,ndx)=>{
				rows.push(
					<div 	key={ndx} 
								className="card-open" 
								onMouseDown={ ()=>this.props.onMouseDown(ndx) }>
						<h1>{r.title}</h1>
						<p>{r.text}</p>
					</div>
				);
			}
		);
		
		return <div id="allcards">{rows}</div>
	}
}


/*****
Props:
  allCards : {title, txt}
	chainCards : [] 
	onMouseDown : fn(rNdx)
*/
class ChainCards extends React.Component {
	
	render() {
		let rows = []
		this.props.chainCards.forEach( 
			(cNdx,rNdx)=>{
				rows.push(
					<div 	key={rNdx} 
								className="card-open" 
								onMouseDown={ ()=>this.props.onMouseDown(rNdx) }>
					>
						<h1>{this.props.allCards[cNdx].title}</h1>
						<p>{this.props.allCards[cNdx].text}</p>
					</div>
				);
			}
		);
		
		return <div id="chaincards">{rows}</div>
	}
}



//----------------------------------------- RENDER INSTRUCTIONS

const render = (state, actions) => {

	ReactDOM.render(
		<AllCards 
			allCards = {state.allCards}
			onMouseDown = {actions.doAddCard}		// {actions.doAddCard.bind(actions)}
		/>,
		document.getElementById('cards')
	);

	ReactDOM.render(
		<ChainCards
			allCards = {state.allCards}
			chainCards = {state.chainCards}
			onMouseDown = {actions.doRemoveCard}
		/>,
		document.getElementById('chain')
	);
	
};

export default {render}

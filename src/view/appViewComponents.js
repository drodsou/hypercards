import React from 'react';

// ----------------------------------- REACT COMPONENTS DEFINITION
// const App = (props) => (
// 	<h1>App container</h1>
// )



/*********************
Props:
  allCards: [{title, txt}]
	onMouseDown : fn (ndx: allCardsArrayIndex)
*/
export class AllCards extends React.Component {
	//flowtypes
	props : {
		allCards : Array<{title:string, text:string}>
	}

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
		
		return <div id="allcards" style={this.props.style}>{rows}</div>
	}
}


/*****
Props:
  allCards : {title, txt}
	chainCards : [] 
	onMouseDown : fn(rNdx)
*/
export class ChainCards extends React.Component {
	
	render() {
		let rows = []
		this.props.chainCards.forEach( 
			(cNdx,rNdx)=>{
				rows.push(
					<div 	key={rNdx} 
								className="card-open" 
								onMouseDown={ ()=>this.props.onMouseDown(rNdx) }>
						<h1>{this.props.allCards[cNdx].title}</h1>
						<p>{this.props.allCards[cNdx].text}</p>
					</div>
				);
			}
		);
		
		return <div id="chaincards" style={this.props.style} >{rows}</div>
	}
}




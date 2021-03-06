import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Snackbar from 'material-ui/Snackbar';
import Icon1 from 'material-ui/svg-icons/action/donut-small';


//RaisedButton.defaultProps.disableTouchRipple = true;
//import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
//import getMuiTheme from 'material-ui/styles/getMuiTheme';


//import { Button, Glyphicon, ButtonToolbar, MenuItem, SplitButton } from 'react-bootstrap';




export class AllCards extends React.Component {
	//flowtypes
	props : {
		allCards : Array<{title : string, text : string}>,
		onMouseDown : Function
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
		
		return (
			<div style={this.props.style}> 
				<div id="allcards" >{rows}</div>  

				<RaisedButton>Material!</RaisedButton>
				<Icon1 />
	
			</div>
		)
	}
}


// <Snackbar
// 	open={true}
// 	message="Hola Manola"
// 	action="undo"
// 	autoHideDuration={1000}
// ></Snackbar>




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




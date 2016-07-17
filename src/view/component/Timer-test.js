import React from 'react';
import ReactDOM from 'react-dom';
//import ReactDOMServer from 'react-dom/server';

import Test from './Timer';   // <-----
if (!Test) throw ('UPPS: Error importing Test')

let props = {
	newState : {
	}
	
}

// ------------
var canvas = document.createElement('canvas');
canvas.id="canvas"
canvas.style.border = '1px solid black'
canvas.style.position = 'absolute'
canvas.style.top = '200px'
document.body.appendChild(canvas);


var ctx = canvas.getContext("2d");
ctx.fillStyle = "#FF0000";

let f1 = (x)=>Math.sin(2*Math.PI*x)
let f2 = (x)=>Math.sin(Math.PI*x)
let f3 = (x)=>Math.log(x*2)
let f4 = (x)=>(x*x)

let fn = f4

// ---------------
let _x = 0
function drawCanvas(y) {
	_x += 1
	ctx.fillRect(_x, -y/2+125, 2,2); // fill in the pixel at (10,10)

	//return y
}

// ---

function renderTest () {
	/**/console.log('renderTest')
	ReactDOM.render( 
		(
		<Test>
			{ 
				(loop)=>{
					//console.log(loop)
					let y = 125*fn(loop.x) + 100  // loop.fnX
					drawCanvas(y)
					let divstyl = {
						width:'50px', 
						height:'50px',
						backgroundColor : 'red',
						marginTop:'100px',
						marginLeft:`${y}px`
					}
						
					return (
						<div>
							<button onClick={loop.toggle} style={{width:'50px'}}
							>
								Dalle
							</button> 
							<div style={divstyl}></div>
						</div>
					)
				}
			}
		</Test>
		),
		document.getElementById('container')
	);
}


renderTest();	


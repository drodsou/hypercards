import React from 'react';
import ReactDOM from 'react-dom';
import ease from 'lib/easing-functions-jquery'
//import ReactDOMServer from 'react-dom/server';

import Test from 'lib/drs-react-animation';   // <-----

if (!Test) throw ('UPPS: Error importing Test')

let props = {
	newState : {
	}
	
}

// ------------
var canvas = document.createElement('canvas');
canvas.id="canvas"
canvas.style.border = '1px solid black'
canvas.style.left = '20px'
canvas.style.position = 'absolute'
canvas.style.top = '80px'
canvas.style.width = '300px'
canvas.style.height = '300px'
document.body.appendChild(canvas);


var ctx = canvas.getContext("2d");
ctx.fillStyle = "#FF0000";

let f0 = x=>x
let f1 = (x)=>Math.sin(2*Math.PI*x)/2+.5  //sin
let f2 = (x)=>(Math.log(x)+4)/4	
let f3 = (x)=>(x*x)


let fn = f1 //ease.easeInOutElastic

// ---------------
let _x = 0
function drawCanvas(y) {
	_x += 2
	ctx.fillRect(_x, -y/3+125, 2,2); // fill in the pixel at (10,10)

	//return y
}

// ---

function renderTest () {
	/**/console.log('renderTest')
	ReactDOM.render( 
		(
		<Test newState={{rate:1000/60, duration: 500, repeat:'no'  }}>
			{ 
				(anim)=>{
					//console.log(anim)
					let y = 250*fn(anim.x)   // anim.fnX
					/**/console.log('Timer-test:x,y',anim.x,y)
					drawCanvas(y)
					let divstyl = {
						width:'50px', 
						height:'50px',
						backgroundColor : 'red',
						//transition: `all ${1000/60}ms linear`,
						marginTop:`${260-y}px`,
						marginLeft:'320px',
						//boxShadow : `${y/250*10}px ${y/250*10}px 10px gray`
					}
						
					return (
						<div>
							<button onClick={anim.toggle} style={{width:'300px', height:'50px'}}
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


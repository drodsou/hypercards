import React from 'react';
import ReactDOM from 'react-dom';
//import ReactDOMServer from 'react-dom/server';

import Test from './Loop';   // <-----
if (!Test) throw ('UPPS: Error importing Test')

let props = {
	newState : {
		from : 0,
		to : 10,
		step : 1,
		repeat:'no',
		delay : 300
	}
	
}


function renderTest () {
	/**/console.log('renderTest')
	ReactDOM.render( 
		(
		<Test>
			{ 
				(loop)=>{
					return <button onClick={loop.toogle}>{loop.x}</button> 
				}
			}
		</Test>
		),
		document.getElementById('container')
	);
}


renderTest();	


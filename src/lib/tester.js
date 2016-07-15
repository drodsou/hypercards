let tested = []

let expected = []

let makeHandler = (label, fn) =>{
	return function(e,...args)  {
		//console.log('e',e)
		e.stopPropagation()
		console.log(label,args)
		if (fn) fn();
	}
}

export default {tested, expected, makeHandler}

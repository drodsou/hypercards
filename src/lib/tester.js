let tested = []

let expected = []

let makeHandler = (label) =>{
	return function(e,...args)  {
		//console.log('e',e)
		e.stopPropagation()
		console.log(label,args)
	}
}

export default {tested, expected, makeHandler}

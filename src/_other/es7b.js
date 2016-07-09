// Decorator function for logging
// function logger(target, name, descriptor) {
// 
//   // obtain the original function
//   let fn = descriptor.value;
// 
//   // create a new function that sandwiches
//   // the call to our original function between
//   // two logging statements
//   let newFn  = function() {
//     console.log('starting %s', name);
//     fn.apply(target, arguments);
//     console.log('ending %s', name);
//   };
// 
//   // we then overwrite the origin descriptor value
//   // and return the new descriptor
//   descriptor.value = newFn;
//   return descriptor;
// }



// decorator def
// function typecheck(obj) {
//   return (target, name, descriptor) =>  {
//     console.log('typecheck:name',name)
//   }
// }

//@typecheck({uno:'str'})

// function checktype() {
//   let a = arguments[0];
//   for (let i=0; i<a.length; i++) {
//       
//       console.log('tipo',i,typeof a[i], a[i] )
//   }
//   
// }

// ------------------------------------------------------

class Bicho {
  constructor(bicho) {
    let _bicho = bicho
    this.getBicho =  () => _bicho
  }
}


function patata (uno:Bicho, dos) {
  console.log('patata:',uno.getBicho(), dos)
}


let chirri = new Bicho('flipper')

patata (chirri,2)


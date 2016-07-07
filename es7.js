
// decorator def
function addCost(sum) {
  return (target) =>  {
    target.prototype.cost = sum
  }
}



@addCost(200)
class Cellphone {
  constructor() {
    this.model = "Samsung"
    this.storage = 16
  }
	
	b = "B"   // como this.b en constructor
	
	jonch = () => this.model; //bound
	
	jinch () {
		return this.model
	}
	

}


var phone = new Cellphone()
console.log('ES7',phone, phone.jonch.call(this))
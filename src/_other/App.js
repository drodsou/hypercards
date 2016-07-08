import React from 'react';

class App extends React.Component {
	
	constructor() {
		super()
		this.state = {data: "inicial"};
  }
	
	
	render() {
		return <h1>Hello {this.props.name} ({this.state.data}) </h1>
	}
}

export default App

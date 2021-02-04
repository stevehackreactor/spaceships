import React, { Component } from 'react';

// TO-DO
// [ ] finish implementing the form submission

class SpaceshipForm extends Component {
  constructor(props) {
    super(props);

    // Set placeholder text in state, just for our purposes
    this.state = {
      name: '',
      color: '',
      fleet: 'A',
    };
  };
  //

  nameChange(e) {
    // FIX-ME
    // set this.state.name = whatever is in thename field

    this.setState({
      name: e.target.value
    })
    console.log(e.target.value);
  }



  colorChange(e) {
    // FIX-ME
    this.setState({
      color: e.target.value
    })
  }

  fleetChange(e) {
    this.setState({
      fleet: e.target.value
    })
    // console.log(e.target.value);
  }

  submitShip(e) {
    e.preventDefault();
    // FIX-ME... hint: We have a submit method in App.js that might be useful
    this.props.handleSubmitNewSpaceship(this.state)
  }





  render() {
    return (
      // We can bind context here, too (instead of in the constructor)
      <form onSubmit={this.submitShip.bind(this)}>
        <input onChange={this.nameChange.bind(this)} value={this.state.name} placeholder="Name?" />
        <input onChange={this.colorChange.bind(this)} value={this.state.color} placeholder="Color?" />
        <label>Pick a fleet:</label>
        <select onChange={this.fleetChange.bind(this)} value={this.state.fleet}>
          <option>A</option>
          <option>B</option>
          <option>C</option>
        </select>
        <button type="submit">Add the Ship!</button>
      </form>
    )
  }
}

export default SpaceshipForm;
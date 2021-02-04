import React, { Component } from 'react';

import SpaceshipForm from './SpaceshipForm.js'
import SpaceshipList from './SpaceshipList.js'

// TO-DO
// [ ] Determine a state for the App component(hint: use the dummy data file)
// [ ] Render the SpaceshipList & SpaceshipForm components
// [ ] Finish the handleSubmitNewSpaceship method

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ships: [],
      aliens: []
    };
    this.handleSubmitNewSpaceship = this.handleSubmitNewSpaceship.bind(this);
  }

  handleSubmitNewSpaceship(ship) {
    this.setState({
      ships: [...this.state.ships, ship]
    })
  }

  render() {
    return (
      <div>
        <SpaceshipForm handleSubmitNewSpaceship={this.handleSubmitNewSpaceship}/>
        <SpaceshipList ships={this.state.ships}/>
      </div>
    );
  }
}
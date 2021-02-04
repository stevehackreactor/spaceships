import React from 'react';
import Spaceship from './Spaceship';

// TO-DO
// [ ] implement a map method for rendering the spaceship list

// Destructuring props, because we can
const SpaceshipList = ({ ships }) => {




  return (
    <div>
      <h2>
        Our Ships!
      </h2>
      <ul>
        {ships.map(ship => <Spaceship ship={ship}/>)}



        {/* This is how we are dynamically rendering each spaceship */}
        {/* The key here is only to track individual elements.
        We would ONLY want to use the id, but because of the lack of an id when adding a new ship,
        we are doing some (bad) shortcuts. Never do the key as the example here! Use the actual id.
        We'll probably fix this once we use "real" data (and not dummy data).
        */}
        {/* FIX-ME */}
      </ul>
    </div>
  )
};

export default SpaceshipList;

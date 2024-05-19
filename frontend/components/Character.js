import React from 'react'
import { useState } from 'react';

function Character({ person }) { // ❗ Add the props
  // ❗ Create a state to hold whether the homeworld is rendering or not
  // ❗ Create a "toggle" click handler to show or remove the homeworld

  const [toggleOn, setToggleOn] = useState(false);

  // const toggleMeOn = () => {
  //   setToggleOn(true);
  //   return (
  //     <p>{person.homeworld}</p>
  //   )
  // };

  // const toggleMeOff = () => {
  //   setToggleOn(false);
  // }

  const toggleMe = () => {
    if(toggleOn) {
      setToggleOn(false)
    } else if(!toggleOn) {
      setToggleOn(true)
    }
  }

  console.log(person.name)
  return (
    <div className='character-card' onClick={() => toggleMe()}>
      {/* Use the same markup with the same attributes as in the mock */
        <h3 className='character-name'>{person.name}</h3>
      }
      {toggleOn && <p>Planet: <span className='character-planet' color='black'>{person.homeworld}</span></p>}
    </div>
  )
}

export default Character

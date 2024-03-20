import React from 'react';
import axios from 'axios';
import { useState } from 'react';
export function MainControls({setRandomcats}) {
  const [numberOfCats, setNumberOfCats] = useState(0);

    function displayRandomCats(event) {
        event.preventDefault();
        console.log('numberOfCats', numberOfCats)
          axios.get(`https://api.thecatapi.com/v1/images/search?limit=${numberOfCats.toString()}`).then(randomCats => {
          setRandomcats(randomCats.data);
          })
          .catch(err => {
            console.log('err', err);
          })
      }
    
      function defineNumberOfCats(event) {
        event.preventDefault();
        setNumberOfCats(event.target.value)
      }
    return (
        <div className='main'>
        <input autofocus type='number' placeholder='Type the number of cats' max="10" className='input-primary' onChange={(event) => defineNumberOfCats(event)}/>
        <button onClick={(event) => displayRandomCats(event)} className='button-primary' disabled={numberOfCats < 1}>
          Display {numberOfCats} random cat{numberOfCats > 1 ? "s" : ""}
        </button>
      </div>
    )
}
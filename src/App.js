import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { CatsList } from './components/CatsList';

function App() {
  const [randomCats, setRandomcats] = useState([]);
  const [numberOfCats, setNumberOfCats] = useState(0);
  function displayRandomCats(event) {
    event.preventDefault();
    console.log('numberOfCats', numberOfCats)
      axios.get(`https://api.thecatapi.com/v1/images/search?limit=${numberOfCats.toString()}`).then(randomCats => {
      console.log('https://api.thecatapi.com/v1/images/search?limit=${numberOfCats.toString()}', `https://api.thecatapi.com/v1/images/search?limit=${numberOfCats.toString()}`)
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
    <div className="App">
      <div className='main'>
        <input autofocus type='number' placeholder='Type the number of cats' max="10" className='input-primary' onChange={(event) => defineNumberOfCats(event)}/>
        <button onClick={(event) => displayRandomCats(event)} className='button-primary' disabled={numberOfCats < 1}>
          Display {numberOfCats} random cat{numberOfCats > 1 ? "s" : ""}
        </button>
      </div>
      <CatsList randomCats={randomCats} setRandomcats={setRandomcats}/>
    </div>
  );
}



export default App;

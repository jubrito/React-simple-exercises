import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { CatsList } from './components/CatsList';
import { MainControls } from './components/MainControls';

function App() {
  const [randomCats, setRandomcats] = useState([]);
    return (
    <div className="App">
      <MainControls setRandomcats={setRandomcats}/>
      <CatsList randomCats={randomCats} setRandomcats={setRandomcats}/>
    </div>
  );
}



export default App;

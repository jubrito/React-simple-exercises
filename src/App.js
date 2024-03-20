import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { RandomCats } from './components/RandomCats/RandomCats';
import { RhymesSearch } from './components/RhymesSearch/RhymesSearch';
import { FormPlanet } from './components/PlanetSearch/FormPlanet';

function App() {
    return (
    <div className="App">
      <Navbar />
      <Router>
        <Routes>
          <Route path="/randomCats" element={< RandomCats />} />
          <Route path="/rhymesSearch" element={< RhymesSearch />} />
          <Route path="/planetSearch" element={< FormPlanet />} />
        </Routes>
      </Router>
    </div>
  );
}



export default App;

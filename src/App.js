import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { RandomCats } from './components/RandomCats/RandomCats';

function App() {
    return (
    <div className="App">
      <Navbar />
      <Router>
        <Routes>
          <Route path="/randomCats" element={< RandomCats />} />
        </Routes>
      </Router>
    </div>
  );
}



export default App;

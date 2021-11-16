import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import { HomePage } from './components/pages/home-page';
import { Navbar } from './components/navbar/index';

function App() {
  return (
    <div className="App">
      <Router>

        <Navbar />

        <Routes>
          <Route exact path="/">
            <HomePage></HomePage>
          </Route>
        </Routes>

      </Router>
    </div>
  );
}

export default App;

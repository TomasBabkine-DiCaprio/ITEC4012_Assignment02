import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

// Components
import { HomePage } from './components/pages/home-page';
import { ProfilePage } from './components/pages/profile-page';
import { Navbar } from './components/Navbar/index';

function App() {
  return (
    <div className="App">
      <Router>

        <Navbar />
        
        <Switch>
          <Route exact path="/">
            <HomePage></HomePage>
          </Route>
          <Route exact path="/profile">
            <ProfilePage></ProfilePage>
          </Route>
        </Switch>

      </Router>
    </div>
  );
}

export default App;

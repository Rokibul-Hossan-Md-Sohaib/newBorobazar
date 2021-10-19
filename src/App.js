import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
// import { BrowserRouter as Router } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Router>
         <Switch>
          <Route path="/">
          <Header/>
          </Route>
          
        </Switch>
     
    </Router>
     
    </div>
  );
}

export default App;

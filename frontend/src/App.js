import "./App.css";
import { BrowserRouter as Router,Switch,Route } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import Singin from "./components/pages/Singin";
import Register from "./components/pages/Register";
import About from "./components/pages/About";
import Explore from "./components/pages/Explore";
import Verify from "./components/pages/Verify";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path='/' component={HomePage} exact/>
        <Route path='/signin' component={Singin} exact/>
        <Route path='/register' component={Register} exact/>
        <Route path ='/explore' component = {Explore} exact/>
        <Route path ='/about' component = {About} exact />
        <Route path ='/verify' component = {Verify} exact />
      </Switch>
      
    </Router>
  );
};

export default App;

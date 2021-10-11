import "./App.css";
import { BrowserRouter as Router,Switch,Route } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import Singin from "./components/pages/Singin";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path='/' component={HomePage} exact/>
        <Route path='/signin' component={Singin} exact/>
      </Switch>
      
    </Router>
  );
};

export default App;

import "./App.css";
import { BrowserRouter as Router,Switch,Route } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import Singin from "./components/pages/Singin";
import Register from "./components/pages/Register";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path='/' component={HomePage} exact/>
        <Route path='/signin' component={Singin} exact/>
        <Route path='/register' component={Register} exact/>
      </Switch>
      
    </Router>
  );
};

export default App;

import Nav from './component/nav';
import Footer from './component/footer';
import Home from './component/home';
import About from "./component/about";
import Project from "./component/project";
import Contact from './component/contact';

import {BrowserRouter as Router, Switch,Route} from 'react-router-dom'


import './App.css';


function App() {
  return (
    <Router>
      <div>
        <Nav/>
          <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/about' component={About}/>
            <Route path='/project' component={Project}/>
            <Route path='/contact' component={Contact}/>
          </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;

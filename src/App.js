import Nav from './component/nav';
import Footer from './component/footer';
import Home from './component/home';
import About from "./component/about";
import Project from "./component/project";
import Contact from './component/contact';

import {BrowserRouter as Router, Switch,Route, Redirect} from 'react-router-dom'


import './App.css';


function App() {
  return (
    <Router>

      <div>

        <Nav/>

          <Switch>

            <Route path='/ ' exact>
              <Home/>
            </Route>

            <Route path='/about'>
              <About/>
            </Route>
            
            <Route path='/project'>
              <Project/>
            </Route>

            <Route path='/contact'>
              <Contact/>
            </Route>

            <Redirect to="/ " />

          </Switch>

        <Footer/>

      </div>

    </Router>
  );
}

export default App;

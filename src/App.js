import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';

import Home from './pages/Home.js';
import About from './pages/About.js';
import Projects from './pages/Projects.js';
import Contact from './pages/Contact.js';
import './App.css';



export default function App() {
  return (
    <Router>
      <div>
        <header>
          <nav>
            <ul>
              <li>
                <Link to="/" style={{
                  textDecoration: 'none',
                color:"#cccccc",
               fontWeight:'bold',
             textTransform:'uppercase'}}>Home</Link>
              </li>
              <li>
                <Link to="/about"style={{
                  textDecoration: 'none',
                color:"#cccccc",
              fontWeight:'bold',
             textTransform:'uppercase' }}>About</Link>
              </li>
              <li>
                <Link to="/projects"style={{
                  textDecoration: 'none',
                color:"#cccccc",
              fontWeight:'bold',
             textTransform:'uppercase' }}>Projects</Link>
              </li>
              <li>
                <Link to="/contact"style={{
                  textDecoration: 'none',
                color:"#cccccc",
              fontWeight:'bold',
             textTransform:'uppercase' }}>Contact</Link>
              </li>
            </ul>
          </nav>
        </header>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <main>
          <Switch>
            <Route path="/about">
              <About/>
            </Route>
            <Route path="/projects">
              <Projects/>
            </Route>
            <Route path="/contact">
              <Contact/>
            </Route>
            <Route path="/">
              <Home/>
            </Route>

          </Switch>
        </main>
        <footer>
          &copy; 2021
        </footer>
      </div>
    </Router>
  );
}

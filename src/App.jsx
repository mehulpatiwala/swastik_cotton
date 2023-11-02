
import './App.css'
import Home from './components/Home/Home'
import About from './components/About/About'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Products from './components/products/products';
import Contact from './components/Contact/Contact';
function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/products'>
            <Products />
          </Route>
          <Route path='/contact'>
            <Contact />
          </Route>
        </Switch>
      </Router>
    </>
  )
}

export default App

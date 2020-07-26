import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import HelloWorld from './Components/HelloWorld'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './Views/Home'
import About from './Views/About'
import ContactUs from './Views/ContactUs'

function App() {
  return (
   <div>
    <Router>
    <Header />

    <div className="p-3">
     <Switch>
       <Route exact path="/">
          <Home />
       </Route>
       <Route path="/about">
          <About />
       </Route>
       <Route path="/contact-us">
          <ContactUs />
       </Route>
     </Switch>
    </div>

    </Router>
     <Footer />
   </div>
  );
}

export default App;

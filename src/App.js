import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from './components/header/index';
import Footer from './components/footer/index';

import Home from './views/home/index';
import About from './views/about/index';
import Work from './views/work/index';
import Contact from './views/contact/index';


function App() {
  return (
    <main>
      <Router>
        <Header></Header>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/work" component={Work} />
        <Route path='/contact' component={Contact} />
      </Router>
      <Footer />
    </main>
  );
}

export default App;

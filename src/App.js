import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './components/Footer';
import NavMenu from './components/NavMenu';
import ScrollToTop from './components/ScrollToTop';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Projects from './pages/Projects';

export default function App() {
  return (
    <>
      <Router>
        <NavMenu />
        <ScrollToTop />
        <Switch>
          <Route path="/portfolio/about">
            <About />
          </Route>
          <Route path="/portfolio/contact">
            <Contact />
          </Route>
          <Route path="/portfolio/projects">
            <Projects />
          </Route>
          <Route path="/portfolio/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

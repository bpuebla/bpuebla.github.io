import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage';
import AboutPage from './public/about.html'; // Placeholder for About component
import ServicesPage from './public/services.html'; // Placeholder for Services component
import ContactPage from './public/contact.html'; // Placeholder for Contact component

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/services" component={ServicesPage} />
        <Route path="/contact" component={ContactPage} />
      </Switch>
    </Router>
  );
};

export default App;
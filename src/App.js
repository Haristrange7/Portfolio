import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutUs from './Pages/AboutUs';


function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Hero} />
          <Route path="/about-us" component={AboutUs} />
       
      
        </Switch>
      </div>
    </Router>
  );
}

export default App;

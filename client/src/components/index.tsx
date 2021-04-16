import React from 'react';
import { Link, BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';

function App() {
  return (
   <Router>
     <Switch>
       <Route path="/" component={Home} />
     </Switch>
   </Router>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Browse from './components/browse/browse';
import Form from './components/form/form';
import Profile from './components/profile/Profile';

function App() {
  return (
    <Router>
      <Route exact path="/" component={Browse} />
      <Route exact path="/form" component={Form} />
      <Route exact path="/comp/:id" component={Profile} />
    </Router>
  );
}

export default App;

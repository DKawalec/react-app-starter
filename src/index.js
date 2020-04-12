import React from 'react';
import { render } from 'react-dom';
import {
  BrowserRouter as Router,
  Switch
} from 'react-router-dom';
import routes from './routes';

render(
  <Router>
    <Switch>
      {routes}
    </Switch>
  </Router>,
  document.getElementById('app')
);

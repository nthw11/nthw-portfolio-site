import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Portfolio from '../pages/Portfolio';
import Blogs from '../pages/blog/Blogs';
import Contact from '../pages/Contact';

const Routes = () => (
  <Switch>
    <Route exact path='/' component={Home} />
    <Route path='/About' component={About} />
    <Route path='/Portfolio' component={Portfolio} />
    <Route path='/Blogs' component={Blogs} />
    <Route path='/Contact' component={Contact} />
  </Switch>
);

export default Routes;

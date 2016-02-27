'use strict';

var React = require('react');
var Router = require('react-router');

var App = require('./views/app.jsx');
var Home = require('./views/home.jsx');
var About = require('./views/about.jsx');
var Signup = require('./views/signup.jsx');
var Search = require('./views/search.jsx');

var routes = module.exports = (
  <Router.Route path='/' handler={App}>
    <Router.DefaultRoute name='home' handler={Home} />
    <Router.Route name='about' handler={About} />
    <Router.Route name='signup' handler={Signup} />
    <Router.Route name='search' handler={Search} />
  </Router.Route>
);

'use strict';

// make `.jsx` file requirable by node
require('node-jsx').install();

var path = require('path');
var express = require('express');
var renderer = require('react-engine');

var app = express();

// create the view engine with `react-engine`
var engine = renderer.server.create({
  routes: require(path.join(__dirname + '/public/routes.jsx')),
  routesFilePath: path.join(__dirname + '/public/routes.jsx')
});

// set the engine
app.engine('.jsx', engine);

// set the view directory
app.set('views', __dirname + '/public/views');

// set jsx as the view engine
app.set('view engine', 'jsx');

// finally, set the custom view
app.set('view', renderer.expressView);

//expose public folder as static assets
app.use(express.static(__dirname + '/public'));

// TODO: better sharing with client side react-routers
var urls = ['/', '/about', '/signup', '/search'];
urls.forEach(function(u) {
  app.get(u, function(req, res) {
    console.log('process', req.url);
    res.render(req.url, {
      title: 'Sample App',
      name: 'user_1234',
      agents: ['Bob', 'John', 'Eva']
    });
  });
})

// 404 template
app.use(function(req, res) {
  res.render('404', {
    title: 'React Engine Express Sample App',
    url: req.url
  });
});

var server = app.listen(3000, function() {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});

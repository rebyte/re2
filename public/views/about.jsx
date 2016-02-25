'use strict';

var React = require('react');
var Router = require('react-router');
var Link = Router.Link

module.exports = React.createClass({

  displayName: 'about',

  render: function render() {

    return (
      <div id='home'>
        <h1>This is about page</h1>
        <Link to='/'>back to home</Link>
      </div>
    );
  }
});

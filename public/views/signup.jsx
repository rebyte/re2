'use strict';

var React = require('react');
var Router = require('react-router');
var Link = Router.Link

module.exports = React.createClass({

  displayName: 'signup',

  render: function render() {

    return (
      <div id='signup'>
        <h1>This is signup page</h1>
        <Link to='/'>back to home</Link>
      </div>
    );
  }
});

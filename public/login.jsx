'use strict';

var React = require('react');
var Router = require('react-router');
var Link = Router.Link

module.exports = React.createClass({

  displayName: 'login',

  render: function render() {

    return (
      <div id='login'>
        <h1>This is login page</h1>
        <Link to='/'>back to home</Link>
      </div>
    );
  }
});

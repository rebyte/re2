'use strict';

var React = require('react');
var Router = require('react-router');
var Link = Router.Link

module.exports = React.createClass({

  displayName: 'search',

  render: function render() {

    return (
      <div id='search'>
        <h1>This is search page</h1>
        <Link to='/'>back to home</Link>
      </div>
    );
  }
});

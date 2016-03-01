'use strict';

var React = require('react');
var Router = require('react-router');
var Link = Router.Link

module.exports = React.createClass({

  displayName: 'signup',
  getInitialState: function() {
    return {times: 0};
  },

  handleClick: function(e) {
    // do ajax call if you need to send request to server
    // here just update a local counter in clint side 
    this.setState({times: this.state.times + 1});
  },

  render: function render() {

    return (
      <div id='signup'>
        <h1>This is signup page</h1>
	<div>
	  <input type="text" defaultValue="hello" />
	</div>
        <div> clicked {this.state.times} times </div>
	<div>
	  <button onClick={this.handleClick}>click me to count</button>
	</div>
        <Link to='/'>back to home</Link>
      </div>
    );
  }
});

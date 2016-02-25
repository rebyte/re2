'use strict';

var React = require('react');
var Router = require('react-router');
var Link = Router.Link

module.exports = React.createClass({

  displayName: 'home',

  render: function render() {
    var rows = this.props.agents.map(function(agent){return (<li>{agent}</li>);});
    var agentsList =
      <ul>
        {rows}
      </ul>
    // this.props.agents.forEach(function(agent){
    //   agentsList.appendChild(<li>agent</li>);
    // })

    return (
      <div id='home'>
        <h1>This is home page</h1>
        <h6>Hello {this.props.name}, here are the agent list for you: </h6>
        {agentsList}
        <Link to='/signup'>sign up</Link>
      </div>
    );
  }
});

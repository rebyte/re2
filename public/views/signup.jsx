'use strict';

var React = require('react');
var Router = require('react-router');
var Link = Router.Link

module.exports = React.createClass({

  displayName: 'signup',

  handleClick: function(req,res){
    res.redirect('/')
  },

  render: function render() {

    return (
      <div id='signup'>
        <h1>Registration - Create a FREE account in just a few minutes</h1>
        <div>
          <label name='lblFirstName'>First Name</label>
          <input type='text' name='txtFirstName'/>
        </div>
        <div>
          <label name='lblLastName'>Last Name</label>
          <input type='text' name='txtLastName'/>
        </div>
        <div>
          <label name='lblCompanyName'>Company Name</label>
          <input type='text' name='txtCompanyName'/>
        </div>
        <div>
          <label name='lblEmail'>Email</label>
          <input type='text' name='txtEmail'/>
        </div>
        <div>
          <label name='lblPassword'>Password</label>
          <input type='text' name='txtPassword'/>
        </div>
        <div>
          <label name='lblConfirmPassword'>Confirm Password</label>
          <input type='text' name='txtConfirmPassword' class='required'/>
        </div>
        <div>
          <label name='lblPhone'>Phone</label>
          <input type='text' name='txtPhone' class='required'/>
        </div>
        <div>
          <label name='lblFax'>Fax</label>
          <input type='text' name='txtFax' class='required'/>
        </div>
        <div>
          <input type='checkbox' name='chkAgree' class='required'/>
          <label name='lblTerm'>I agree Terms and Conditions</label>
        </div>
        <div>
            <button onclick={this.handleClick}>Create Free Account</button>
        </div>
        <div>
          <Link to='/'>back to home</Link>
        </div>

      </div>
    );
  }
});

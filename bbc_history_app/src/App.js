import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import $ from 'jquery';
import NavBar from "./components/NavBar";
import About from "./components/About";
import Contact from "./components/Contact";
import HistoryContainer from "./containers/HistoryContainer"



class App extends Component {
  render() {
    return(

      <Router>
        <React.Fragment>
        
          <div id="nav">
            <NavBar/>
            <Route exact path="/" component={HistoryContainer}/>
            <Route path="/about" component={About}/>
            <Route path="/contact" component={Contact}/>
          </div>
        
          
        </React.Fragment>
      </Router>
    )
  }
  componentDidMount() {
      // functions for checking form input values
      $( document ).ready(function() {
        console.log( "ready!" );


      
function invalidEmail(email) {
  var regex = /\S+@\S+\.\S+/;
  return !regex.test(email);
}

function invalidPassword(password) {
  return password.length < 6; 
}

function invalidUsername(username) {
  var regex = /^[a-z0-9]+$/i;
  return !regex.test(username);
}

// On the submit button's click event
$('[type="submit"]').on('click', function(e) {
  
  // reset
  var errors = false;
  $('input').attr({
    'aria-invalid': 'false',
    'aria-describedby': null // remove relationship
  });
  // clear live region
  $('#message').empty();
  // hide all input hints for now
  $('.hint').hide();
  
  // collect input values
  var email = $('#email').val();
  var password = $('#password').val();
  var username = $('#username').val();
  
  // set attrs and error var if email invalid
  if (invalidEmail(email)) {
    console.log('ddd');
    $('#email').attr({
      'aria-invalid': 'true',
      'aria-describedby': 'emailHint'
    });
    // show aria-describedby hint
    $('#emailHint').show();
    errors = true;
    

    
  }
  
  // set attrs and error var if password invalid
  if (invalidPassword(password)) {
    $('#password').attr({
      'aria-invalid': 'true',
      'aria-describedby': 'passwordHint'
    });
    // show aria-describedby hint
    $('#passwordHint').show();
    
    errors = true;
    
  }
  
  // set attrs and error var if username invalid
  if (invalidUsername(username)) {
    $('#username').attr({
      'aria-invalid': 'true',
      'aria-describedby': 'usernameHint'
    });
    // show aria-describedby hint
    $('#usernameHint').show();
    errors = true;
   
  }
  
  // if there are errors...
  if (errors) {
    // stop submission
    e.preventDefault();
    // and populate live region
    $('[aria-live=assertive]').append('<p>Your form has errors. Please fix them and submit again.</p>');

  
  } else {

    
    
    $('[aria-live=assertive]').append('<p>Thank you, your details have been submitted.</p>');
    $('#message').find('p').css({
      "background-color": "#DFF2BF",
      "border": "2px solid #4F8A10"
  });
    e.preventDefault();
    email = $('#email').val('');
    password = $('#password').val('');
    username = $('#username').val('');

  }
  
});
});

  }
}


export default App;


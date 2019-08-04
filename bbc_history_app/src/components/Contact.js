import React from "react";
import "./Contact.css"

const Contact = () => (

  <React.Fragment>
    <div className="logo">
      <img src="HistoryLogo.png" className = "logo" alt="App Logo"/>
    </div>
    
  

    <form id='register'>
      <fieldset>
  <legend>Register</legend>
  <label htmlFor="email" id="label-email">Your email&nbsp;</label>
  <input type="text" id="email" aria-labelledby="label-email" aria-required="true"/>
  [required]
  <div className="hint" id="emailHint" style={{display: 'none'}} >Please enter a correct email.</div>
  <br />
  <label htmlFor="username" id="label-username">Choose a username&nbsp;</label>
  <input type="text" id="username" aria-labelledby="label-username" aria-required="true"/>
  [required]
  <div className="hint" id="usernameHint" style={{display: 'none'}} >Your username cannot contain punctuation.</div>
  <br />
  <label htmlFor="password" id="label-password">Choose a password&nbsp;</label>
  <input type="password" id="password" aria-labelledby="label-password" aria-required="true"/>
  [required]
  <div className="hint" id="passwordHint" style={{display: 'none'}} >Your password must be at least 6 characters.</div>
</fieldset>
<div aria-live="assertive" id="message">
</div>
<div className="submit">
  <button type="submit">Submit </button>
</div>
      </form>

    <footer>
    
      <p className="copyright">&copy; Walk in History 2018</p>
    </footer>

  </React.Fragment>

);

export default Contact;

import '../style/style.css'
import '../style/login.css'

sessionStorage.setItem("userEmail", "");

document.querySelector('#header').innerHTML = `
  <div>
    <header>
      <ul class="navbar">
        <li id="home-link" class="navlist"><a href="./index.html">Home</a></li>
        <li id="service-link" class="navlist"><a href="./service.html">Service</a></li>
        <li id="appointments" class="navlist"><a href="./appointments.html">Appointments</a></li>
        <li class="account">
          <button 
            id="login" 
            class="button_nav" 
            onclick="location.href = '../login.html';">
              Log In
          </button>
        </li>
        
      </ul>
    </header>
  </div>
`

document.querySelector('#login_content').innerHTML = `
  <div id="login_wrapper">
    <div id="login_title_wrapper">
      <span id="login_title_text">Login</span>
    </div>
    <div id="warning_info">
      <i class="fa-solid fa-circle-exclamation"></i>***This is for demo use only, do not use real information for creating an account</span>
    </div>
    <br/>
    <div id="login_inputs">
      <span id="login_header">Email</span>
      <div class="input_cotainer">
        <input class="user_inputs" id="email"/>
        <i class="fa-solid fa-circle-exclamation warning_icon tooltip">
          <span id="email_err_tooltip" class="tooltiptext">Fill In Email</span>
        </i>
      </div>
        <span id="login_header">Password</span>
      <div class="input_cotainer">
        <div id="password_input_wrapper">
          <input class="user_inputs" type="password" id="password" />
          <i class="fa-solid fa-eye" id="visible_password_icon"></i>
        </div>
        <i class="fa-solid fa-circle-exclamation warning_icon tooltip">
          <span id="password_err_tooltip" class="tooltiptext">Fill In Password</span>
        </i>
      </div>
      <br />
      <div id="login_button_wrapper">
        <button id="login_button" onclick=${attemptAccess}>Login</button>
      </div>
    </div>
    <div id="create_account_wrapper">
      <span id="create_account_text">Don't have an account? <a class="account_links" href="./signup.html">Create one</a></span>
    </div>
  </div>
`

document.querySelector('#footer').innerHTML = `
  <div id="footer_content">
    </br>
    <span><a href="https://github.com/JeffTam33" target="_blank">Jeffrey Tam</a> <a type="button" href="https://github.com/JeffTam33" target="_blank"><i class="fa-brands fa-github"></i></a></span>
    <br/>
    <br/>
    <span>Artistic filler images made by <a href="https://hotpot.ai/art-generator" target="_blank">Hotpot AI</a></span>
    <br/>
    <br/>
    <span>Icons by <a href="https://github.com/FortAwesome/Font-Awesome" target="_blank">Font Awesome</a></span>
  </div>
`
//Test if user's input (username and password), matches within DB
async function attemptAccess() {
  let emailTest = document.getElementById("email").value; //User's email input
  let passwordTest = document.getElementById("password").value; //User's password input
  let urlEmailAuth = "http://localhost:3030/api/email/"; //API email Auth url
  let urlAuth = "http://localhost:3030/api/authenticate/"; //API user Auth url

  //Handles when user's input is empty
  if(!emailTest || !passwordTest) {
    invalidInput();
    return false;
  }

  //Gets a response if an email exist
  let emailInfo = 
  await fetch(urlEmailAuth + emailTest, {
    method: "GET",
    headers: {'Content-Type': 'application/json'}
  })

  let verifyEmail = await emailInfo.json();

  if(!verifyEmail) {
    window.location.href = "http://localhost:5173/login.html"
    return false;
  }

  //Gets a response if user's input (email and password) matches within the DB
  let userInfo = 
  await fetch(urlAuth + emailTest + "/" + passwordTest, {
    method: "GET",
    headers: {'Content-Type': 'application/json'}
  })
  
  let verifyUser = await userInfo.json();

  // If invalid email and password, refresh page
  if(!verifyUser) {
    localStorage.setItem("loggedIn", false);
  }
  
  if(verifyUser){
    //Get information, send to profile save
    sessionStorage.setItem("userEmail", document.getElementById("email").value);
    localStorage.setItem("loggedIn", true);
    window.location.href = "http://localhost:5173/profile.html"
  }
}

//Changes text of error message by changing classname
function invalidInput() {
  sessionStorage.setItem("userEmail", "");
  document.getElementById("email").className = "error_inputs_empty error_icon";
  document.getElementById("password").className = "error_inputs_empty error_icon";
  document.getElementById("email_err_tooltip").innerHTML = "Invalid Email";
  document.getElementById("password_err_tooltip").innerHTML ="Invalid Password"
}

//Displays login signout button
if(sessionStorage.getItem("userEmail")){
  document.getElementById("login").className = "button_hidden"
} else {
  document.getElementById("login").className = "button_nav"
}

document.getElementById('login_button').addEventListener("click", attemptAccess)

//Turn password to visible by changing its type
function showPasswordText() {
  if(document.getElementById("password").type === "text"){
    document.getElementById("password").type ="password";
  } else {
    document.getElementById("password").type ="text";
  }

}

document.getElementById("visible_password_icon").addEventListener("click", function() {
  showPasswordText()
})
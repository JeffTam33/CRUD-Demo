import '../style/style.css'
import '../style/signup.css'

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

document.querySelector('#signup_content').innerHTML = `
  <div id="signup_wrapper">
    <div id="authenticator_login">

      <div id="login_title_wrapper">
        <span id="login_title_text">Login With</span>
      </div>

      <div id="authenticator_login_container">
        <div class="brand_icons">
          <button class="auth_button">
            <i class="fa-brands fa-google" style="color: #f73022;"></i>
          </button>
        </div>

        <div class="brand_icons">
          <button class="auth_button">
            <i class="fa-brands fa-facebook" style="color: #0156e9;"></i>
          </button>
        </div>

        <div class="brand_icons">
          <button class="auth_button">
            <i class="fa-brands fa-apple" style="color: #000;"></i>
          </button>
        </div>

      </div>
    </div>

    <div id="manual_create">
      <span class="header_input">Email</span>
      <div id="email_signup_container" class="signup_container">
        <input class="user_inputs" id="email_signup" />
        <i id="email_error_icon" class="fa-solid fa-circle-exclamation warning_icon tooltip">
          <span id="email_err_tooltip" class="tooltiptext">Invalid Email</span>
        </i>
      </div>

      <span class="header_input">Username</span> 
      <div id="username_signup_container" class="signup_container">
        <input class="user_inputs" id="username_signup" />
        <i id="username_error_icon" class="fa-solid fa-circle-exclamation warning_icon tooltip">
          <span id="username_err_tooltip" class="tooltiptext">Invalid Username</span>
        </i>
      </div>

      <span class="header_input">Password</span>
      <div id="password_name_signup" class="signup_container">
        <input class="user_inputs" type="password" id="password_signup" />
        <i id="password_error_icon" class="fa-solid fa-circle-exclamation warning_icon tooltip"><span id="password_err_tooltip" class="tooltiptext">Invalid Password</span></i>
      </div>


      <span class="header_input">First Name</span> 
      <div id="first_name_signup_container" class="signup_container">
        <input class="user_inputs" id="first_name_signup" />
        <i id="first_name_error_icon" class="fa-solid fa-circle-exclamation warning_icon tooltip"><span class="tooltiptext">Enter your first name</span></i>
      </div>

      <span class="header_input">Last Name</span> 
      <div id="last_name_signup_container" class="signup_container">
        <input class="user_inputs" id="last_name_signup" />
        <i id="last_name_error_icon" class="fa-solid fa-circle-exclamation warning_icon tooltip"><span class="tooltiptext">Enter your last name</span></i>
      </div>

      <br />
      <span class="birthday_header" id="dob_header">Birthday (MM/DD/YYYY): </span>
      <div id="birthday_user_input">
        <div class="birthday_wrapper">
          <label class="birthday_header">Month</label>
          <form class="user_inputs" id="month_signup">
            <select id="months" name="months">
              <option value="01">January</option>
              <option value="02">February</option>
              <option value="03">March</option>
              <option value="04">April</option>
              <option value="05">May</option>
              <option value="06">June</option>
              <option value="07">July</option>
              <option value="08">August</option>
              <option value="09">September</option>
              <option value="10">October</option>
              <option value="11">November</option>
              <option value="12">December</option>
            </select>
          </form>
        </div>
        
        <div class="birthday_wrapper">
          <span class="birthday_header">Day</span>
          <input class="user_inputs" id="day_signup" maxlength="2" />
          <i id="day_error_icon" class="fa-solid fa-circle-exclamation warning_icon tooltip"><span class="tooltiptext">Invalid Day</span></i>
        </div>

        <div class="birthday_wrapper">
          <span class="birthday_header">Year</span>
          <input class="user_inputs" id="year_signup" maxlength="4" />
          <i id="year_error_icon" class="fa-solid fa-circle-exclamation warning_icon tooltip"><span class="tooltiptext">Invalid Year</span></i>
        </div>

      </div>

      <div id="phone_number_container">
        <span>Phone Number: </span><input id="phoneNumber" maxlength="12" placeholder="Ex. (301)888-888" />
        <div id="phone_number_err_tooltip">
          Invalid Phone Number
        </div>
      </div>

      <br />
      <br />
      
      <div id="error_inputs">
        <div id="error_rule">
          <span class="check_list" id="email_check"><i class="fa-regular fa-circle-check"></i> Email</span>
          <span class="check_list" id="username_check"><i class="fa-regular fa-circle-check"></i> Username</span>
          <span class="check_list" id="password_check"><i class="fa-regular fa-circle-check"></i> Password</span>
        </div>

        <div id="password_rule_container">
          <ul>
            <li id="length_rule">Must be at least 8 charactors long</li>
            <li id="lowercase_rule">Must have 1 lowercase letter</li>
            <li id="uppercase_rule">Must have 1 uppercase letter</li>
            <li id="digit_rule">Must have 1 digit</li>
            <li id="sc_rule">Must have 1 special character</li>
          </ul>
        </div>
      </div>

      <div id="submit">
        <button type="submit" id="signup_submit">Submit</button>
      </div>
      
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

function resetErrorAll() {
  //Disable icons
  document.getElementById("email_error_icon").style = "visibility: hidden;";
  document.getElementById("username_error_icon").style = "visibility: hidden;";
  document.getElementById("password_error_icon").style = "visibility: hidden;";
  document.getElementById("first_name_error_icon").style = "visibility: hidden;";
  document.getElementById("last_name_error_icon").style = "visibility: hidden;";
  document.getElementById("last_name_error_icon").style = "visibility: hidden;";
  document.getElementById("day_error_icon").style = "visibility: hidden;";
  document.getElementById("year_error_icon").style = "visibility: hidden;";

  //Disable input color
  document.getElementById("email_signup").className = "user_inputs";
  document.getElementById("username_signup").className = "user_inputs";
  document.getElementById("password_signup").className = "user_inputs";
  document.getElementById("first_name_signup").className = "user_inputs";
  document.getElementById("last_name_signup").className = "user_inputs";
  document.getElementById("last_name_signup").className = "user_inputs";
  document.getElementById("day_signup").className = "user_inputs";
  document.getElementById("year_signup").className = "user_inputs";
}

function handleInvalidInput(name) {
  resetErrorAll();
  let errorClass = "user_inputs_empty";
  document.getElementById(name + "_signup").className = errorClass;
  document.getElementById(name + "_error_icon").style = "visibility: visible;"
}

async function postData() {
  let username = document.getElementById('username_signup').value;
  let email = document.getElementById('email_signup').value;
  let password = document.getElementById('password_signup').value;
  let firstName = document.getElementById('first_name_signup').value;
  let lastName = document.getElementById('last_name_signup').value;
  let dob = document.getElementById('months').value + "/" + document.getElementById('day_signup').value + "/" + document.getElementById('year_signup').value;
  let phoneNum = formatPhoneNumber(document.getElementById('phoneNumber').value);

  //This area is for UI if user does not enter the following inputs
  if (!email) {
    handleInvalidInput("email");
    return false;
  }

  document.getElementById("email_check").style = "color: green";

  if (!username) {
    handleInvalidInput("username");
    return false;
  }

  document.getElementById("username_check").style = "color: green";

  if (!password) {
    handleInvalidInput("password");
    return false;
  }

  document.getElementById("password_check").style = "color: green";

  if (!firstName) {
    handleInvalidInput("first_name");
    return false;
  }

  if (!lastName) {
    handleInvalidInput("last_name");
    return false;
  }

  //This verifys that the inputs's info verses db info does not have an existance
  let match = verifyUserInfo(username, email, password, phoneNum);

  if (await match) {
    createNewUser(username, email, password, firstName, lastName, dob, phoneNum);
    sessionStorage.setItem("userEmail", email);
    window.location.href = "http://localhost:5173/profile.html"
  } else {
    sessionStorage.setItem("userEmail", "");
  }
}

//finds in the database if username is taken
async function doesUserExist(username) {
  let url = 'http://localhost:3030/api/user/'
  let userBool =
    await fetch(url + username)
      .then(res => {
        return res.json();
      })
      .catch(error => {
        console.log(error);
        return false;
      })


  if (userBool) {
    return false;t
  } else {

  }
  return userBool ? false : true;
}

//find in the database if email is taken
async function doesEmailExist(email) {
  let url = 'http://localhost:3030/api/email/';
  let emailBool =
    await fetch(url + email)
      .then(res => {
        return res.json();
      })
      .catch(error => {
        console.log(error);
        return false;
      })
  return !emailBool.result ? true : false;
}

//determines password is strong
function passwordStrength(password) {
  let passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,100}$/gm;
  if (password.match(passwordRegex)) {
    return true;
  }

  //If password is too short
  if (password.length < 8) {
    document.getElementById("length_rule").style = "color: red;"
  } else {
    document.getElementById("length_rule").style = "color: green;"
  }

  if (!password.match(/[a-z]/gm)) {
    document.getElementById("lowercase_rule").style = "color: red;"
  } else {
    document.getElementById("lowercase_rule").style = "color: green;"
  }

  if (!password.match(/[A-Z]/gm)) {
    document.getElementById("uppercase_rule").style = "color: red;"
  } else {
    document.getElementById("uppercase_rule").style = "color: green;"
  }

  if (!password.match(/[!@#$%^&*()_\+\-\=\\\[\]\{\};:'"?><,.`~\|]/gm)) {
    document.getElementById("sc_rule").style = "color: red;"
  } else {
    document.getElementById("sc_rule").style = "color: green;"
  }

  if (!password.match(/\d/gm)) {
    document.getElementById("digit_rule").style = "color: red;"
  } else {
    document.getElementById("digit_rule").style = "color: green;"
  }

  return false;
}

async function verifyUserInfo(username, email, password, phoneNum) {
  let usernameVerify = await doesUserExist(username);
  let emailVerify = await doesEmailExist(email);
  let passwordVerify = passwordStrength(password);
  let phoneNumVerify = formatPhoneNumber(phoneNum);

  if (!usernameVerify) {
    handleInvalidInput("username");
    return false;
  } else if (!emailVerify) {
    handleInvalidInput("email");
    return false;
  } else if (!passwordVerify) {
    handleInvalidInput("password");
    return false;
  } else if (!phoneNumVerify) {
    document.getElementById("phone_number_err_tooltip").style = "visibility: visible;";
    return false;
  }

  return (usernameVerify && emailVerify && passwordVerify && phoneNumVerify) ? true : false;
}

async function createNewUser(username, email, password, firstName, lastName, dob, phoneNum) {
  await fetch('http://localhost:3030/api/post', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      "username": username,
      "password": password,
      "email": email,
      "firstName": firstName,
      "lastName": lastName,
      "dob": dob,
      "phoneNum": phoneNum,
      "dentistry": "J Dentistry",
      "dentalIn": [],
      "appointments": [],
      "role": "client"
    })
  })
    .then(res => {
      return res.json();
    })
    .then(data => {
      console.log(data)
    })
}

const submitBnt = document.getElementById('submit');
submitBnt.addEventListener('click', postData);

function formatPhoneNumber(phoneNumberString) {
  var cleaned = ('' + phoneNumberString).replace(/\D/g, '');
  var match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    return '(' + match[1] + ') ' + match[2] + '-' + match[3];
  }
  return null;
}

if(sessionStorage.getItem("userEmail")){
  document.getElementById("login").className = "button_hidden"
} else {
  document.getElementById("login").className = "button_nav"
}

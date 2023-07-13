import '../style/style.css'
import '../style/schedule.css'

let calanderDaysMonths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

document.querySelector('#header').innerHTML = `
  <div>
    <header>
      <ul class="navbar">
        <li id="home-link" class="navlist"><a href="./index.html">Home</a></li>
        <li id="service-link" class="navlist"><a href="./service.html">Service</a></li>
        <li id="appointments" class="navlist"><a href="./appointments.html">Appointments</a></li>

        <li class="account">
          <button
            id="signout"
            class="button_nav"
            >
            Sign Out
          </button>
        </li>

        <li class="account">
          <button 
            class="button_nav" 
            id="login"
            onclick="location.href = '../login.html';">
              Log In
          </button>
        </li>

        <li class="account">
          <button 
            class="button_nav"
            id="profile"
            onclick="location.href = '../profile.html';">
              <i class="fa-regular fa-user"></i>
          </button>
        </li>
        
      </ul>
    </header>
  </div>
`

document.querySelector('#schedule_content').innerHTML = `
<div id="schedule_wrapper">
  <br />
  <br />
  <span class="birthday_header" id="schedule_header">${sessionStorage.getItem("serviceSelected")}</span>
  <div id="birthday_user_input">
    <div id="month_container">
      <span>Month</span>
      <form class="user_inputs" id="month_schedule">
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

    <div id="day_container">
      <span>Day</span>
      <br />
      <input class="user_inputs" id="day_schedule" maxlength="2" />
    </div>

    <div id="year_container">
      <span>Year</span>
      <br />
      <input class="user_inputs" id="year_schedule" maxlength="4" />
    </div>

  </div>

  <div id="time_container">
    <span id="time_title">Time</span>
    <form class="user_inputs" id="digit_schedule">
      <select id="digit_option" name="digit">
        <option value="8:00 am">8:00 am</option>
        <option value="9:00 am">9:00 am</option>
        <option value="10:00 am">10:00 am</option>
        <option value="11:00 am">11:00 am</option>
        <option value="12:00 pm">12:00 pm</option>
        <option value="1:00 pm">1:00 pm</option>
        <option value="2:00 pm">2:00 pm</option>
        <option value="3:00 pm">3:00pm</option>
      </select>
    </form>
  </div>

  <div id="submit">
    <button type="submit" id="schedule_submit">Submit</button>
  </div>
  
  </div>

  <div>
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

document.getElementById("signout").addEventListener("click", function() {
  signOut();
})

//Sign out user by clearning session storage and redirects to login
function signOut() {
  sessionStorage.removeItem("userEmail");
  sessionStorage.removeItem("serviceSelected");
  window.location.href = "http://localhost:5173/login.html"
}

function handleInvalidInput() {
  document.getElementById("day_schedule").style = "border: 2px solid red";
  document.getElementById("year_schedule").style = "border: 2px solid red";
}

//Updates the user's appointment lists in DB
async function scheduleAppointment() {
  let date = document.getElementById("months").value + "/" + document.getElementById("day_schedule").value + "/" + document.getElementById("year_schedule").value;

  if(!date) {
    handleInvalidInput();
  }

  if(new Date(date) < new Date()) {
    handleInvalidInput();
    return false;
  }

  let url = "http://localhost:3030/api/schedule/";
  let time = document.getElementById("digit_option").value;
  await fetch(url, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      "email": sessionStorage.getItem("userEmail"),
      "type": sessionStorage.getItem("serviceSelected"),
      "date": date,
      "time": time,
      "index": Math.floor(Math.random()*1000000),
    })
  })
  window.location.href = "http://localhost:5173/profile.html"
}

//Adds onclick function to submit button
document.getElementById("schedule_submit").addEventListener("click", scheduleAppointment)

//Displays visibility of login logout buttons
if(sessionStorage.getItem("userEmail")){
  document.getElementById("login").className = "button_hidden"
  document.getElementById("signout").className = "button_nav";
  document.getElementById("profile").className = "button_nav";
} else {
  document.getElementById("login").className = "button_nav"
  document.getElementById("signout").className = "button_hidden";
  document.getElementById("profile").className = "button_hidden";
}
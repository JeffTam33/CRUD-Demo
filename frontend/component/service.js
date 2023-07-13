import '../style/style.css'
import '../style/service.css'

let serviceIdName = [
  "schedule_cleaning", "schedule_whitening", "schedule_veneers", "schedule_veneers", "schedule_fillings", "schedule_lays", "schedule_crowns", "schedule_braces", "schedule_root"
]

let serviceName = [
  "Dental Cleaning", "Teeth Whitening", "Dental Veneers", "Tooth Fillings", "Inlays & Onlays", "Dental Crowns", "Braces", "Root Canal Therapy"
]

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
            onclick="location.href = '../login.html';"
            >
            Sign Out
          </button>
        </li>

        <li class="account">
          <button 
            id="login" 
            class="button_nav" 
            onclick="location.href = '../login.html';">
              Log In
          </button>
        </li>

        <li class="account">
          <button 
            id="profile"
            class="button_nav"
            onclick="location.href = '../profile.html';">
              <i class="fa-regular fa-user"></i>
          </button>
        </li>
        
      </ul>
    </header>
  </div>
`

document.querySelector('#service_content').innerHTML = `
  <div id="home_content">
    <div id="service_header_content">
      <br />
      <span id="service_heading_top">Dental Services we offer</span>
      <br />
      <br />
      <span id="note_service" style="font-size: 25px; opacity: .8;"> *Dental Services may not be covered by Insurance</span>
    </div>

    <div id="services_content">
        <div class="card">
          <h3 class="service_heading">Dental Cleaning</h3>
          <p>&#9;Regular dental cleaning is vital for oral health. Generally, a cleaning every six months is recommended, but individual needs and dentist's advice may alter the frequency.</p>
          <button class="schedule" id="schedule_cleaning">
            Schedule
          </button>
        </div>
        <div class="card">
          <h3 class="service_heading">Teeth Whitening*</h3>
          <p >&#9;Dental teeth whitening is a popular cosmetic procedure that can help enhance the appearance of your smile by lightening the color of your teeth.</p>
          <button class="schedule" id="schedule_whitening">
            Schedule
          </button>
        </div>
        <div class="card">
          <h3 class="service_heading">Dental Veneers*</h3>
          <p>&#9;Dental veneers are a cosmetic dental treatment that can transform the appearance of your smile by improving the shape, color, and alignment of your teeth.</p>
          <button class="schedule" id="schedule_veneers">
            Schedule
          </button>
        </div>
        <div class="card">
          <h3 class="service_heading">Tooth Fillings</h3>
          <p>&#9;Tooth fillings are a common dental treatment used to restore teeth damaged by decay or minor fractures.</p>
          <button class="schedule" id="schedule_fillings">
            Schedule
          </button>
        </div>
        <div class="card">
          <h3 class="service_heading">Inlays & Onlays</h3>
          <p>&#9;Inlays and onlays are dental restorations used to repair teeth with moderate to severe decay or damage.</p>
          <button class="schedule" id="schedule_lays">
            Schedule
          </button>
        </div>
        <div class="card">
          <h3 class="service_heading">Dental Crowns</h3>
          <p>&#9;Dental crowns, also known as dental caps, are dental restorations that encase a damaged or weakened tooth to restore its shape, strength, and function.</p>
          <button class="schedule" id="schedule_crowns">
            Schedule
          </button>
        </div>
        <div class="card">
          <h3 class="service_heading">Braces</h3>
          <p>&#9;Misaligned teeth hinder proper cleaning, causing plaque, tooth decay, and gum disease. Braces align teeth, easing brushing and flossing, reducing dental issues, and promoting oral hygiene.</p>
          <button class="schedule" id="schedule_braces">
            Schedule
          </button>
        </div>
        <div class="card">
          <h3 class="service_heading">Root Canal Therapy</h3>
          <p>&#9;Root canal therapy is a dental procedure performed to save a tooth that has been severely damaged or infected.</p>
          <button class="schedule" id="schedule_root">
            Schedule
        </button>
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
//Redirects user to login if not logged in, else redirects user to schedule
function scheduleMake(arg) {
  if(!sessionStorage.getItem("userEmail")){
    window.location.href = "http://localhost:5173/login.html"
  }else{
    sessionStorage.setItem("serviceSelected", arg);
    window.location.href = "http://localhost:5173/schedule.html"
  }
}

//Attaches all the buttons to a service with unique id
for(let i = 0; i < serviceName.length; i++) {
  document.getElementById(serviceIdName[i]).addEventListener("click", function() {
    scheduleMake(serviceName[i]);
  });
}

//Sign out user by clearning session storage and redirects to login
function signOut() {
  sessionStorage.removeItem("userEmail");
  sessionStorage.removeItem("serviceSelected");
  window.location.href = "http://localhost:5173/login.html"
}

//Adds on click function to signout button
document.getElementById("signout").addEventListener("click", function() {
  signOut();
})

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

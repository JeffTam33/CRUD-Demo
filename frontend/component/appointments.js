import '../style/style.css'
import '../style/appointment.css'

document.querySelector('#header').innerHTML = `
  <div>
    <header>
      <ul class="navbar">
        <li id="logo" class="navlist"><i class="fa-solid fa-fire"></i></li>
        <li id="home-link" class="navlist"><a href="./index.html">Home</a></li>
        <li id="service-link" class="navlist"><a href="./service.html">Service</a></li>
        <li class="navlist"><a href="./appointments.html">Appointments</a></li>

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
            id="signout"
            class="button_nav"
            >
            Sign Out
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

document.querySelector('#appointment_content').innerHTML = `
    <div id="appointment_container">
      <div id ="appointment_content">
        <div id="appointment_policy">
          <br />
          <span style="font-size: 35px;">How to make an appointment</span>
          <p>Online Appointment Booking:<br/> We offer the convenience of online appointment booking through our website. By creating an account, you can easily schedule and manage your dental appointments at your convenience. This online system provides real-time availability, allowing you to choose a time that suits your schedule. You can also receive appointment reminders and confirmations via email or text message.</p>
          <p>Phone Appointment Booking:<br/> If you prefer to make an appointment by phone, our friendly receptionists are ready to assist you. Simply call our office during business hours, and they will guide you through the process, helping you find a suitable appointment time.</p>
          <p>Late Appointment Fee:<br/> We kindly request that you arrive on time for your scheduled appointment. If you arrive late, we may need to reschedule your appointment to maintain our commitment to all patients. Additionally, if you fail to provide advance notice of cancellation or reschedule within 24 hours of your appointment, a late appointment fee may be applied.</p>
          <p>Cancellation Policy:<br/> We understand that unforeseen circumstances may arise, requiring you to cancel or reschedule your appointment. We kindly ask that you provide at least 24 hours' notice for any changes to your appointment. This allows us to accommodate other patients who may be waiting for an available time slot. Failure to provide adequate notice may result in a late appointment fee.</p>
        </div>
        <div id="appointment_insurance">
          <div>
          </div>
          <div id="appointment_list">
            <ul>
              <li><a class="in_link" href="https://www.deltadental.com/" target="_blank">Delta Dental</a></li>
              <li><a class="in_link" hred="https://www.metlife.com/" target="_blank">MetLife Dental</a></li>
              <li><a class="in_link" href="https://www.cigna.com/" target="_blank">Cigna Dental</a></li>
              <li><a class="in_link" href="https://www.dbp.com/" target="_blank">UnitedHealthcare Dental</a></li>
              <li><a class="in_link" href="https://www.aetnadental.com/" target="_blank">Aetna Dental</a></li>
              <li><a class="in_link" href="https://www.humana.com/" target="_blank">Humana Dental</a></li>
              <li><a class="in_link" href="https://www.guardiandirect.com/" target="_blank">Guardian Dental</a></li>
              <li><a class="in_link" href="https://dentalnetwork.ameritas.com/" target="_blank">Ameritas Dental</a></li>
              <li><a class="in_link" href="https://www.bcbs.com/" target="_blank">Blue Cross Blue Shield Dental</a></li>
              <li><a class="in_link" href="https://www.principal.com/" target="_blank">Principal Dental</a></li>
            </ul>
            <ul>
              <li><a class="in_link" href="https://www.dnoa.com/" target="_blank">Dental Network of America (DNoA)</li>
              <li><a class="in_link" href="https://www.myrencoverage.com/ren/" target="_blank">Renaissance Dental</a></li>
              <li><a class="in_link" href="https://www.assurant.com/" target="_blank">Assurant Dental</a></li>
              <li><a class="in_link" href="https://www.dentegra.com/" target="_blank">Dentegra</a></li>
              <li><a class="in_link" href="https://www.sunlife.com/en/" target="_blank">Sun Life Financial Dental</a></li>
              <li><a class="in_link" href="https://www.geha.com/" target="_blank">GEHA Dental</a></li>
              <li><a class="in_link" href="https://www.dentalselect.com/" target="_blank">Dental Select</a></li>
              <li><a class="in_link" href="https://www.standard.com/" target="_blank">Standard Insurance Company</a></li>
              <li><a class="in_link" href="https://www.reliancestandard.com/" target="_blank">Reliance Standard</a></li>
              <li><a class="in_link" href="https://www.mutualofomaha.com/" target="_blank">Mutual of Omaha</a></li>
            </ul>
          </div>
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
//Adds on click function to signout button
document.getElementById("signout").addEventListener("click", function() {
  signOut();
})

//Sign out user by clearning session storage and redirects to login
function signOut() {
  sessionStorage.removeItem("userEmail");
  sessionStorage.removeItem("serviceSelected");
  window.location.href = "http://localhost:5173/login.html"
}

//Displays visibility of login logout buttons
if(sessionStorage.getItem("userEmail")){
  document.getElementById("signout").className = "button_nav";
  document.getElementById("profile").className = "button_nav";
} else {
  document.getElementById("signout").className = "button_hidden";
  document.getElementById("profile").className = "button_hidden";
}
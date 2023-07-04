import '../style/style.css'
import '../style/schedule.css'

document.querySelector('#header').innerHTML = `
  <div>
    <header>
      <ul class="navbar">
        <li id="logo" class="navlist"><i class="fa-solid fa-fire" onclick="location.href = '../main.html';"></i></li>
        <li id="home-link" class="navlist"><a href="./index.html">Home</a></li>
        <li id="service-link" class="navlist"><a href="./service.html">Service</a></li>
        <li class="navlist"><a href="./appointments.html">Appointments</a></li>

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

document.querySelector('#home_content').innerHTML = `
  <div id="home_content">
    <br />
    <div id="home_content_title" style="text-align:center">
      <h1 style="margin-top: 10px">Meet the Team</h1>
    </div>

    <div id="content_wrapper">

      <div class="content_text">
        <div class="test-grid">
          <img class="dentist_img" src="gisila_dentist.png" alt="Dr. Linda" />
        </div>
        <div class="team_name">
          <span>Dr. Linda Gisila</span>
        </div>
        <div class="team_member">
          <p>Dr. Gisila completed her dental education with honors at one of the top dental schools in the country. She has been practicing for over a decade and has extensive experience in all areas of dentistry, including preventive care, restorative dentistry, cosmetic dentistry, and orthodontics. She is committed to staying up-to-date with the latest dental techniques and technologies to ensure that her patients receive the highest level of care.</p>
        </div>
      </div>

      <div class="content_text">
        <div class="test-grid">
          <img class="dentist_img" src="yang_hygienist.png" alt="Achille Yang" />
        </div>
        <div class="team_name">
          <span>Achille Yang</span>
        </div>
        <div class="team_member">
          <p>Achille Yang is a highly skilled dental hygienist dedicated to optimizing oral health. With extensive experience in the dental field, Achille provides exceptional care to each patient, prioritizing their well-being. Through ongoing education, Achille stays up to date with the latest advancements, ensuring the highest quality of personalized care and promoting long-lasting oral health for all.</p>
        </div>
      </div>

      <div class="content_text">
        <div class="test-grid">
          <img class="dentist_img" src="nikolche_office_manager.png" alt="Nikolche Manuel" />
        </div>
        <div class="team_name">
          <span>Nikolche Manuel</span>
        </div>
        <div class="team_member">
          <p>As our office manager, Nikolche is responsible for overseeing all aspects of the practice, from patient scheduling and billing to staff management and inventory control. Her keen attention to detail and exceptional organizational skills ensure that the office runs smoothly and efficiently, allowing the dentists and staff to focus on providing high-quality patient care. With her strong leadership abilities, Nikolche fosters a positive and productive work environment, contributing to the overall success of the practice.</p>
        </div>
      </div>

      <div class="content_text">
        <div class="test-grid">
          <img class="dentist_img" src="lihuen_receptionist.png" alt="Lihuén Brynlee" />
        </div>
        <div class="team_name">
          <span>Lihuén Brynlee</span>
        </div>
        <div class="team_member">
          <p>Lihuén, our dedicated receptionist, plays a pivotal role in overseeing the front desk operations, handling incoming phone calls, coordinating appointments, and supporting administrative duties. With her exceptional organizational abilities and meticulous attention to detail, she ensures the seamless and efficient functioning of our practice. Her commitment allows our dentists and staff to devote their full attention to delivering exceptional patient care and maintaining the highest quality standards.</p>
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
//Displays visablitly
if(sessionStorage.getItem("userEmail")){
  document.getElementById("login").className = "button_hidden"
  document.getElementById("signout").className = "button_nav";
  document.getElementById("profile").className = "button_nav";
} else {
  document.getElementById("login").className = "button_nav"
  document.getElementById("signout").className = "button_hidden";
  document.getElementById("profile").className = "button_hidden";
}

document.getElementById("signout").addEventListener("click", function() {
  signOut();
})

//Sign out user by clearning session storage and redirects to login
function signOut() {
  sessionStorage.removeItem("userEmail");
  sessionStorage.removeItem("serviceSelected");
  window.location.href = "http://localhost:5173/login.html"
}
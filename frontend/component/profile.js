import '../style/style.css'
import '../style/profile.css'

let email = sessionStorage.getItem("userEmail");
let indexs = []; //Appointment list index id
let userJson = {}; //User's sign in data
 
async function accessDB() {
  let urlEmailAuth = "http://localhost:3030/api/profile/";
  let emailInfo = 
  await fetch(urlEmailAuth + email, {
    method: "GET",
    headers: {'Content-Type': 'application/json'}
  })
  userJson = await emailInfo.json();
}

await accessDB();

//Deletes one of user's appointment by index id
async function deleteApp(index) {
  let url = 'http://localhost:3030/api/delete';
  await fetch(url, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      email: sessionStorage.getItem('userEmail'),
      index: index
    })
  })
}

//Displays list of appointments from userJson data
function appList() {
  let innerHTML = "";
  for(let i = userJson.appointments.length - 1; i >= 0; i--){
    let index = userJson.appointments[i].index;
    indexs.push(index);
    let addHTML = 
    `
      <div class="appointment_card">
        <div id="appointment_status">
          <svg id="appointment_status_shape" width="25" height="25">
            <circle id="status${i}" cx="12" cy="12" r="12" fill="#000000" />
          </svg>
        </div>

        <div id="appointment_service_title">
          <span class="appointment_service_text">${!userJson.appointments ? "N/A" : userJson.appointments[i].type}</span>
        </div>

        <div id="appointment_date_title">
          <span class="appointment_service_text">${!userJson.appointments ? "N/A" : userJson.appointments[i].date}</span>
        </div>

        <div id="appointment_date_title">
          <span class="appointment_service_text">${!userJson.appointments ? "N/A" : userJson.appointments[i].time}</span>
        </div>

        <div class="profile_icons" id="appointment_delete">
          <button class="appointment_service_icon" id="appointment_obj${index}" value=${index}><i class="fa-solid fa-trash"></i></button>
        </div>

        <div class="profile_icons" id="appointment_edit_wrapper">
          <button class="appointment_service_icon"><i class="fa-regular fa-pen-to-square"></i></button>
        </div>

      </div>
    `
    innerHTML = innerHTML + addHTML;
  }
  return innerHTML;
}

let appointmentElement = appList();

document.querySelector('#header').innerHTML = `
  <div>
    <header>
      <ul class="navbar">
      <li id="home-link" class="navlist"><a href="./index.html">Home</a></li>
      <li id="service-link" class="navlist"><a href="./service.html">Service</a></li>
      <li id="appointments" class="navlist"><a href="./appointments.html">Appointments</a></li>

      <li class="account">
        <button id="signout" class="button_nav">
          Sign Out
        </button>
      </li>

      <li class="account">
        <button id="profile_button" class="button_nav" onclick="location.href = '../profile.html';">
          <i class="fa-regular fa-user"></i>
        </button>
      </li>

      </ul>
    </header>
  </div>
`

document.querySelector('#profile').innerHTML = `
  <div id="profile_wrapper">
    <div id="user_profile">
        <div id="user_basic_info">
          <div id="name_wrapper">
            <span class="profile_names">Name: ${userJson.firstName + " " + userJson.lastName}</span>
            <span class="profile_names">Username: ${userJson.username}</span>
          </div>
        </div>

        <div id="user_detailed_info">
          <ul style="list-style-type: none;">
            <li id="email_user" class="info_list">Email: ${email}</li>
            <li id="phone_user" class="info_list">Phone #: ${userJson.phoneNum}</li>
            <li id="dob_user" class="info_list">DOB (Date of Birth): ${userJson.dob}</li>
            <li id="company_user" class="info_list">Dentistry: ${userJson.dentistry}</li>
            <li id="insurance_user" class="info_list">Current Dental Insurance: ${(!userJson.dentalIn[0] ? "N/A" : userJson.dentalIn[0])}</li>
          </ul>
          <button class="edit_button"><i class="fa-solid fa-pen-to-square edit_icon"></i></button>
        </div>
    </div>

    <div id="appointment_profile">

      <div id="appointment_header_profile_wrapper">
        <span id="appointment_header_profile">Appointments:</span>
      </div>
      <br />     

      <div id="appointment_title_card">
        <span class="appointment_titles" style="float: left;">Stat</span>
        <span class="appointment_titles" style="float: left; margin-left:5px;">Service</span>
        <span class="appointment_titles" style="float: left; margin-left:90px;">Date</span>
        <span class="appointment_titles" style="float: left; margin-left:190px;">Time</span>
        <span class="appointment_titles" style="margin-right: 1vw; float:right;">Delete</span>
        <span class="appointment_titles" style="margin-right: 1vw; float:right;">Edit</span>
      </div>

      <div id="appointment_list_wrapper">
        ${appointmentElement}
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
//Loads in Appointments
appList()

//Displays the list of appoints stored in the database
for(let i = 0; i < userJson.appointments.length; i++){
  if(new Date(userJson.appointments[i].date) > new Date()){
    document.getElementById("status" + i).style = "fill: green";
  } else {
    document.getElementById("status" + i).style = "fill: red";
  }
}

//Adds a delete button with unique index id 
for(let i =0; i < indexs.length; i++){
  console.log(indexs[i])
  document.getElementById("appointment_obj" + indexs[i]).addEventListener("click", function(){
    deleteApp(indexs[i])
    window.location.href = "http://localhost:5173/profile.html"
  })
}

//Sign out user by clearning session storage and redirects to login
document.getElementById("signout").addEventListener("click", function() {
  signOut();
})

function signOut() {
  sessionStorage.removeItem("userEmail");
  sessionStorage.removeItem("serviceSelected");
  window.location.href = "http://localhost:5173/login.html"
}

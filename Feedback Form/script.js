var btnsubmit = document.getElementById("button-submit-feedback")[0];
btnsubmit.onclick = displayPopup

function displayPopup(){
   document.getElementById("section").classList.remove("popup-section")
}

// const clicksubmit = () => {
//    document.getElementsByClassName("popup-section")[0].classList.add("popup-section-after")let 


var firstName = document.getElementById("firstName").value;
var lastName = document.getElementById("lastName").value;
var email = document.getElementById("email").value;

function nameValid(name){
   nameCharacters = /^[A-Za-z]+$/;
   return nameCharacters.test(name);
}
function emailValid(email){
   emailCharacters = /^[@.]+$/;
   return emailCharacters.test(email);
}




const SubmitHandler = () => {
   if(!nameValid(firstName)){
      document.getElementById("name-validation-alert").innerHTML="Enter the Valid Name"
   }
   if(!nameValid(lastName)){
      document.getElementById("name-validation-alert").innerHTML="Enter the Valid Name"
   }
   if(!emailValid(email)){
      document.getElementById("name-validation-alert").innerHTML="Enter the Email"
   }
   else{
      window.location.href = "../Feedback Form/popupbox.html"
   }
}
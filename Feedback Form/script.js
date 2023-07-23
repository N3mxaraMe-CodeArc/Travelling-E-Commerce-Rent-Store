// var btnsubmit = document.getElementById("button-submit-feedback")[0];
// btnsubmit.onclick = displayPopup

// function displayPopup(){
//    document.getElementById("section").classList.remove("popup-section")
// }

// const clicksubmit = () => {
//    document.getElementsByClassName("popup-section")[0].classList.add("popup-section-after")let 






const SubmitHandler = () => {

   var firstName = document.getElementById("firstName").value;
   var lastName = document.getElementById("lastName").value;
   var email = document.getElementById("email").value;
   var num = document.getElementById("phoneNum").value;

   function nameValid(name) {
      nameCharacters = /^[A-Za-z]+$/;
      return nameCharacters.test(name);
   }
   function emailValid(email) {
      emailCharacters = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
      return emailCharacters.test(email);
   }

   function numberValid(num){
      numCharacters = /^[0-9]+$/;
      return numCharacters.test(num);
   }

   if (!nameValid(firstName)) {
      document.getElementById("name-validation-alert").innerHTML = "Enter the Valid Name"
      document.getElementById("firstName").style.border = "1px solid red";
   }
   else if(!nameValid(lastName)){
      document.getElementById("name-validation-alert").innerHTML = "Enter the Valid Name"
      document.getElementById("lastName").style.border = "1px solid red";
   }
   else if(!emailValid(email)){
      document.getElementById("name-validation-alert").innerHTML = "Enter the Valid Email"
      document.getElementById("email").style.border = "1px solid red";
   }
   else if(numberValid(num) && num.length != 10){
      document.getElementById("name-validation-alert").innerHTML = "Enter the Valid Contact"
      document.getElementById("phoneNum").style.border = "1px solid red";
   }
   else{
      document.getElementById("name-validation-alert").innerHTML = ""
   }
}
function removeSplashScreen() {
    var splash = document.querySelector('.splash');
    splash.parentNode.removeChild(splash);
    window.location.href = "../home/index.html";
  }
setTimeout(removeSplashScreen, 4000);


  // setTimeout(function() {
    
  // }, 1000);

// function transitionToMainPage() {
//   setTimeout(function() {
//     window.location.href = "../home/index.html";
//   },4000); 
// }


// window.onload = function() {
//   transitionToMainPage();
// };
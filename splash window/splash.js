function removeSplashScreen() {
  var splash = document.querySelector('.splash');
  if (splash) {
    splash.parentNode.removeChild(splash);
    window.location.replace("cart.html");
  }

setTimeout(removeSplashScreen, 4000);


  // setTimeout(function() {
    
  // }, 1000);

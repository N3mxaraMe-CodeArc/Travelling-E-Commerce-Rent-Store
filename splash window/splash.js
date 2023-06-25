function removeSplashScreen() {
    var splash = document.querySelector('.splash');
    splash.parentNode.removeChild(splash);
  }
  setTimeout(removeSplashScreen, 4000);
  
  setTimeout(function() {
    window.location.href = "index.html";
  }, 2000);

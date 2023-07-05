function removeSplashScreen() {
  var splash = document.querySelector('.splash');
  if (splash) {
    splash.parentNode.removeChild(splash);
  }
  window.location.href = "../home/index.html";
}

setTimeout(removeSplashScreen, 4000);

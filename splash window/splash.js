function removeSplashScreen() {
  var splash = document.querySelector('.splash');
  splash.parentNode.removeChild(splash);
  window.location.href="../Home2/index.html"
}
setTimeout(removeSplashScreen, 4000);

document.addEventListener("DOMContentLoaded", function() {
  var audio = document.getElementById("bg-music");
});

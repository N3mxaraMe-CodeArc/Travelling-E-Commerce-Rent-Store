let popup = document.getElementById("popup");

function openPopup(){
   
}

function closePopup(){
   popup.classList.remove("open-popup");
}

window.addEventListener("DOMContentLoaded", function () {
   popup.classList.add("open-popup");
})

window.addEventListener("DOMContentLoaded", () => {
   popup.classList.add("open-popup");
   popup.classList.remove("open-popup");
   window.location.href("../Home2/index.html")
})
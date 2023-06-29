function changeImage(starIndex) {
   var starElements = document.getElementsByClassName("star");

   for (var i = 0; i < starElements.length; i++) {
      var starElement = starElements[i];

      if (i < starIndex) {
         starElement.src = "../Images/form/star_rate.png";
         document.getElementById("rateus").innerHTML="Thanks For your Rating...!";
      }else {
         starElement.src = "../Images/form/star.png";
      }
   }
} 
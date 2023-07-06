var showText = function(target, message, index, interval) {
   if (index < message.length) {
     document.getElementById(target).textContent += message[index++];
     setTimeout(function() {
       showText(target, message, index, interval);
     }, interval);
   }
 };
 
 window.onload = function() {
   showText("para", "The beauty of nature in Sri Lanka is unparalleled, and hiking in " +
     "this tropical paradise is an experience like no other. As you " +
     "embark on your journey through the lush rainforests and " +
     "breathtaking mountains, you'll be captivated by the stunning " +
     "landscapes that surround you. The verdant hills adorned with " +
     "cascading waterfalls create a symphony of sights and sounds, " +
     "offering a soothing escape from the bustling city life.", 0, 25);
 };
 
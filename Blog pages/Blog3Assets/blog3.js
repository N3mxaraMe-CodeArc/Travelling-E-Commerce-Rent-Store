// Wait for the document to load before attaching the event listener
document.addEventListener("DOMContentLoaded", function() {
    // Get the anchor link element
    var scrollLink = document.querySelector("a[href='#paragraph']");

    // Scroll to the content section when the link is clicked
    scrollLink.addEventListener("click", function(event) {
      event.preventDefault(); // Prevent the default anchor link behavior
      var contentSection = document.getElementById("paragraph");
      contentSection.scrollIntoView({ behavior: "smooth" });
    });
  });
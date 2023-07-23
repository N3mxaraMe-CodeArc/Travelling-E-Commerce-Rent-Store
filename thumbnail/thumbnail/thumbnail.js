let next = document.querySelector('.next')
let prev = document.querySelector('.prev')
let solotravelling = 'https://www.youtube.com/watch?v=dQnFIJv1u8A';
let tips = 'https://www.youtube.com/watch?v=6tBgdw4cDPU';
let culture = 'https://www.youtube.com/watch?v=OxFOuZCokLk';
let food = 'https://www.youtube.com/watch?v=rL1s7ZRk85Q;'
let equipments = 'https://www.youtube.com/watch?v=oO-qOkpsplk'
let destinations = 'https://www.youtube.com/watch?v=vYxNrehP_5w'






next.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slider').appendChild(items[0])
})

prev.addEventListener('click',function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slider').prepend(items[items.length - 1])
})

// Get references to the elements
const themeSelector = document.getElementById('theme-select');
const body = document.body; // Change this line to target the body element directly

// Function to apply the selected theme
function applyTheme(theme) {
  if (theme === 'Random') {
    body.style.backgroundColor = getRandomColor();
  } else {
    body.style.backgroundColor = ''; // Reset the inline background color
    body.classList.remove('default', 'lightY', 'lightG', 'Random');
    body.classList.add(theme);
  }

  // Store the selected theme in local storage
  localStorage.setItem('theme', theme);
}

// Event listener for theme selector changes
themeSelector.addEventListener('change', function() {
  const selectedTheme = themeSelector.value;
  applyTheme(selectedTheme);
});

// Set the initial theme based on the user's preference (you can use local storage to remember the theme selection across page loads)
const userPreferredTheme = localStorage.getItem('theme');
if (userPreferredTheme) {
  themeSelector.value = userPreferredTheme;
  applyTheme(userPreferredTheme);
} else {
  // If no theme is set in local storage, set the default theme
  applyTheme('default');
}

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const fontSizeSelector = document.getElementById('font-size-select');
const body1 = document.body; 


function applyFontSize(fontSize) {
  body1.style.fontSize = fontSize;
  

  localStorage.setItem('font-size', fontSize);
}

fontSizeSelector.addEventListener('change', function() {
  const selectedFontSize = fontSizeSelector.value;
  applyFontSize(selectedFontSize);
});

const userPreferredFontSize = localStorage.getItem('font-size');
if (userPreferredFontSize) {
  fontSizeSelector.value = userPreferredFontSize;
  applyFontSize(userPreferredFontSize);
} else {

  applyFontSize('medium');
}
const fieldsets = document.querySelectorAll('fieldset');
fieldsets.forEach(fieldset => {
    fieldset.style.display = "none";
});

let currentFieldset = null;

function showFieldset(fieldsetNumber) {
    if (currentFieldset !== null) {
        // Hide the previously displayed fieldset
        currentFieldset.style.display = "none";
    }

    // Show the selected fieldset
    const selectedFieldset = document.getElementById(`fieldset${fieldsetNumber}`);
    selectedFieldset.style.display = "block";

    // Update the currentFieldset variable
    currentFieldset = selectedFieldset;
}


  

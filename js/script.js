//Toggle menu 
const menuBtn = document.getElementById('menuBtn');
const menu = document.getElementById('menu');

menuBtn.addEventListener('click', () => {
    if (menu.style.display === 'none') {
        menu.style.display = 'block';
    } else {
        menu.style.display = 'none';
    }
});

//Alert Message
const alertBtn = document.getElementById('alertBtn');

alertBtn.addEventListener('click', function() {
    alert('Hi! Welcome to my Website!');
});

//Increment and Decrement Counter

const incrementBtn = document.getElementById('incrementBtn');
const decrementBtn = document.getElementById('decrementBtn');
const counterDisplay = document.getElementById('counter');

//Initialize counter variable
let counter = 0;

// Update the counter display initially
counterDisplay.textContent = counter;

incrementBtn.addEventListener('click', function() {
    counter++;
    counterDisplay.textContent = counter;
});

decrementBtn.addEventListener('click', function() {
    counter--;
    counterDisplay.textContent = counter;
});

//Reset the page
const resetBtn = document.getElementById('resetBtn');

resetBtn.addEventListener('click', function() {
    location.reload();
});

//Username Validation
const usernameInput = document.getElementById('username');
const greetBtn = document.getElementById('greetBtn');
const greetingDisplay = document.getElementById('greeting');

function isValidUsername(username) {
    const namePattern = /^[a-zA-Z]+(?:\s[a-zA-Z]+)*$/;
    return namePattern.test(username);
}

greetBtn.addEventListener("click", function () {
  //get the value of the input
  const username = usernameInput.value.trim();

  //check if the input is valid
  if (username === "") {
    greetingDisplay.textContent = "Please enter your username.";
  } else if (!isValidUsername(username)) {
    greetingDisplay.textContent = "Please enter a valid username (Letters only).";
  } else {
    greetingDisplay.textContent = `Hello, ${username}!`;
  }
});

//Add Paragraph - DOM manipulation
const addParagraphBtn = document.getElementById("addParagraphBtn");
const paragraphContainer = document.getElementById("paragraphContainer");

addParagraphBtn.addEventListener("click", function () {
  const newParagraph = document.createElement("p");
  newParagraph.textContent = "Congratulations on learning Practical JavaScript";
  paragraphContainer.appendChild(newParagraph);
});

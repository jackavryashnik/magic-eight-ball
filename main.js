function displayGreeting() {
  // Get the input element by ID
  const nameInput = document.getElementById("nameInput");

  // Get the value of the input field
  const name = nameInput.value;

  // Display the greeting message
  const greeting = `Hello, ${name}!`;
  document.getElementById("greetingOutput").textContent = greeting;
}

const responseEl = document.getElementById("response");
const clearEl = document.getElementById("clear");

function generateRandomResponse() {
  let randomNumber = Math.floor(Math.random() * 8);
  let eightBall;

  switch (randomNumber) {
    case 0:
      eightBall = "Signs point to yes";
      break;
    case 1:
      eightBall = "It is certain";
      break;
    case 2:
      eightBall = "It is decidedly so";
      break;
    case 3:
      eightBall = "Reply hazy try again";
      break;
    case 4:
      eightBall = "Cannot predict now";
      break;
    case 5:
      eightBall = "Do not count on it";
      break;
    case 6:
      eightBall = "My sources say no";
      break;
    case 7:
      eightBall = "Outlook not so good";
      break;
  }

  return eightBall;
}

function displayResponse() {
  responseEl.innerHTML = generateRandomResponse();
  responseEl.style.fontSize = "18px";
  setTimeout(function() {
    responseEl.innerHTML = "8";
    responseEl.style.fontSize = "120px";
    clearEl.value = "";
  }, 4000);
}

document.getElementById("askme").addEventListener("click", displayResponse);
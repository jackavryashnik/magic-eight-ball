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
      eightBall = "Знаки говорять так";
      break;
    case 1:
      eightBall = "Це певно";
      break;
    case 2:
      eightBall = "Це безперечно";
      break;
    case 3:
      eightBall = "Відповідь невизначена, спробуйте ще раз";
      break;
    case 4:
      eightBall = "Не можу передбачити зараз";
      break;
    case 5:
      eightBall = "Не став на це";
      break;
    case 6:
      eightBall = "Мої джерела кажуть ні";
      break;
    case 7:
      eightBall = "Перспективи не дуже гарні";
      break;
  }

  return eightBall;
}

function displayResponse() {
  const nameInput = document.getElementById("nameInput");
  const question = nameInput.value;

  const answer = generateRandomResponse();

  // Display the response message
  responseEl.innerHTML = answer;
  responseEl.style.fontSize = "18px";

  // Save the question and answer to history
  saveToHistory(question, answer);

  setTimeout(function() {
    responseEl.innerHTML = "8";
    responseEl.style.fontSize = "120px";
    clearEl.value = "";
  }, 4000);
}

document.getElementById("askme").addEventListener("click", displayResponse);

// Збереження історії діалогу
let history = [];

function saveToHistory(question, answer) {
  // Додаємо запитання та відповідь до масиву історії
  history.push({ question: question, answer: answer });

  // Якщо масив історії перевищує 10 елементів, видаляємо найстаріші елементи
  if (history.length > 10) {
    history.shift();
  }

  // Оновлюємо список запитань та відповідей на сторінці
  updateHistory();
}

function updateHistory() {
  let historyList = document.getElementById("history");

  // Очищаємо список перед оновленням
  historyList.innerHTML = "";

  // Додаємо кожне запитання та відповідь з історії до списку
for (let i = 0; i < history.length; i++) {
  let item = document.createElement("li");
  item.innerText = history[i].question + " - " + history[i].answer;
  historyList.appendChild(item);
}
}

// Still to do
// make function to add name and score and save to localStorage
// User Story
// AS A coding boot camp student
// I WANT to take a timed quiz on JavaScript fundamentals that stores high scores
// SO THAT I can gauge my progress compared to my peers
// Acceptance Criteria
// GIVEN I am taking a code quiz
var timer = document.getElementById("timer");
var startBtn = document.getElementById("startBtn");
var startContainer = document.getElementById("start-container");
var answerContainer = document.querySelector("#answer-container");
var questionContainer = document.querySelector("#question-container");
var submitText = document.querySelector("#submit-text");
var quizContainer = document.querySelector("#quiz-container");
var endContainer = document.querySelector("#end-container");
var highScore = document.querySelector("#high-score");
var submitBtn = document.querySelector("#submit-button");
var scoreBox = document.querySelector("#score-box");
var scoreCard = document.querySelector("#score-card");
var time = 100;
var index = 0;
var score = 0;
var storage = window.localStorage;
var endScores = JSON.parse(storage.getItem("scores"));
if (endScores) {
  endScores = JSON.parse(storage.getItem("scores"));
} else {
  endScores = [];
}
renderScores();
// questions taken from https://data-flair.training/blogs/javascript-quiz/
var questions = [
  {
    question: "JavaScript is a ___ -side programming language.",
    answers: [
      "Client",
      "Server",
      "Both",
      "None",
    ],
    correct: "Both",
  },
  {
    question: "Which of the following will write the message “Hello DataFlair!” in an alert box?",
    answers: [
      "alertBox(“Hello DataFlair!”);",
      "alert(Hello DataFlair!);",
      "msgAlert(“Hello DataFlair!”);",
      "alert(“Hello DataFlair!”);",
    ],
    correct: "alert(“Hello DataFlair!”);",
  },
  {
    question: "How do you find the minimum of x and y using JavaScript?",
    answers: [
      "min(x,y);",
      "Math.min(x,y)",
      "Math.min(xy)",
      "min(xy);",
    ],
    correct: "Math.min(x,y)",
  },
  {
    question: "Which JavaScript label catches all the values, except for the ones specified?",
    answers: [
      "catch",
      "label",
      "try",
      "default",
    ],
    correct: "default",
  },
  {
    question: "Which are the correct \"if\" statements to execute certain code if “x” is equal to 2?",
    answers: [
      "if(x 2)",
      "if(x = 2)",
      "if(x === 2)",
      "if(x != 2 )",
    ],
    correct: "if(x === 2)",
  },
  {
    question: "If you type the following code in the console window, what result will you get? \"3 > 2 > 1 === false\"",
    answers: [
      "true",
      "false",
    ],
    correct: "true",
  },
];
// WHEN I click the start button
startBtn.addEventListener("click", function (e) {
  // THEN a timer starts
  displayTime();
  // timer.textContent = time;
  // setInterval(function () {
  //   time--;
  //   timer.textContent = time;
  // }, 1000);
  // hide the starting container
  startContainer.style.display = "none";
  questionDisplay(index);
});
answerContainer.addEventListener("click", function (event) {
  var element = event.target;
  if (element.matches("button")) {
    if (element.textContent === questions[index].correct) {
      score++;
      console.log("score: " + score);
    } else {
      // WHEN I answer a question incorrectly
      // THEN time is subtracted from the clock
      time = time - 10;
    }
    // WHEN I answer a question
    // THEN I am presented with another question]
    resetAnswer();
  }
});
// function to go to array and get question object then displays the questions and answers related to that object
function questionDisplay(i) {
  questions[i].answers.forEach(function (arrItem) {
    questionContainer.textContent = questions[i].question;
    var answerBtn = document.createElement("button");
    answerBtn.textContent = arrItem;
    answerBtn.classList = "btn btn-outline-primary col-12 my-1"
    answerContainer.append(answerBtn);
  });
}
// Function to reset the former question and display the next quesiton
function resetAnswer() {
  scoreCard.textContent = "Score: " + score;
  questionContainer.textContent = "";
  answerContainer.textContent = "";
  index++;
  // WHEN all questions are answered
  // THEN the game is over
  if (index >= questions.length) {
    console.log("game over");
    gameOver();
  } else {
    questionDisplay(index);
  }
}
function gameOver() {
  questionContainer.style.display = "none";
  quizContainer.style.display = "none";
  answerContainer.style.display = "none";
  endContainer.style.display = "block";
}
function displayTime() {
  timer.textContent = "Time Left: " + time;
  var timerCount = setInterval(function () {
    time--;
    timer.textContent = "Time Left: " + time;
    // WHEN the timer reaches 0
    // THEN the game is over
    if (time <= 0) {
      gameOver();
      clearInterval(timerCount);
      timer.textContent = "Out of time";
    }
  }, 1000);
}
// THEN I can save my initials and my score
function submitInit(e) {
  e.preventDefault();
  //setting the response var to be the users text
  var response = submitText.value;
  // retrieving the saved value so we can add to it
  // adding new values to the array
  endScores.push({ initials: response, storedScore: score });
  //setting the local storage to be the new array
  storage.setItem("scores", JSON.stringify(endScores));
  var form = document.querySelector("form");
  form.style.display = "none";
  renderScores();
}
function renderScores() {
  scoreBox.innerHTML = "";
  // iterating through array to add to page
  endScores.forEach(function (item) {
    var scoreListItem = document.createElement("li");
    scoreListItem.classList = "list-group-item"
    scoreListItem.textContent =
      "Name: " + item.initials + "\n" + "Score: " + item.storedScore;
    scoreBox.append(scoreListItem);
  });
}
submitBtn.addEventListener("click", submitInit);
// Your Task
// At some point in your journey to become a full-stack web developer, you’ll likely be asked to complete a coding assessment—perhaps as part of an interview process. A typical coding assessment includes both multiple-choice questions and interactive coding challenges.
// To help familiarize you with these tests and allow you to use the skills covered in this unit, this week’s homework invites you to build a timed coding quiz with multiple-choice questions. This app will run in the browser and will feature dynamically updated HTML and CSS powered by JavaScript code that you write. It will have a clean, polished, and responsive user interface.
// This week’s coursework will equip you with all the skills you need to succeed in this assignment.
// Still to do

//make functionality so when the quiz ends the user is shown the end screen
// make function to add name and score and save to localStorage

// Your Task
// At some point in your journey to become a full-stack web developer, you’ll likely be asked to complete a coding assessment—perhaps as part of an interview process. A typical coding assessment includes both multiple-choice questions and interactive coding challenges.

// To help familiarize you with these tests and allow you to use the skills covered in this unit, this week’s homework invites you to build a timed coding quiz with multiple-choice questions. This app will run in the browser and will feature dynamically updated HTML and CSS powered by JavaScript code that you write. It will have a clean, polished, and responsive user interface.

// This week’s coursework will equip you with all the skills you need to succeed in this assignment.

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
var quizContainer = document.querySelector("#quiz-container");

var time = 30;
var index = 0;
var score = 0;
var questions = [
  {
    question: "placeholder 1",
    answers: [
      "placeholder 1 a",
      "placeholder 1 b",
      "placeholder 1 c",
      "placeholder 1 d",
    ],
    correct: "placeholder 1 d",
  },
  {
    question: "placeholder 2",
    answers: [
      "placeholder 2 a",
      "placeholder 2 b",
      "placeholder 2 c",
      "placeholder 2 d",
    ],
    correct: "placeholder 2 a",
  },
  {
    question: "placeholder 3",
    answers: [
      "placeholder 3 a",
      "placeholder 3 b",
      "placeholder 3 c",
      "placeholder 3 d",
    ],
    correct: "placeholder 3 d",
  },
  {
    question: "placeholder 4",
    answers: [
      "placeholder 4 a",
      "placeholder 4 b",
      "placeholder 4 c",
      "placeholder 4 d",
    ],
    correct: "placeholder 4 d",
  },
  {
    question: "placeholder 5",
    answers: [
      "placeholder 5 a",
      "placeholder 5 b",
      "placeholder 5 c",
      "placeholder 5 d",
    ],
    correct: "placeholder 5 d",
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
    answerContainer.append(answerBtn);
  });
}

// Function to reset the former question and display the next quesiton
function resetAnswer() {
  questionContainer.textContent = "";
  answerContainer.textContent = "";
  index++;
  if (index >= questions.length) {
    console.log("game over");
    gameOver();
  } else {
    questionDisplay(index);
  }
}

function gameOver() {
  questionContainer.style.display = "none";
  answerContainer.style.display = "none";
  var scoreScreen = document.createElement("p");
  scoreScreen.textContent = "Your score" + score;
  quizContainer.append(scoreScreen);
}

function displayTime() {
  timer.textContent = time;
  var timerCount= setInterval(function () {
    time--;
    timer.textContent = time;
    if (time <= 0) {
      gameOver();
      clearInterval(timerCount);
      timer.textContent = "Out of time";
    }
  }, 1000);
}
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and my score

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

var time = 100;
var questions = [
    {
        question: "placeholder1",
        answers: ["placeholder 1 a", "placeholder 1 b", "placeholder 1 c", "placeholder 1 d"],
        correct: "placeholder1 d"
    },
    {
        question: "placeholder 2",
        answers: ["placeholder 2 a", "placeholder 2 b", "placeholder 2 c", "placeholder 2 d"],
        correct: "placeholder 2 a"
    },
    {
        question: "placeholder 3",
        answers: ["placeholder 3 a", "placeholder 3 b", "placeholder 3 c", "placeholder 3 d"],
        correct: "placeholder 3 d"
    },
    {
        question: "placeholder 4",
        answers: ["placeholder 4 a", "placeholder 4 b", "placeholder 4 c", "placeholder 4 d"],
        correct: "placeholder 4 d"
    },
    {
        question: "placeholder 5",
        answers: ["placeholder 5 a", "placeholder 5 b", "placeholder 5 c", "placeholder 5 d"],
        correct: "placeholder 5 d"
    }
]

// WHEN I click the start button
startBtn.addEventListener("click", function(e) {
    // THEN a timer starts 
    console.log(e);
    timer.textContent= time;
    setInterval(function() {
        time--;
        timer.textContent = time;
    }, 1000);
    // hide the starting container
    startContainer.style.display = "none";
    // I am presented with a question
    questionContainer.textContent = questions[0].question;
    var questionBtn = document.createElement("button");
    questionBtn.textContent = questions[0].answers[0];
    answerContainer.append(questionBtn);

});





// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and my score
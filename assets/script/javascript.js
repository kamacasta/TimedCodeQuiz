// Universal variables
const timer = document.querySelector(".timer");
const gameOver = document.querySelector("#gameOver");
const introduction = document.querySelector(".introduction");
const initTest = document.querySelector("#initiateTest");
const quiz = document.querySelector(".quiz");
const questions = document.querySelector(".quizQuestions");
const answers = document.querySelector(".answers");
const notify = document.querySelector(".notify");
const correct = document.querySelector(".correct");
const incorrect = document.querySelector(".incorrect");
const endResults = document.querySelector(".endResults");
const initialsInput = document.querySelector("#initialsInput");
const submit = document.querySelector("#submitScore");

// Buttons given Event Listners
initTest.addEventListener("click", startQuiz);
submit.addEventListener("click", scoreSubmit);

// let variable created for timer
let timeRemaining = 75;
// variables created for use in logic
let questionOn;
let score;

// function for the quiz to be initated
// Calls timer function
function startQuiz() {
  // styles given by setAttribute
  introduction.setAttribute("style", "display: none");
  quiz.setAttribute("style", "display: block");
  // timer will display the timeRemaining
  timer.textContent = "TIme:" + timeRemaining;
  time();
  questionOn = 0;
  currentQuestionOn(question[questionOn++]);
}
// function displays the current question the tester is on.
function currentQuestionOn(question) {
  // This will present the questions
  questions.textContent = question.question;
  // Passing the arrow function into a button that will be created
  question.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn");
    // if statement checks if the input was correct or incorrect
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    answers.appendChild(button);
    button.addEventListener("click", answersResults);
  });
}

// depending on the results of the answer the time will decrease and will display the result to quizer
function answersResults(event) {
  // created these variables they are depreceted without an event
  const choosenAnswer = event.target;
  const correctAnswer = choosenAnswer.dataset.correct;
  // if statement for the correct notification or incorrect notification
  // if (!Object.is) {
  //     Object.defineProperty()
  // }
  if (choosenAnswer === "true") {
    incorrect;
    correct;
  } else {
    //and if the quizers got the question incorrect the timer is decremented
    correct;
    incorrect;
    // 10 second decrement
    timeRemaining -= 10;
  }
  newQuestion();
}

function newQuestion() {
  while (answers.firstChild) {
    answers.removeChild(answers.firstChild);
  }
  if (questionOn < question.length) {
    currentQuestionOn(question[questionOn++]);
    // But if the quizer gets all the answers right and there is no more questions
  } else {
    quizEnded();
  }
}

function quizEnded() {
  // we want the time remaining on the countdown timer to be the score
  score = timeRemaining;
  quiz.setAttribute("style", "display: none");
  notify.setAttribute("style", "display: none");
  endResults.setAttribute("style", "display: block");
  timer.setAttribute("style", "display: none");
  gameOver.setAttribute("style", "display: block");
}

const question = [
  // this array contains the questions that will appear to the quizer
  {
    // Arrow function question
    question: "What are arrow functions? ex: =>",
    answers: [
      // following correct is the result of the answer choosen
      { text: "Functions that shoot arrows.", correct: false },
      { text: "Arrow functions dont exist nice try!", correct: false },
      { text: "Concise way to write Constuctors.", correct: false },
      { text: "Concise way to write functions in JavaScript.", correct: true },
    ],
  },
  {
    // Create a function question
    question: "How do you create a function?",
    answers: [
      { text: "function:myFunction()", correct: false },
      { text: "function=myFunction()", correct: false },
      { text: "function myFunction()", correct: true },
    ],
  },
  {
    // call a function question
    question: "How would we call the previous function?",
    answers: [
      { text: "myFunction()", correct: true },
      { text: "call myFunction()", correct: false },
      { text: "myFunction(call)", correct: false },
      { text: "myFunction().call", correct: false },
    ],
  },
  {
    // array question
    question: "What do we wrap arrays with?",
    answers: [
      { text: "square brackets []", correct: true },
      { text: "curly brackets {}", correct: false },
      { text: "parenthesis ()", correct: false },
      {
        text: "Thanos it and use them all to obtain the all the arrays",
        correct: false,
      },
    ],
  },
  {
    // api question
    question: "Which does api stand for?",
    answers: [
      { text: "AI Programming Initiative", correct: false },
      { text: "A Pineapple In pizza is amazing....", correct: false },
      { text: "Application Programming Intel ", correct: false },
      { text: "Application Programming Interface", correct: true },
    ],
  },
  {
    // the most important question there is...
    question: "Carefully Answer... Does Pineapple belong on pizza?",
    answers: [
      { text: "NOOOOOO", correct: false },
      { text: "Of course it does!!", correct: true },
    ],
  },
];

// Function for timer to countdown
function time() {
  let timeInterval = setInterval(function () {
    // using the let varible created gloabally timeRemaining
    if (timeRemaining >= 1) {
      timeRemaining--;
      timer.textContent = " Time: " +  '' + '' + timeRemaining;
      // if the quizer runs out of time
    } else {
      gameOver.getElementedById = "You ran out of time!";
      clearInterval(timeInterval);
      quizEnded();
    }
  }, 1000);
}

// this function is apart of the event listner created universally 
function scoreSubmit() {
    localStorage.setItem('personalRecord', timeRemaining);
    localStorage.setItem('initials',  initialsInput);
    // window.location will send the quizer to the scoreboard.html
    window.location.replace('./scoreboard.html');
}
